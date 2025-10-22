"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
          <Link href="/" className="flex items-center space-x-2">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">NB</span>
              </div>
              <span className="font-bold text-xl">nickobaz</span>
            </div>
          </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link href="/" legacyBehavior passHref>
                    <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                      Home
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Project Management</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                      <div className="row-span-3">
                        <NavigationMenuLink asChild>
                          <Link
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                            href="/project-management"
                            legacyBehavior>
                            <div className="mb-2 mt-4 text-lg font-medium">
                              Project Management
                            </div>
                            <p className="text-sm leading-tight text-muted-foreground">
                              Strategic project leadership and delivery expertise
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </div>
                      <div className="grid gap-2">
                        <Link
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          href="/project-management/agile"
                          legacyBehavior>
                          <div className="text-sm font-medium leading-none">Agile Methodologies</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Scrum, Kanban, and Lean practices
                          </p>
                        </Link>
                        <Link
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          href="/project-management/leadership"
                          legacyBehavior>
                          <div className="text-sm font-medium leading-none">Team Leadership</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Cross-functional team management
                          </p>
                        </Link>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Frontend Development</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                      <div className="row-span-3">
                        <NavigationMenuLink asChild>
                          <Link
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                            href="/frontend-development"
                            legacyBehavior>
                            <div className="mb-2 mt-4 text-lg font-medium">
                              Frontend Development
                            </div>
                            <p className="text-sm leading-tight text-muted-foreground">
                              Modern web technologies and frameworks
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </div>
                      <div className="grid gap-2">
                        <Link
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          href="/frontend-development/react"
                          legacyBehavior>
                          <div className="text-sm font-medium leading-none">React & Next.js</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Modern React development with Next.js
                          </p>
                        </Link>
                        <Link
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          href="/frontend-development/ui"
                          legacyBehavior>
                          <div className="text-sm font-medium leading-none">UI/UX Design</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Beautiful and intuitive user interfaces
                          </p>
                        </Link>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/blog" legacyBehavior passHref>
                    <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                      Blog
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/about" legacyBehavior passHref>
                    <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                      About
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <Button asChild>
              <Link href="/contact">Let's Talk</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-t">
              <Link href="/" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-accent">
                Home
              </Link>
              <Link href="/project-management" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-accent">
                Project Management
              </Link>
              <Link href="/frontend-development" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-accent">
                Frontend Development
              </Link>
              <Link href="/blog" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-accent">
                Blog
              </Link>
              <Link href="/about" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-accent">
                About
              </Link>
              <Link href="/contact" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-accent">
                Contact
              </Link>
              <div className="px-3 py-2">
                <Button asChild className="w-full">
                  <Link href="/contact">Let's Talk</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
