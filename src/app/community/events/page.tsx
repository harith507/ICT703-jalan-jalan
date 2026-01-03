"use client";

import { MapPin, Calendar, TicketCheck } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

// Badge component for consistent styling
function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center justify-center gap-1.5 px-2 py-0.5 text-xs font-semibold rounded-lg border border-purple-950 bg-white/10 text-slate-600">
      {children}
    </span>
  );
}

// Avatar component
function Avatar({ initials }: { initials: string }) {
  return (
    <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center">
      <span className="text-sm font-semibold text-slate-600">{initials}</span>
    </div>
  );
}

// Event Card component
function EventCard({ 
  title, 
  subtitle,
  date, 
  location, 
  type,
  badges 
}: { 
  title: string;
  subtitle: string;
  date: string; 
  location: string;
  type: string;
  badges: string[];
}) {
  return (
    <Card className="w-[400px] border border-purple-950 shadow-sm rounded-lg overflow-hidden">
      <div className="p-6 space-y-1">
        <h3 className="font-semibold text-slate-700">{title}</h3>
        <p className="text-sm text-slate-500">{subtitle}</p>
      </div>
      <div className="h-[267px] bg-slate-200" />
      <div className="p-6 space-y-2">
        <div className="flex items-center gap-2 text-sm text-slate-600">
          <MapPin className="w-6 h-6" />
          <span>{location}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-slate-600">
          <Calendar className="w-6 h-6" />
          <span>{date}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-slate-600">
          <TicketCheck className="w-6 h-6" />
          <span>{type}</span>
        </div>
        <div className="flex flex-wrap gap-2 pt-2">
          {badges.map((badge, i) => (
            <Badge key={i}>{badge}</Badge>
          ))}
        </div>
        <div className="text-right pt-2">
          <span className="text-sm font-medium text-slate-700">View More</span>
        </div>
      </div>
    </Card>
  );
}

export default function UpcomingEventsPage() {
  const events = [
    {
      title: "Jom Cuti Sekolah 2025",
      subtitle: "School holiday travel deals and family activities",
      date: "12 - 15 January 2025",
      location: "Kuala Lumpur",
      type: "Promotion Event",
      badges: ["Family-friendly", "School Holiday"]
    },
    {
      title: "Cuti Cuti Muslim-Friendly Fair",
      subtitle: "Muslim-friendly travel packages and experiences",
      date: "18- 20 January 2025",
      location: "Kuala Lumpur",
      type: "Travel Fair",
      badges: ["Muslim-friendly", "Travel Deals"]
    },
    {
      title: "Play Your Way to Joy Festival",
      subtitle: "Interactive activities and attractions for all ages",
      date: "5- 7 February",
      location: "Sunway Lagoon, Selangor",
      type: "Festival",
      badges: ["Family-friendly", "Popular Event"]
    },
    {
      title: "Jom Cuti Sekolah 2025",
      subtitle: "School holiday travel deals and family activities",
      date: "12 - 15 January 2025",
      location: "Kuala Lumpur",
      type: "Promotion Event",
      badges: ["Family-friendly", "School Holiday"]
    },
    {
      title: "Cuti Cuti Muslim-Friendly Fair",
      subtitle: "Muslim-friendly travel packages and experiences",
      date: "18- 20 January 2025",
      location: "Kuala Lumpur",
      type: "Travel Fair",
      badges: ["Muslim-friendly", "Travel Deals"]
    },
    {
      title: "Play Your Way to Joy Festival",
      subtitle: "Interactive activities and attractions for all ages",
      date: "5- 7 February",
      location: "Sunway Lagoon, Selangor",
      type: "Festival",
      badges: ["Family-friendly", "Popular Event"]
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="px-[90px] py-4 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="text-2xl font-semibold text-black">
            Jalan²
          </Link>
          <nav className="flex items-center">
            <Button variant="ghost" className="text-sm font-semibold text-slate-600">
              My Trip
            </Button>
            <Button variant="ghost" className="text-sm font-semibold text-slate-600">
              AI
            </Button>
            <Button variant="ghost" className="text-sm font-semibold text-slate-600">
              Contact Us
            </Button>
          </nav>
        </div>
        <Avatar initials="CN" />
      </header>

      {/* Title Section */}
      <section className="px-[90px] py-8">
        <h1 className="text-3xl font-semibold text-slate-700" style={{ letterSpacing: "-0.03em" }}>
          Upcoming Events
        </h1>
      </section>

      {/* Events Grid */}
      <section className="px-[90px] pb-8">
        <div className="grid grid-cols-3 gap-[50px]">
          {events.map((event, i) => (
            <EventCard key={i} {...event} />
          ))}
        </div>
      </section>
    </div>
  );
}

