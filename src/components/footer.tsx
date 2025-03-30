"use client";

import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t bg-muted">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <h2 className="text-lg font-semibold text-bawra-primary mb-4">BAWRA</h2>
            <p className="text-sm text-muted-foreground max-w-xs">
              Bay Area Whaleboat Rowing Association - committed to diversity, equity and inclusion.
            </p>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="text-sm font-medium mb-4">Navigate</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-bawra-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-bawra-primary transition-colors">
                  About BAWRA
                </Link>
              </li>
              <li>
                <Link href="/schedule" className="text-muted-foreground hover:text-bawra-primary transition-colors">
                  Schedule
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-muted-foreground hover:text-bawra-primary transition-colors">
                  Events
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="text-sm font-medium mb-4">Resources</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/results" className="text-muted-foreground hover:text-bawra-primary transition-colors">
                  Race Results
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-muted-foreground hover:text-bawra-primary transition-colors">
                  RO and Cox Resources
                </Link>
              </li>
              <li>
                <Link href="https://waiver.smartwaiver.com/w/60184b57585d5/web/" className="text-muted-foreground hover:text-bawra-primary transition-colors">
                  Waiver
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-bawra-primary transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="text-sm font-medium mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="text-muted-foreground">
                Bay Area Whaleboat Rowing Association
              </li>
              <li>
                <a href="mailto:bawra+owner@groups.io" className="text-muted-foreground hover:text-bawra-primary transition-colors">
                  bawra+owner@groups.io
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-muted-foreground mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Bay Area Whaleboat Rowing Association. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
          </p>
        </div>
      </div>
    </footer>
  );
}