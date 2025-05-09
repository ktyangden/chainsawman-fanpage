import React from "react";
import { Button } from "./ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Play } from "lucide-react";
import { motion } from "framer-motion";

const Videos = () => {
  return (
    <section
      id="videos"
      className="py-20 bg-black relative noise-bg overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 z-0">
        {/* Large diagonal trapezoid */}
        <div className="absolute -left-20 top-0 w-[40%] h-full bg-gray-900 transform -skew-x-12"></div>
        
        {/* Triangular elements */}
        <div className="absolute right-0 top-0 w-0 h-0 border-l-[200px] border-l-transparent border-b-[400px] border-b-gray-800"></div>
        <div className="absolute left-1/2 bottom-0 w-0 h-0 border-r-[150px] border-r-transparent border-t-[300px] border-t-gray-900"></div>
        
        {/* Small decorative triangles */}
        <div className="absolute left-1/4 top-1/4 w-0 h-0 border-l-[50px] border-l-transparent border-b-[100px] border-b-gray-800"></div>
        <div className="absolute right-1/3 bottom-1/3 w-0 h-0 border-r-[30px] border-r-transparent border-t-[60px] border-t-gray-900"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="flex flex-col items-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl text-white mb-4 sm:mb-6 tracking-wide font-orbitron">
            VIDEOS
          </h2>
          <div className="h-1 w-16 sm:w-20 bg-chainsaw-orange"></div>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="teaser" className="w-full max-w-5xl mx-auto">
          {/* Tab Triggers */}
          <TabsList className="w-full grid grid-cols-3 mb-6 sm:mb-8 bg-transparent h-auto gap-2 sm:gap-4">
            <TabsTrigger
              value="teaser"
              className="data-[state=active]:bg-chainsaw-orange data-[state=active]:text-white bg-transparent text-white/70 font-bebas text-base sm:text-xl py-3 sm:py-4 border border-chainsaw-orange/50"
            >
              TEASER
            </TabsTrigger>
            <TabsTrigger
              value="trailer"
              className="data-[state=active]:bg-chainsaw-orange data-[state=active]:text-white bg-transparent text-white/70 font-bebas text-base sm:text-xl py-3 sm:py-4 border border-chainsaw-orange/50"
            >
              TRAILER
            </TabsTrigger>
            <TabsTrigger
              value="music"
              className="data-[state=active]:bg-chainsaw-orange data-[state=active]:text-white bg-transparent text-white/70 font-bebas text-base sm:text-xl py-3 sm:py-4 border border-chainsaw-orange/50"
            >
              MUSIC VIDEOS
            </TabsTrigger>
          </TabsList>

          {/* TEASER */}
          <TabsContent
            value="teaser"
            className="relative h-[300px] sm:h-[400px] md:h-[500px] overflow-hidden rounded-md shadow-lg"
          >
            <iframe
              className="absolute inset-0 w-full h-full object-cover z-0"
              src="https://www.youtube.com/embed/d1n552v1ng0?autoplay=1&loop=1&controls=1&showinfo=0&rel=0&playlist=d1n552v1ng0"
              title="Chainsaw Man Teaser"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
          </TabsContent>

          {/* TRAILER */}
          <TabsContent
            value="trailer"
            className="relative h-[300px] sm:h-[400px] md:h-[500px] overflow-hidden rounded-md shadow-lg"
          >
            <iframe
              className="absolute inset-0 w-full h-full object-cover z-0"
              src="https://www.youtube.com/embed/dFlDRhvM4L0?autoplay=1&loop=1&controls=1&showinfo=0&rel=0&playlist=dFlDRhvM4L0"
              title="Chainsaw Man Trailer"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
          </TabsContent>

          {/* MUSIC VIDEOS */}
          <TabsContent
            value="music"
            className="relative h-[300px] sm:h-[400px] md:h-[500px] overflow-hidden rounded-md shadow-lg"
          >
            <iframe
              className="absolute inset-0 w-full h-full object-cover z-0"
              src="https://www.youtube.com/embed/d1n552v1ng0?autoplay=1&loop=1&controls=1&showinfo=0&rel=0&playlist=d1n552v1ng0"
              title="Chainsaw Man Music Videos"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
          </TabsContent>
        </Tabs>
      </div>

      {/* Pochita Mascot */}
      <div className="absolute top-10 right-0 z-20">
        <img 
          src="/images/pochita.png" 
          alt="Pochita Mascot" 
          className="w-40 h-40 md:w-48 md:h-48 object-contain drop-shadow-[0_0_10px_rgba(255,69,0,0.5)]"
        />
      </div>
    </section>
  );
};

export default Videos;
