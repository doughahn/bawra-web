"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { Menu, ChevronDown } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import { useState } from "react";

const navItems = [
  { 
    label: "About", 
    href: "/about",
    subnav: [
      { label: "Core Values", href: "/about/core-values" }
    ]
  },
  { label: "Schedule", href: "/schedule" },
  { 
    label: "Events", 
    href: "/events",
    subnav: [
      { label: "Marinas", href: "/marinas" }
    ]
  },
  { label: "Results", href: "/results" },
  { 
    label: "Resources", 
    href: "/resources",
    subnav: [
      { label: "All Resources", href: "/resources" },
      { label: "Race Officials", href: "/resources?tab=officials" },
      { label: "Coxswains", href: "/resources?tab=coxswains" }
    ]
  },
  { label: "Contact", href: "/contact" },
];

export function Navigation() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const [open, setOpen] = useState(false);
  
  return (
    <header 
      className={`fixed top-0 z-50 w-full ${
        isHomePage 
          ? "bg-transparent backdrop-blur-sm" 
          : "bg-gradient-to-r from-blue-900 to-blue-800 shadow-md"
      }`}
    >
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6 md:gap-10">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="logo-font text-white text-xl">
              BAWRA
            </span>
          </Link>
          
          {/* Desktop navigation */}
          <nav className="hidden md:flex gap-6">
            {navItems.map((item) => 
              'subnav' in item && item.subnav ? (
                <DropdownMenu key={item.href}>
                  <DropdownMenuTrigger className={`text-sm font-bold text-white transition-colors flex items-center ${
                    pathname === item.href 
                      ? "border-b-2 border-white" 
                      : "hover:text-white/70"
                  }`}>
                    {item.label}
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem asChild>
                      <Link href={item.href}>{item.label}</Link>
                    </DropdownMenuItem>
                    {item.subnav.map((subItem) => (
                      <DropdownMenuItem key={subItem.href} asChild>
                        <Link href={subItem.href}>{subItem.label}</Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm font-bold text-white transition-colors ${
                    pathname === item.href 
                      ? "border-b-2 border-white" 
                      : "hover:text-white/70"
                  }`}
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>
        </div>
        
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Button 
            asChild 
            size="sm" 
            className={`hidden sm:flex ${
              isHomePage 
                ? "bg-white/20 hover:bg-white/30 text-white border border-white/30" 
                : "bg-blue-700 hover:bg-blue-600 text-white"
            }`}
          >
            <Link href="https://waiver.smartwaiver.com/w/60184b57585d5/web/">Waiver</Link>
          </Button>
          
          {/* Mobile menu */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button 
                variant="outline" 
                size="icon" 
                className="md:hidden border-white/30 text-white bg-white/10 hover:bg-white/20"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col gap-4 mt-8">
                {navItems.map((item) => 
                  'subnav' in item && item.subnav ? (
                    <div key={item.href} className="flex flex-col gap-2">
                      <SheetClose asChild>
                        <Link
                          href={item.href}
                          className={`text-lg font-bold transition-colors ${
                            pathname === item.href 
                              ? "text-primary"
                              : "hover:text-primary"
                          }`}
                          onClick={() => setOpen(false)}
                        >
                          {item.label}
                        </Link>
                      </SheetClose>
                      <div className="pl-4 flex flex-col gap-2 border-l-2 border-slate-200 dark:border-slate-700">
                        {item.subnav.map((subItem) => (
                          <SheetClose key={subItem.href} asChild>
                            <Link
                              href={subItem.href}
                              className={`text-base transition-colors ${
                                pathname === subItem.href 
                                  ? "text-primary"
                                  : "hover:text-primary text-slate-600 dark:text-slate-400"
                              }`}
                              onClick={() => setOpen(false)}
                            >
                              {subItem.label}
                            </Link>
                          </SheetClose>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <SheetClose key={item.href} asChild>
                      <Link
                        href={item.href}
                        className={`text-lg font-bold transition-colors ${
                          pathname === item.href 
                            ? "text-primary"
                            : "hover:text-primary"
                        }`}
                        onClick={() => setOpen(false)}
                      >
                        {item.label}
                      </Link>
                    </SheetClose>
                  )
                )}
                <SheetClose asChild>
                  <Link 
                    href="https://waiver.smartwaiver.com/w/60184b57585d5/web/"
                    className="text-lg font-bold transition-colors hover:text-primary"
                    onClick={() => setOpen(false)}
                  >
                    Waiver
                  </Link>
                </SheetClose>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}