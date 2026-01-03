"use client";

import { Home, LineChart, Calendar, BookOpen, Settings } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navItems = [
  { id: "home", href: "/informatics/dashboard", icon: Home, label: "Home" },
  { id: "insights", href: "/informatics/insights", icon: LineChart, label: "Insights" },
  { id: "planner", href: "/informatics/planner", icon: Calendar, label: "Planner" },
  { id: "reflection", href: "/informatics/reflection", icon: BookOpen, label: "Reflection" },
  { id: "settings", href: "/informatics/settings", icon: Settings, label: "Settings" },
];

export function BottomNavigation() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/informatics/dashboard") {
      return pathname === "/informatics/dashboard";
    }
    return pathname.startsWith(href);
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-background border-t border-border px-4 py-2 z-50">
      <div className="max-w-md mx-auto flex justify-around">
        {navItems.map((item) => (
          <Link
            key={item.id}
            href={item.href}
            className={cn(
              "flex flex-col items-center gap-1 px-4 py-2 rounded-xl transition-all duration-300",
              isActive(item.href)
                ? "bg-primary/10 text-primary"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            <item.icon className="w-5 h-5" />
            <span className="text-[10px] font-medium">{item.label}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
}

