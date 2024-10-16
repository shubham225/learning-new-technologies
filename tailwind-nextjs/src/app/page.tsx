import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link href='/tailwind' className="text-lg font-bold underline text-primary hover:text-red-400">
        Tailwind
      </Link>
    </div>
  );
}
