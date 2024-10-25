import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="size-full flex flex-col">
      <div className="flex justify-between m-3">
        <p className="text-xl">Coding Test Home</p>
        <ModeToggle />
      </div>
      <div className="flex justify-center h-full items-center">
        
      <Link href="/problems">
          <Button variant={"default"}>Go to problems</Button>
        </Link>
      </div>
    </div>
  );
}
