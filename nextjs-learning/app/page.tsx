import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Code2 } from "lucide-react";
import Link from "next/link";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];

export default function Home() {
  return (
    <div className="h-screen flex flex-col gap-0 bg-linear-to-t from-sky-200 to-indigo-200">
      {/* Navbar */}
      <div className=" w-full p-4 flex justify-between">
        <div className="flex gap-1 items-center">
          <Code2 size={30} />
          <div className="flex flex-col gap-0">
            <div className="font-mono text-xs">Code</div>
            <div className="font-bold text-sm">Learning</div>
          </div>
        </div>
        <div className="flex gap-2">
          <NavigationMenu>
            <NavigationMenuList>
              {components.map((item) => (
                <NavigationMenuLink key={item.href} asChild>
                  <Link href={item.href}>{item.title}</Link>
                </NavigationMenuLink>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <Button variant={"outline"} className="bg-transparent rounded-4xl px-12">Sign In</Button>
      </div>
      {/* Main Containts*/}
      <div className="w-full h-full">Main Page</div>
    </div>
  );
}
