import React, { useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';

interface NavItem {
  title: string;
  items?: {
    title: string;
    description: string;
  }[];
  href?: string;
}

const navItems: NavItem[] = [
  {
    title: "Home",
    href: "/"
  },
  {
    title: "Routes",
    items: [
      {
        title: "Bus Routes",
        description: "View all available bus routes."
      },
      {
        title: "Route Schedules",
        description: "Check the schedules for each bus route."
      }
    ]
  },
  {
    title: "Live Tracking",
    href: "/live-tracking"
  },
  {
    title: "Contact",
    href: "/contact"
  },
  {
    title: "User",
    items: [
      {
        title: "Login",
        description: "Access your account."
      },
      {
        title: "Sign Up",
        description: "Create a new account."
      }
    ]
  }
];

export function NavigationMenu() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="border-b bg-gradient-to-r from-white-800 to-black text-black z-9999">

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between h-16">
        <div className="flex items-center">
          <div className="flex-shrink-0 flex items-center">
            <div className="w-20 h-20">
              {/* Replace the box with your logo image */}
              <img src="/images/buslogo.png" alt="Logo" className="w-full h-full object-contain" />
            </div>
            <span className="ml-2 text-xl font-semibold">Bus Tracker</span>
          </div>

            {/* Desktop Menu */}
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              {navItems.map((item) => (
                <div
                  key={item.title}
                  className="relative"
                  onMouseEnter={() => setOpenMenu(item.title)}
                  onMouseLeave={() => setOpenMenu(null)}
                >
                  <button
                    className="inline-flex items-center px-1 pt-1 text-sm font-medium text-black hover:text-red-300 z-999"
                  >
                    {item.title}
                    {item.items && (
                      <ChevronDown className="ml-1 h-4 w-4" />
                    )}
                  </button>

                  {item.items && openMenu === item.title && (
                    <div className="absolute left-0 mt-2 w-screen max-w-md">
                      <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                        <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                          {item.items.map((subItem) => (
                            <a
                              key={subItem.title}
                              href="#"
                              className="-m-3 p-3 block rounded-lg hover:bg-gray-50 transition ease-in-out duration-150"
                            >
                              <p className="text-base font-medium text-gray-900">
                                {subItem.title}
                              </p>
                              <p className="mt-1 text-sm text-gray-500">
                                {subItem.description}
                              </p>
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="sm:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="sm:hidden bg-gradient-to-r from-red-600 to-black text-white px-4 py-2">
          {navItems.map((item) => (
            <div key={item.title} className="space-y-2">
              <button className="w-full text-left py-2 px-4 text-lg font-medium">
                {item.title}
              </button>
              {item.items && (
                <div className="space-y-1 pl-4">
                  {item.items.map((subItem) => (
                    <a
                      key={subItem.title}
                      href="#"
                      className="block text-sm py-1 text-white hover:text-gray-300"
                    >
                      {subItem.title}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
}
export default NavigationMenu;
