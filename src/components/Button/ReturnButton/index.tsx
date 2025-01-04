"use client";
import { useRouter } from "next/navigation";

export default function ReturnButton() {
  const router = useRouter();
  return <button onClick={() => router.back()}>戻る</button>;
}
