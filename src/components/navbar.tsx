import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import { ModeToggle } from "./ui/theme-toggle";
export default function MainNavbar() {
  return (
    <div className="w-full justify-between">
      <Navbar fluid className="p-2">
        <NavbarBrand href="/">
          <ModeToggle />
          <span className="ml-1 self-center whitespace-nowrap text-2xl tracking-wide font-semibold">
            Todos App
          </span>
        </NavbarBrand>
        <div className="flex md:order-2">
          <Button
            href="/AddTodo"
            className="bg-blue-500 dark:bg-blue-800 text-white border-none rounded"
          >
            Create Todo
          </Button>
        </div>
      </Navbar>
    </div>
  );
}
