import { Errors } from '@/components';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ErrorBoundary } from 'react-error-boundary';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { LoginUserProvider } from '../providers/login-user-provider';
import { AppRouter } from './router';

function App() {

  //React-Query用
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
        refetchOnWindowFocus: false,
      },
    },
  });

  return (
    <ErrorBoundary
      FallbackComponent={Errors}
    >
      <QueryClientProvider
        client={queryClient}
      >
        <BrowserRouter>
          <ToastContainer
            position="top-center"
            autoClose={3000}
          />
          <LoginUserProvider>
            <AppRouter />
          </LoginUserProvider>
          {/* React-query devtool */}
          <ReactQueryDevtools
            initialIsOpen={false}
          />
        </BrowserRouter>
      </QueryClientProvider>
    </ErrorBoundary>
  )
}

export default App;