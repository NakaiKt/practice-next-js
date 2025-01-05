"use client";
// 命名規約に則ったファイル
// 子コンポーネントで例外が発生した場合に表示するコンポーネント
// NOTE: ErrorBoundaryはコンポーネント単位で使用、こちらはページ単位で使用する
// NOTE: より広い範囲でエラー処理を行いたい場合は、global-error.tsxを使用する
// `"use client"` が必要

import { useEffect } from "react";

type Props = {
  error: Error;
  reset: () => void;
};
export default function Error({ error, reset }: Props) {
  useEffect(() => {
    // error処理
    console.log("Error", error);
  }, [error]);

  return (
    <div>
      <h1>Error</h1>
      <p>{error.message}</p>
      <p>
        reset処理で再レンダリングが試行される。ページ全体ではなくエラー箇所だけ再読み込みされる
      </p>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
