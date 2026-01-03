"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

export function DashboardHeader() {
  const pathname = usePathname();
  const [showBookingMenu, setShowBookingMenu] = useState(false);

  return (
    <header className="bg-white">
      {/* Top Navigation */}
      <div className="container mx-auto px-6 lg:px-24 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/wanderboard">
            <span className="font-semibold text-xl tracking-wide text-[#3B0764]">
              Wanderboard
            </span>
          </Link>

          {/* Navigation Tabs */}
          <nav className="flex items-center">
            <Link href="/dashboard">
              <Button
                variant="ghost"
                size="sm"
                className={`rounded-lg font-semibold text-sm ${
                  pathname === "/dashboard"
                    ? "bg-[#F3E8FF] text-[#3B0764]"
                    : "text-[#334155]"
                }`}
              >
                Live Itinerary
              </Button>
            </Link>

            <div className="relative">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowBookingMenu(!showBookingMenu)}
                className="rounded-lg text-[#334155] font-semibold text-sm flex items-center gap-1"
              >
                Booking Details
                <ChevronDown className="size-4" />
              </Button>

              {showBookingMenu && (
                <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-lg shadow-md border border-[#9333EA] p-2 z-50">
                  <Link
                    href="/dashboard/budget"
                    onClick={() => setShowBookingMenu(false)}
                    className="block px-3 py-2 rounded-md text-sm font-semibold text-[#334155]"
                  >
                    Overall Budget
                  </Link>
                  <Link
                    href="/dashboard/schedule"
                    onClick={() => setShowBookingMenu(false)}
                    className="block px-3 py-2 rounded-md text-sm font-semibold text-[#334155]"
                  >
                    Schedule & Updates
                  </Link>
                </div>
              )}
            </div>
          </nav>

          {/* User Avatar */}
          <div className="size-10 rounded-full bg-[#F1F5F9] flex items-center justify-center">
            <span className="text-sm font-semibold text-[#334155]">AF</span>
          </div>
        </div>
      </div>
    </header>
  );
}
