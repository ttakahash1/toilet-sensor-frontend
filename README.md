# 必要なもの

- node.js(v10.2.0)
- npm(v6.9.0)

※自分は```ndenv```というツールを使ってバージョンを指定しています。

# ローカルで開発

まずはパッケージインストールをします。

```
npm install
```

ローカルサーバーを立ち上げます。

```
npm run dev
```
http://localhost:5000 でアクセスするとローカルで画面を確認できます。

※開発であまりAPIを叩かない方がいいかと思い、JSONを返すモックサーバーを立てています。```http:localhost:3000/toilet```でアクセスできます。（返すJsonの値はdb.jsonの値です）
アナログなやり方ですが、```src/commons/fetcher.js```のURLを
手動で書き換えています。

[typicode/json-server](https://github.com/typicode/json-server)


# 注意点

CSS-in-JSを推奨しているのですが、個人的に好きじゃないので、scssを採用しています。

scssの変更を監視してリロードをかけるようにしていますが、Svelteのlivereloadの機能と相性が悪いのかたまに変な挙動を起こします。
その時はscssをビルドすると良いです。

```
npm run build-css
```

# コンパイル（ビルド）

Prod環境で使う際には、SCSSとSvelteをブラウザが解釈できるようにコンパイルする必要があります。
※現状では手動で行っていますが、将来的にはCI使って自動化したい。。

```
npm run build
```



以下、Svelteの説明（上記の内容と被ってたりするので、読まなくても大丈夫です。）

*Psst — looking for a shareable component template? Go here --> [sveltejs/component-template](https://github.com/sveltejs/component-template)*

---

# svelte app

This is a project template for [Svelte](https://svelte.dev) apps. It lives at https://github.com/sveltejs/template.

To create a new project based on this template using [degit](https://github.com/Rich-Harris/degit):

```bash
npx degit sveltejs/template svelte-app
cd svelte-app
```

*Note that you will need to have [Node.js](https://nodejs.org) installed.*


## Get started

Install the dependencies...

```bash
cd svelte-app
npm install
```

...then start [Rollup](https://rollupjs.org):

```bash
npm run dev
```

Navigate to [localhost:5000](http://localhost:5000). You should see your app running. Edit a component file in `src`, save it, and reload the page to see your changes.


## Deploying to the web

### With [now](https://zeit.co/now)

Install `now` if you haven't already:

```bash
npm install -g now
```

Then, from within your project folder:

```bash
cd public
now
```

As an alternative, use the [Now desktop client](https://zeit.co/download) and simply drag the unzipped project folder to the taskbar icon.

### With [surge](https://surge.sh/)

Install `surge` if you haven't already:

```bash
npm install -g surge
```

Then, from within your project folder:

```bash
npm run build
surge public
```
