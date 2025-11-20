import Link from "next/link";
import { Footprints, Twitter, Instagram, Facebook } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t bg-card">
      <div className="container max-w-screen-2xl px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <Footprints className="h-6 w-6 text-primary" />
              <span className="font-bold text-lg">TrekTribe</span>
            </Link>
            <p className="text-muted-foreground text-sm">
              Find your path. Join the tribe.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Explore</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/explore" className="text-sm text-muted-foreground hover:text-foreground">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/ai-search" className="text-sm text-muted-foreground hover:text-foreground">
                  AI Search
                </Link>
              </li>
               <li>
                <Link href="/pricing" className="text-sm text-muted-foreground hover:text-foreground">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/partner" className="text-sm text-muted-foreground hover:text-foreground">
                  Host an Event
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">About Us</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="text-sm text-muted-foreground hover:text-foreground">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/sdg-impact" className="text-sm text-muted-foreground hover:text-foreground">
                  Our Impact
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              <Link href="#" aria-label="Twitter">
                <Twitter className="h-5 w-5 text-muted-foreground hover:text-foreground" />
              </Link>
              <Link href="#" aria-label="Instagram">
                <Instagram className="h-5 w-5 text-muted-foreground hover:text-foreground" />
              </Link>
              <Link href="#" aria-label="Facebook">
                <Facebook className="h-5 w-5 text-muted-foreground hover:text-foreground" />
              </Link>
            </div>
          </div>
        </div>
        <div className="py-6 border-t">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} TrekTribe. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
