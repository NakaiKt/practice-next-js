書籍「実践Next.js」のサンプルリポジトリ

## 環境構築
```
$ docker build -t practice-next-js .
$ docker run -it -p 3333:3333 -v $(pwd):/app --name practice-next-js --rm practice-next-js
```

## localhost環境実行
```
/app # npm run dev
```
