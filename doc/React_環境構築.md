# React + Typescript環境構築

1. プロジェクトフォルダを格納するフォルダを作成する

2. インストールしたいフォルダに移動

3. Viteプロジェクトを作成

   ```bash
   npm create vite@latest
   ```

4. `? Project name: › vite-project` に対してプロジェクト名を入力する

5. フレームワークを選択（Reactを選択）

6. 言語を選択（Typescript + SWCを選択）

7. プロジェクトのルートフォルダに`.env.development`と`.env.production`ファイルを作成して以下の設定を記載する

   ```
   VITE_PROTOCOL=http://
   VITE_DOMAIN=localhost:
   VITE_PORT= 3001
   ```

   ※APIの設定に合わせて指定する

8. 作成したプロジェクト配下に移動して、npm installを実行する

   ```bash
   npm install
   ```

## プロジェクトの実行

```bash
npm run dev
```

### npm run dev実行時にエラーが出た場合

以下のコマンドを実行する：

```bash
npm install @vitejs/plugin-react-swc
```

## 参考

- https://monotein.com/blog/react-vite-how-to-use
