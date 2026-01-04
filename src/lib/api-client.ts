import { default as Axios, InternalAxiosRequestConfig } from 'axios';
import { API_PATH } from '../consts/api-path';
import { accessTokenRef, resetAccessToken, resetLogin, updateAccessToken } from './access-token-store';

type QueueItem = {
  resolve: (accessToken: string) => void;
  reject: (reason?: any) => void;
};

function authRequestInterceptor(config: InternalAxiosRequestConfig) {

  config.headers = config.headers || {};
  config.headers.Accept = 'application/json';

  if (accessTokenRef) {
    config.headers['Authorization'] = accessTokenRef;
  }

  config.withCredentials = true;

  return config;
}

export const api = Axios.create({
});

const refreshApi = Axios.create({
});

api.interceptors.request.use(authRequestInterceptor);
refreshApi.interceptors.request.use(authRequestInterceptor);

let isRefreshing = false;
let queue: QueueItem[] = [];

api.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {

    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {

      originalRequest._retry = true;

      return new Promise(async (resolve, reject) => {

        queue.push({
          resolve: (token) => {

            originalRequest.headers = {
              ...(originalRequest.headers || {}),
              Authorization: token,
            };

            resolve(api(originalRequest));
          },
          reject,
        });

        if (!isRefreshing) {

          isRefreshing = true;

          try {

            // リフレッシュ
            const res = await refreshApi.post(
              API_PATH.REFRESH,
              {},
              {
                headers: {
                  'X-CSRF-Token': 'web',
                },
              }
            );

            const newAccessToken = res.data.data;
            updateAccessToken(newAccessToken);

            // 認証エラーになったAPIを再度コール
            queue.forEach(cb => {
              cb.resolve(newAccessToken);
            });

            queue = [];
          } catch (err) {

            // リフレッシュ失敗
            resetAccessToken();
            resetLogin();

            reject(err);
          } finally {
            isRefreshing = false;
          }
        }
      });
    }

    return Promise.reject(error);
  },
);