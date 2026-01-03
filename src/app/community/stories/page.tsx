"use client";

import { MapPin } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

// Badge component for consistent styling
function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center justify-center gap-1.5 px-2 py-0.5 text-xs font-semibold rounded-lg border border-purple-950 bg-slate-50 text-slate-600">
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
          {authorBadge && <Badge>{authorBadge}</Badge>}
        </div>
      </div>
      <div className={`h-[398px] ${bgColor} relative`}>
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <span className="text-sm font-semibold text-white">{place}</span>
        </div>
      </div>
      <div className="p-4 flex flex-wrap gap-2">
        {tags.map((tag, i) => (
          <Badge key={i}>{tag}</Badge>
        ))}
      </div>
    </Card>
  );
}

export default function CommunityStoriesPage() {
  const stories = [
    {
      location: "Kuala Lumpur, Malaysia",
      place: "Kuala Lumpur City Centre",
      author: "Imran Rosli",
      authorBadge: "Verified Local",
      tags: ["#LocalTourist", "#KLCC"],
      bgColor: "bg-gradient-to-br from-blue-400 to-purple-500"
    },
    {
      location: "Langkawi Island, Malaysia",
      place: "Langkawi Island Bridge",
      author: "Farah Shazwanie",
      authorBadge: "Frequent Traveller",
      tags: ["#Langkawi"],
      bgColor: "bg-gradient-to-br from-cyan-400 to-blue-500"
    },
    {
      location: "Macau, Hong Kong",
      place: "Lisboeta, Macau",
      author: "Saranya Mohabatten",
      authorBadge: "Verified Local",
      tags: ["#Macau", "#Local", "#Tourist"],
      bgColor: "bg-gradient-to-br from-orange-400 to-red-500"
    },
    {
      location: "Kuala Lumpur, Malaysia",
      place: "Kuala Lumpur City Centre",
      author: "Imran Rosli",
      authorBadge: "Verified Local",
      tags: ["#LocalTourist"],
      bgColor: "bg-gradient-to-br from-blue-400 to-purple-500"
    },
    {
      location: "Langkawi Island, Malaysia",
      place: "Langkawi Island Bridge",
      author: "Farah Shazwanie",
      authorBadge: "Frequent Traveller",
      tags: ["#Langkawi"],
      bgColor: "bg-gradient-to-br from-cyan-400 to-blue-500"
    },
    {
      location: "Macau, Hong Kong",
      place: "Lisboeta, Macau",
      author: "Saranya Mohabatten",
      authorBadge: "Verified Local",
      tags: ["#Macau", "#Local", "#Tourist"],
      bgColor: "bg-gradient-to-br from-orange-400 to-red-500"
    },
    {
      location: "Kuala Lumpur, Malaysia",
      place: "Kuala Lumpur City Centre",
      author: "Imran Rosli",
      authorBadge: "Verified Local",
      tags: ["#LocalTourist"],
      bgColor: "bg-gradient-to-br from-blue-400 to-purple-500"
    },
    {
      location: "Langkawi Island, Malaysia",
      place: "Langkawi Island Bridge",
      author: "Farah Shazwanie",
      authorBadge: "Frequent Traveller",
      tags: ["#Langkawi"],
      bgColor: "bg-gradient-to-br from-cyan-400 to-blue-500"
    },
    {
      location: "Macau, Hong Kong",
      place: "Lisboeta, Macau",
      author: "Saranya Mohabatten",
      authorBadge: "Verified Local",
      tags: ["#Macau", "#Local", "#Tourist"],
      bgColor: "bg-gradient-to-br from-orange-400 to-red-500"
    },
    {
      location: "Kuala Lumpur, Malaysia",
      place: "Kuala Lumpur City Centre",
      author: "Imran Rosli",
      authorBadge: "Verified Local",
      tags: ["#LocalTourist"],
      bgColor: "bg-gradient-to-br from-blue-400 to-purple-500"
    },
    {
      location: "Langkawi Island, Malaysia",
      place: "Langkawi Island Bridge",
      author: "Farah Shazwanie",
      authorBadge: "Frequent Traveller",
      tags: ["#Langkawi"],
      bgColor: "bg-gradient-to-br from-cyan-400 to-blue-500"
    },
    {
      location: "Macau, Hong Kong",
      place: "Lisboeta, Macau",
      author: "Saranya Mohabatten",
      authorBadge: "Verified Local",
      tags: ["#Macau", "#Local", "#Tourist"],
      bgColor: "bg-gradient-to-br from-orange-400 to-red-500"
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
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-semibold text-slate-700" style={{ letterSpacing: "-0.03em" }}>
            Community Story
          </h1>
          <Link href="/community/create">
            <Button className="bg-blue-900 hover:bg-blue-800 text-white font-semibold px-4 py-2 rounded-lg">
              Create Community Story
            </Button>
          </Link>
        </div>
      </section>

      {/* Stories Grid */}
      <section className="px-[90px] pb-8">
        <div className="grid grid-cols-3 gap-[50px]">
          {stories.map((story, i) => (
            <StoryCard key={i} {...story} />
          ))}
        </div>
      </section>
    </div>
  );
}

