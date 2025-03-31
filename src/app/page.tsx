"use client";

import Image from "next/legacy/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full -mt-16"> {/* Negative margin to counteract the main padding */}
      {/* Full-bleed background video with placeholder */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        {/* Placeholder image - Needs to be placed at /public/images/home-vid-cover.jpg */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/images/home-vid-cover.jpg"
            alt="Whaleboat Racing"
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
        
        <video 
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          style={{ opacity: 0 }}
          onLoadedData={(e) => {
            // Show video and hide placeholder when loaded
            e.currentTarget.style.opacity = "1";
            e.currentTarget.style.transition = "opacity 0.5s ease-in-out";
          }}
        >
          <source src="https://erc-website.imgix.net/alcatraz-start-web.mp4?ixembed=1743354041248&fm=hls" type="application/x-mpegURL" />
          <source src="https://erc-website.imgix.net/alcatraz-start-web.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/30"></div>
        
        {/* Overlay pattern */}
        <div className="absolute inset-0 opacity-20" style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` 
        }}></div>
      </div>

      {/* Logo in bottom left */}
      <div className="absolute bottom-8 left-8 z-20">
        <div className="bg-white/20 backdrop-blur-md p-4 rounded-lg">
          <h1 className="text-3xl logo-font text-white">BAWRA</h1>
          <p className="text-white/90 text-sm italic">Bay Area Whaleboat Rowing Association</p>
        </div>
      </div>

      {/* Center content */}
      <div className="relative z-10 flex items-center justify-center h-screen">
        <div className="text-center text-white p-6 max-w-3xl">
          <h2 className="text-4xl md:text-5xl mb-8 uppercase tracking-wider">
            Whaleboat Racing in the San Francisco Bay Area
          </h2>
          <p className="text-xl md:text-2xl mb-10">
            Welcoming rowers, seasoned and new, of all kinds.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild variant="default" size="lg" className="bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30">
              <Link href="/about">About Us</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="bg-transparent hover:bg-white/20 text-white border-white">
              <Link href="/schedule">Race Schedule</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}