"use client";

import { Search, MapPin, Calendar, TicketCheck } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

// Badge component for consistent styling
function Badge({ children, variant = "outline" }: { children: React.ReactNode; variant?: "outline" | "filled" }) {
  return (
    <span className={`inline-flex items-center justify-center gap-1.5 px-2 py-0.5 text-xs font-semibold rounded-lg border border-purple-950 ${variant === "filled" ? "bg-blue-900 text-white" : "bg-slate-50 text-slate-600"}`}>
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

// Trip Card component
function TripCard({ title, dates, status }: { title: string; dates: string; status: "Active" | "Upcoming" }) {
  return (
    <Card className="w-[400px] border border-purple-950 shadow-sm rounded-lg overflow-hidden">
      <div className="p-6 space-y-1">
        <h3 className="font-semibold text-slate-700">{title}</h3>
        <p className="text-sm text-slate-500">{dates}</p>
      </div>
      <div className="p-6 flex items-center justify-between">
        <Badge variant="outline">{status}</Badge>
        <span className="font-semibold text-slate-700">View More</span>
      </div>
    </Card>
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
      <div className="p-6">
        <div className="flex items-center gap-2 text-sm text-slate-500 mb-2">
          <MapPin className="w-6 h-6" />
          <span>{location}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-slate-500 mb-2">
          <Calendar className="w-6 h-6" />
          <span>{date}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-slate-500 mb-3">
          <TicketCheck className="w-6 h-6" />
          <span>{type}</span>
        </div>
        <div className="flex flex-wrap gap-2 mb-3">
          {badges.map((badge, i) => (
            <Badge key={i} variant="outline">{badge}</Badge>
          ))}
        </div>
        <div className="text-right">
          <span className="text-sm font-medium text-slate-700">View More</span>
        </div>
      </div>
    </Card>
  );
}

// Story Card component
function StoryCard({ 
  location, 
  place,
  author,
  authorBadge,
  tags,
  bgColor
}: { 
  location: string;
  place: string;
  author: string;
  authorBadge?: string;
  tags: string[];
  bgColor: string;
}) {
  return (
    <Card className="w-[398px] border border-purple-950 shadow-sm rounded-lg overflow-hidden">
      <div className="p-6 space-y-1">
        <div className="flex items-center gap-1">
          <MapPin className="w-6 h-6" />
          <span className="font-semibold text-slate-700">{location}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm text-slate-500">{author}</span>
          {authorBadge && <Badge variant="outline">{authorBadge}</Badge>}
        </div>
      </div>
      <div className={`h-[398px] ${bgColor} relative`}>
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <span className="text-sm font-semibold text-white">{place}</span>
        </div>
      </div>
      <div className="p-4 flex flex-wrap gap-2">
        {tags.map((tag, i) => (
          <Badge key={i} variant="outline">{tag}</Badge>
        ))}
      </div>
    </Card>
  );
}

export default function CommunityPage() {
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

      {/* Search Section */}
      <section className="px-[90px] py-8">
        <h1 className="text-5xl font-semibold text-slate-700 mb-6" style={{ letterSpacing: "-0.03em" }}>
          Get live data from your destination.
        </h1>
        <div className="flex items-center gap-12">
          <div className="relative flex-1 max-w-[536px]">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
            <Input 
              placeholder="Where are you travelling to?" 
              className="pl-10 py-2 border border-purple-950 shadow-sm rounded-lg"
            />
          </div>
          <Button className="bg-blue-900 hover:bg-blue-800 text-white font-semibold px-4 py-2 rounded-lg">
            Search
          </Button>
        </div>
      </section>

      {/* My Trip Section */}
      <section className="px-[90px] py-8">
        <div className="flex items-end justify-between mb-6">
          <h2 className="text-3xl font-semibold text-slate-700" style={{ letterSpacing: "-0.03em" }}>
            My Trip
          </h2>
          <span className="text-xl font-semibold text-slate-700">Create New Trip</span>
        </div>
        <div className="flex gap-[50px]">
          <TripCard 
            title="Tokyo, Japan" 
            dates="25th December - 31 December 2025" 
            status="Active" 
          />
          <TripCard 
            title="Tokyo, Japan" 
            dates="25th December - 31 December 2025" 
            status="Upcoming" 
          />
          <TripCard 
            title="Tokyo, Japan" 
            dates="25th December - 31 December 2025" 
            status="Upcoming" 
          />
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="px-[90px] py-8">
        <div className="flex items-end justify-between mb-6">
          <h2 className="text-3xl font-semibold text-slate-700" style={{ letterSpacing: "-0.03em" }}>
            Upcoming Events
          </h2>
          <Link href="/community/events" className="text-xl font-semibold text-slate-700">
            View More
          </Link>
        </div>
        <div className="flex gap-[50px]">
          <Card className="w-[400px] border border-purple-950 shadow-sm rounded-lg overflow-hidden">
            <div className="p-6 space-y-1">
              <h3 className="font-semibold text-slate-700">Jom Cuti Sekolah 2025</h3>
              <p className="text-sm text-slate-500">School holiday travel deals and family activities</p>
            </div>
            <div className="h-[267px] bg-gradient-to-br from-yellow-200 to-orange-300" />
            <div className="p-6 space-y-2">
              <div className="flex items-center gap-2 text-sm text-slate-500">
                <MapPin className="w-6 h-6" />
                <span>Kuala Lumpur</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-500">
                <Calendar className="w-6 h-6" />
                <span>12 - 15 January 2025</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-500">
                <TicketCheck className="w-6 h-6" />
                <span>Promotion Event</span>
              </div>
              <div className="flex flex-wrap gap-2 pt-2">
                <Badge variant="outline">Family-friendly</Badge>
                <Badge variant="outline">School Holiday</Badge>
              </div>
              <div className="text-right pt-2">
                <span className="text-sm font-medium text-slate-700">View More</span>
              </div>
            </div>
          </Card>

          <Card className="w-[400px] border border-purple-950 shadow-sm rounded-lg overflow-hidden">
            <div className="p-6 space-y-1">
              <h3 className="font-semibold text-slate-700">Cuti Cuti Muslim-Friendly Fair</h3>
              <p className="text-sm text-slate-500">Muslim-friendly travel packages and experiences</p>
            </div>
            <div className="h-[267px] bg-gradient-to-br from-green-200 to-teal-300" />
            <div className="p-6 space-y-2">
              <div className="flex items-center gap-2 text-sm text-slate-500">
                <MapPin className="w-6 h-6" />
                <span>Kuala Lumpur</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-500">
                <Calendar className="w-6 h-6" />
                <span>18- 20 January 2025</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-500">
                <TicketCheck className="w-6 h-6" />
                <span>Travel Fair</span>
              </div>
              <div className="flex flex-wrap gap-2 pt-2">
                <Badge variant="outline">Muslim-friendly</Badge>
                <Badge variant="outline">Travel Deals</Badge>
              </div>
              <div className="text-right pt-2">
                <span className="text-sm font-medium text-slate-700">View More</span>
              </div>
            </div>
          </Card>

          <Card className="w-[400px] border border-purple-950 shadow-sm rounded-lg overflow-hidden">
            <div className="p-6 space-y-1">
              <h3 className="font-semibold text-slate-700">Play Your Way to Joy Festival</h3>
              <p className="text-sm text-slate-500">Interactive activities and attractions for all ages</p>
            </div>
            <div className="h-[267px] bg-gradient-to-br from-purple-200 to-pink-300" />
            <div className="p-6 space-y-2">
              <div className="flex items-center gap-2 text-sm text-slate-500">
                <MapPin className="w-6 h-6" />
                <span>Sunway Lagoon, Selangor</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-500">
                <Calendar className="w-6 h-6" />
                <span>5- 7 February</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-500">
                <TicketCheck className="w-6 h-6" />
                <span>Festival</span>
              </div>
              <div className="flex flex-wrap gap-2 pt-2">
                <Badge variant="outline">Family-friendly</Badge>
                <Badge variant="outline">Popular Event</Badge>
              </div>
              <div className="text-right pt-2">
                <span className="text-sm font-medium text-slate-700">View More</span>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Community Story Section */}
      <section className="px-[90px] py-8">
        <div className="flex items-end justify-between mb-6">
          <h2 className="text-3xl font-semibold text-slate-700" style={{ letterSpacing: "-0.03em" }}>
            Community Story
          </h2>
          <Link href="/community/stories" className="text-xl font-semibold text-slate-700">
            View More
          </Link>
        </div>
        <div className="flex gap-[50px]">
          <StoryCard
            location="Kuala Lumpur, Malaysia"
            place="Kuala Lumpur City Centre"
            author="Imran Rosli"
            authorBadge="Verified Local"
            tags={["#LocalTourist", "#KLCC"]}
            bgColor="bg-gradient-to-br from-blue-400 to-purple-500"
          />
          <StoryCard
            location="Langkawi Island, Malaysia"
            place="Langkawi Island Bridge"
            author="Farah Shazwanie"
            authorBadge="Frequent Traveller"
            tags={["#Langkawi"]}
            bgColor="bg-gradient-to-br from-cyan-400 to-blue-500"
          />
          <StoryCard
            location="Macau, Hong Kong"
            place="Lisboeta, Macau"
            author="Saranya Mohabatten"
            authorBadge="Verified Local"
            tags={["#Macau", "#Local", "#Tourist"]}
            bgColor="bg-gradient-to-br from-orange-400 to-red-500"
          />
        </div>
      </section>
    </div>
  );
}
