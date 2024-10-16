import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link href='/tailwind' className="font-mono underline text-primary hover:text-red-400">
        Tailwind
      </Link>
    </div>
  );
}
