"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Separator } from "../ui/separator";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../ui/navigation-menu";
import { Button } from "../ui/button";
import { ToggleTheme } from "./toogle-theme";
import { routeList } from "../data/siteData";


export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="backdrop-blur-xl bg-background/80 shadow-lg border border-muted fixed top-4 left-1/2 -translate-x-1/2 z-50 rounded-2xl w-[90%] md:w-[80%] lg:max-w-screen-xl flex items-center justify-between px-4 py-3">
      <Link href="/" className="flex items-center space-x-2">
        <Image
          src="/logo.png"
          alt="Logo"
          width={50}
          height={50}
          className="rounded-md"
        />
        <span className="text-xl font-bold tracking-tight hidden md:block">
          DPS Tuition
        </span>
      </Link>

      {/* Mobile Navigation */}
      <div className="lg:hidden">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Menu
              className="w-6 h-6 text-foreground cursor-pointer"
              onClick={() => setIsOpen(!isOpen)}
            />
          </SheetTrigger>
          <SheetContent
            side="left"
            className="flex flex-col justify-between p-6 bg-background"
          >
            <div>
              <SheetHeader className="mb-6">
                <SheetTitle className="flex items-center space-x-2">
                  <Image src="/logo.png" alt="Logo" width={40} height={40} />
                  <span className="text-lg font-bold">DPS Tuition</span>
                </SheetTitle>
              </SheetHeader>
              <div className="space-y-4">
                {routeList.map(({ href, label }) => (
                  <Button
                    key={href}
                    onClick={() => setIsOpen(false)}
                    asChild
                    variant="ghost"
                    className="w-full justify-start text-base"
                  >
                    <Link href={href}>{label}</Link>
                  </Button>
                ))}
              </div>
            </div>
            <SheetFooter className="flex-col items-start mt-6">
              <Separator className="my-2" />
              <ToggleTheme />
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>

      {/* Desktop Navigation */}
      <NavigationMenu className="hidden lg:flex">
        <NavigationMenuList className="gap-4">
          {routeList.map(({ href, label }) => (
            <NavigationMenuItem key={href}>
              <NavigationMenuLink asChild>
                <Link
                  href={href}
                  className="text-sm font-medium hover:text-primary transition-colors"
                >
                  {label}
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>

      {/* Right Side Buttons */}
      <div className="hidden lg:flex items-center space-x-3">
        <ToggleTheme />
        <Button asChild size="sm" variant="default" className="font-bold ml-2">
          <Link aria-label="Book your class at DPSTuition" href="#contact">
            Book A Free Class
          </Link>
        </Button>
      </div>
    </header>
  );
};
