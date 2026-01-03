"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  ChevronLeft,
  ChevronRight,
  PlaneTakeoff,
  Check,
} from "lucide-react";

// Mock data for the story detail (same as story detail page)
const storyData = {
  location: "Club Med Finolhu, Maldives",
  address: "N 2051, Gasfinolhu, Kaafu Atoll, Maldives",
  author: {
    name: "Alif Haikal",
    badge: "Frequent Traveller",
    avatar: "AH",
  },
  title: "The Finolhu Villas: All-inclusive Resort in Maldives",
  content: `Club Med Maldives is an excellent choice for travelers seeking a relaxing yet well-organized all-inclusive island getaway. The resort is located on a private island with crystal-clear waters, white sandy beaches, and beautiful marine life, creating a truly tropical and peaceful atmosphere. Guests frequently praise the friendly and professional staff, who provide attentive service while maintaining a warm and welcoming environment. The all-inclusive concept is a major advantage, offering a good variety of international and Asian cuisine, quality drinks, and snacks throughout the day, allowing guests to enjoy their stay without worrying about additional costs. Activities such as snorkeling, water sports, fitness classes, and evening entertainment add to the overall experience, while the calm setting also makes it ideal for couples and honeymooners.`,
  images: [
    { id: 1, src: "/placeholder.svg" },
    { id: 2, src: "/placeholder.svg" },
    { id: 3, src: "/placeholder.svg" },
  ],
  experiences: [
    {
      id: 1,
      author: {
        name: "Shazwanie",
        badge: "Frequent Traveller",
        avatar: "SH",
      },
      content:
        "The island is absolutely beautiful with clear blue water and soft white sand. The snorkeling is amazing, and we saw many fish right near the villa. Staff were very friendly and always smiling, making us feel welcome throughout our stay. Food variety was good and drinks were included, which made the holiday very relaxing.",
    },
  ],
};

export default function ReportSuccessPage() {
  return (
    <div className="min-h-screen bg-white relative">
      {/* Header */}
      <header className="flex items-center justify-between px-[90px] py-4 border-b border-gray-100">
        <span className="text-xl font-semibold">Jalan²</span>
        <nav className="flex items-center gap-2">
          <Button variant="ghost" className="text-slate-600 text-sm font-semibold">
            My Trip
          </Button>
          <Button variant="ghost" className="text-slate-600 text-sm font-semibold">
            AI
          </Button>
          <Button variant="ghost" className="text-slate-600 text-sm font-semibold">
            Contact Us
          </Button>
          <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-sm font-semibold text-slate-600">
            CN
          </div>
        </nav>
      </header>

      {/* Main Content (Background - Story Detail) */}
      <main className="px-[56px] py-8">
        {/* Page Title */}
        <div className="flex items-end justify-between mb-6">
          <h1 className="text-[30px] font-semibold tracking-tight text-slate-700">
            Community Stories
          </h1>
          <Link href="/community/stories/create">
            <Button className="bg-[#1E3A8A] hover:bg-[#1E3A8A]/90 text-slate-50 text-sm font-semibold">
              Create Community Story
            </Button>
          </Link>
        </div>

        {/* Two Column Layout */}
        <div className="flex gap-8">
          {/* Left Column - Image & Story Info */}
          <div className="w-[675px]">
            {/* Location Header */}
            <div className="p-6">
              <h2 className="text-base font-semibold text-slate-700">
                {storyData.location}
              </h2>
              <p className="text-sm text-slate-500">{storyData.address}</p>
            </div>

            {/* Main Image Placeholder */}
            <div className="w-full h-[450px] bg-gradient-to-br from-purple-900 to-purple-600 rounded-lg" />

            {/* Image Carousel */}
            <div className="flex items-center gap-4 mt-6">
              <Button
                variant="outline"
                size="icon"
                className="h-9 w-9 rounded-lg border border-white shadow-sm bg-white/10"
              >
                <ChevronLeft className="h-4 w-4 text-slate-700" />
              </Button>

              <div className="flex-1 flex gap-4">
                {storyData.images.map((image) => (
                  <div
                    key={image.id}
                    className="flex-1 h-[245px] bg-gradient-to-br from-sky-200 to-sky-400 rounded-lg border border-white shadow-sm"
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="icon"
                className="h-9 w-9 rounded-lg border border-white shadow-sm bg-white/10"
              >
                <ChevronRight className="h-4 w-4 text-slate-700" />
              </Button>
            </div>
          </div>

          {/* Right Column - Story Content */}
          <div className="flex-1 flex flex-col gap-8">
            {/* Author Info */}
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-purple-900 flex items-center justify-center">
                    <span className="text-[10px] font-semibold text-white">
                      {storyData.author.avatar}
                    </span>
                  </div>
                  <span className="text-base font-semibold text-slate-700">
                    {storyData.author.name}
                  </span>
                  <div className="relative ml-2">
                    <PlaneTakeoff className="w-6 h-6 text-purple-900 drop-shadow-md" />
                  </div>
                  <span className="ml-2 px-2 py-[3px] text-xs font-semibold text-slate-700 border border-purple-900 rounded-lg bg-slate-50">
                    {storyData.author.badge}
                  </span>
                </div>
              </div>

              {/* Story Title & Content */}
              <h2 className="text-base font-semibold text-slate-700">
                {storyData.title}
              </h2>
              <p className="text-sm text-slate-500 leading-relaxed">
                {storyData.content}
              </p>
            </div>

            {/* Comment Input */}
            <div className="flex items-center gap-0 bg-slate-700 rounded-[10px] overflow-hidden">
              <div className="flex-1" />
              <Button className="bg-[#1E3A8A] hover:bg-[#1E3A8A]/90 text-slate-50 text-sm font-semibold m-3">
                Send
              </Button>
            </div>

            {/* Traveler Experiences */}
            <div className="flex flex-col gap-5">
              <h3 className="text-base font-semibold text-slate-700">
                Traveler Experiences
              </h3>

              {storyData.experiences.map((experience) => (
                <div key={experience.id} className="flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-purple-900 flex items-center justify-center">
                      <span className="text-[10px] font-semibold text-white">
                        {experience.author.avatar}
                      </span>
                    </div>
                    <span className="text-base font-semibold text-slate-700">
                      {experience.author.name}
                    </span>
                    <span className="px-2 py-[3px] text-xs font-semibold text-slate-700 border border-purple-900 rounded-lg bg-slate-50">
                      {experience.author.badge}
                    </span>
                  </div>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    {experience.content}
                  </p>
                </div>
              ))}
            </div>

            {/* Add Comment */}
            <div className="flex gap-12">
              <Input
                placeholder="Add Comment"
                className="border-purple-900 shadow-sm"
              />
            </div>
          </div>
        </div>
      </main>

      {/* Modal Overlay */}
      <div className="fixed inset-0 bg-black/50 z-40" />

      {/* Success Modal */}
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[593px] h-[465px] bg-white rounded-[20px] z-50">
        <div className="px-[35px] py-[22px]">
          {/* Modal Header */}
          <div className="flex flex-col gap-7">
            <div className="flex items-center justify-between">
              <h2 className="text-[30px] font-semibold tracking-tight text-slate-700">
                Report
              </h2>
            </div>
          </div>
        </div>

        {/* Success Content */}
        <div className="flex flex-col items-center gap-3 px-[124px] py-[87px]">
          {/* Success Icon */}
          <div className="relative w-[159px] h-[177px]">
            {/* Background circles */}
            <div className="absolute top-[18px] left-0 w-[159px] h-[159px] rounded-full bg-[#DCCCFF]" />
            <div className="absolute top-0 left-0 w-[159px] h-[159px] rounded-full bg-white" />
            
            {/* Checkmark */}
            <div className="absolute top-[26.5px] left-[59.63px] w-[72.88px] h-[72.88px] rounded-full border-4 border-purple-900 flex items-center justify-center">
              <Check className="w-10 h-10 text-purple-900 stroke-[4px]" />
            </div>
            
            {/* Small circle */}
            <div className="absolute top-[66.25px] left-[26.5px] w-[33.13px] h-[33.13px] rounded-full border-4 border-purple-900" />
          </div>

          {/* Success Message */}
          <p className="text-base font-semibold text-slate-700 text-center">
            YOUR REPORT IS SUCCESSFULLY SUBMITTED
          </p>
        </div>

        {/* Back to Home Button */}
        <div className="absolute bottom-[22px] left-1/2 -translate-x-1/2 w-[435px]">
          <Link href="/community">
            <Button className="w-full h-[49px] bg-[#1E3A8A] hover:bg-[#1E3A8A]/90 text-slate-50 text-sm font-semibold">
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

