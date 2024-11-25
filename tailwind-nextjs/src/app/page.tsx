import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="flex flex-col gap-4">
      <Link href='/tailwind' className="text-lg font-bold underline text-primary hover:text-red-400">
        Tailwind
      </Link>
      <Link href='/dashboard' className="text-lg font-bold underline text-primary hover:text-red-400">
        DashBoard
      </Link>
      </div>
    </div>
  );
}
