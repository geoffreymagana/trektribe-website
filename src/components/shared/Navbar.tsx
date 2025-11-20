
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Footprints, Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/explore", label: "Explore Events" },
  { href: "/ai-search", label: "AI Search" },
  { href: "/pricing", label: "Pricing" },
  { href: "/sdg-impact", label: "Our Impact" },
  { href: "/about", label: "About" },
  { href: "/partner", label: "For Partners" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center px-4">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Footprints className="h-6 w-6 text-primary" />
            <span className="hidden font-bold sm:inline-block">TrekTribe</span>
          </Link>
          <nav className="hidden lg:flex items-center gap-6 text-sm">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "transition-colors hover:text-foreground/80",
                  pathname === link.href
                    ? "text-foreground"
                    : "text-foreground/60"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex flex-1 items-center justify-end space-x-2">
          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="pr-0">
                <SheetHeader>
                  <SheetTitle className="sr-only">Mobile Menu</SheetTitle>
                </SheetHeader>
                <Link href="/" className="mr-6 flex items-center space-x-2">
                  <Footprints className="h-6 w-6 text-primary" />
                  <span className="font-bold">TrekTribe</span>
                </Link>
                <div className="my-4 h-[calc(100vh-8rem)] pb-10 pl-6">
                  <div className="flex flex-col space-y-3">
                    {navLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className={cn(
                          "transition-colors hover:text-foreground/80",
                           pathname === link.href ? "text-foreground" : "text-foreground/60"
                        )}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
                 <div className="pl-6">
                    <Button asChild>
                      <Link href="/partner">Post an Event</Link>
                    </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
          <nav className="hidden lg:flex items-center">
            <Button asChild>
                <Link href="/partner">List Your Event</Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}
