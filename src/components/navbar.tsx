import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import { ModeToggle } from "./ui/theme-toggle";
import Image from "next/image";
export default function MainNavbar() {
  return (
    <div className="w-full justify-between pt-1">
      <Navbar fluid rounded>
        <NavbarBrand href="/">
          <ModeToggle />
          <span className="ml-1 self-center whitespace-nowrap text-2xl tracking-wide font-semibold">
            Toker todos
          </span>
        </NavbarBrand>
        <div className="flex md:order-2">
          <Button className="bg-blue-400 dark:bg-blue-800 text-white border-none rounded">
            Create Todo
          </Button>
        </div>
      </Navbar>
    </div>
  );
}
