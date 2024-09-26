import { Link } from "@remix-run/react";
import { Button } from "~/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "~/components/ui/popover";
import { Menu } from "lucide-react";
import Logo from "./logo";
import { ModeToggle } from "./mode-toggle";

export function Header() {
  return (
    <header className="bg-background text-foreground border-b">
      <nav className="container mx-auto flex justify-between items-center p-4">
        <Link to="/" className="text-xl font-bold flex items-center gap-2">
          <div className="rounded-full bg-foreground text-background p-2 w-min">
            <Logo className="size-8" />
          </div>
          <span className="hidden sm:inline">Serenity by Geoff</span>
        </Link>
        <ul className="hidden md:flex space-x-4">
          <li>
            <Link to="/" className="hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:underline">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:underline">
              Contact
            </Link>
          </li>
        </ul>
        <div className="flex items-center gap-2">
          <ModeToggle />
          <Popover>
            <PopoverTrigger asChild className="md:hidden">
              <Button variant="outline" size="icon">
                <Menu className="h-[1.2rem] w-[1.2rem]" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-screen p-4">
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="block hover:underline">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="block hover:underline">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="block hover:underline">
                    Contact
                  </Link>
                </li>
              </ul>
            </PopoverContent>
          </Popover>
        </div>
      </nav>
    </header>
  );
}
