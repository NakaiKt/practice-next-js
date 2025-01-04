書籍「実践 Next.js」のサンプルリポジトリ
書籍付属のサンプルコードは [ここ](https://github.com/practical-nextjs-book)

実践 Next.js は Next14 で実装されているが、本実装は Next15 を使用している

## 環境構築

```
$ docker build -t practice-next-js .
$ docker run -it -p 3333:3333 -v $(pwd):/app --name practice-next-js --rm practice-next-js
```

## localhost 環境実行

```
/app # npm run dev
```

## local で api の立ち上げ

api 実装は勉強の本質ではないため、書籍付属の api コードを使用する
[このコード](https://github.com/practical-nextjs-book/training)を clone し、

```
cd packages/training-api
npm run dev
```
