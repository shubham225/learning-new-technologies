import { Button } from "@/components/ui/button";
import { Code2 } from "lucide-react"

export default function Home() {
  return (
    <div className="h-screen flex flex-col gap-0">
      {/* Navbar */}
      <div className="bg-amber-300 w-full p-4 flex justify-between">
        <div className="flex gap-1 items-center">
          <Code2 size={30} />
          <div className="flex flex-col gap-0">
            <div className="font-mono text-xs">Code</div>
            <div className="font-bold text-sm">Learning</div>
          </div>
        </div>
        <div className="flex gap-2">
          Navigation Menu
        </div>
        <Button variant="outline" className="bg-transparent rounded-4xl">Sign In</Button>
      </div>
      {/* Main Containts*/}
      <div className="bg-red-300 w-full">
        Main Page
      </div>
    </div>
  );
}
