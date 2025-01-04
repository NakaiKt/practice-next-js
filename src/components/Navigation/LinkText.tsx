"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

function judgeCurrent(isCurrent: boolean) {
  return isCurrent ? { "aria-current": "page" as const } : {};
}

type Props = {
  link: string;
  text: string;
};

export default function LinkText({ link, text }: Props) {
  const pathName = usePathname();
  return (
    <Link href={link} {...judgeCurrent(pathName === link)}>
      {text}
    </Link>
  );
}
