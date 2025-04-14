import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";

const PlotSection = () => {
  const [selectedEvent, setSelectedEvent] = useState<number | null>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  const timelineEvents = [
    {
      id: 1,
      title: "The Beginning",
      image: "/lovable-uploads/denji.jpg",
      description: "Denji, a young man burdened with debt, works as a devil hunter to pay off his father's debt to the yakuza. He lives with his pet devil Pochita.",
      date: "Chapter 1"
    },
    {
      id: 2,
      title: "The Contract",
      image: "/lovable-uploads/POWER.png",
      description: "After being betrayed and killed, Denji makes a contract with Pochita, becoming the Chainsaw Man. He joins Public Safety to hunt devils.",
      date: "Chapter 2"
    },
    {
      id: 3,
      title: "New Allies",
      image: "/lovable-uploads/AKI.jpg",
      description: "Denji meets Aki Hayakawa and Power, forming an unlikely team. They face various devil threats together.",
      date: "Chapter 3"
    },
    {
      id: 4,
      title: "The Control Devil",
      image: "/lovable-uploads/makima.jpg",
      description: "Makima reveals her true nature as the Control Devil, setting up the final confrontation.",
      date: "Chapter 4"
    }
  ];

  const scrollLeft = () => {
    if (timelineRef.current) {
      timelineRef.current.scrollBy({
        left: -300,
        behavior: 'smooth'
      });
    }
  };

  const scrollRight = () => {
    if (timelineRef.current) {
      timelineRef.current.scrollBy({
        left: 300,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="plot" className="py-32 bg-black relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black"></div>
      
      {/* Decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-chainsaw-orange to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-chainsaw-orange to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-6xl md:text-7xl text-white mb-6 tracking-wider font-orbitron font-bold">
            STORY TIMELINE
          </h2>
          <div className="h-1 w-32 bg-chainsaw-orange"></div>
        </div>

        {/* Timeline container */}
        <div className="relative max-w-6xl mx-auto">
          {/* Scroll buttons */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 z-20">
            <Button
              onClick={scrollLeft}
              variant="ghost"
              size="icon"
              className="w-12 h-12 bg-gray-900/50 text-white hover:bg-chainsaw-orange/80 rounded-full"
            >
              <ChevronLeft size={24} />
            </Button>
          </div>
          <div className="absolute right-0 top-1/2 -translate-y-1/2 z-20">
            <Button
              onClick={scrollRight}
              variant="ghost"
              size="icon"
              className="w-12 h-12 bg-gray-900/50 text-white hover:bg-chainsaw-orange/80 rounded-full"
            >
              <ChevronRight size={24} />
            </Button>
          </div>

          {/* Timeline events */}
          <div 
            ref={timelineRef}
            className="relative h-[500px] overflow-x-auto scrollbar-hide"
          >
            <div className="flex items-center h-full min-w-max px-16">
              {timelineEvents.map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex flex-col items-center mx-8 w-[300px]"
                >
                  {/* Event content */}
                  <div className="w-full mb-4">
                    <div className="bg-gray-900/50 p-6 rounded-lg">
                      <h3 className="text-2xl text-chainsaw-orange font-orbitron mb-2">
                        {event.title}
                      </h3>
                      <p className="text-white/80 mb-4">{event.description}</p>
                      <span className="text-chainsaw-orange/80">{event.date}</span>
                    </div>
                  </div>

                  {/* Event image */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedEvent(event.id)}
                    className="w-full aspect-video overflow-hidden rounded-lg relative group"
                  >
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300"></div>
                  </motion.button>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Popup Modal */}
      <AnimatePresence>
        {selectedEvent !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/80"
              onClick={() => setSelectedEvent(null)}
            ></motion.div>

            {/* Modal content */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative bg-gray-900 rounded-lg max-w-4xl w-full overflow-hidden"
            >
              <Button
                onClick={() => setSelectedEvent(null)}
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 z-10 bg-gray-800/50 text-white hover:bg-chainsaw-orange/80 rounded-full"
              >
                <X size={24} />
              </Button>

              {selectedEvent !== null && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                  <div className="relative aspect-square">
                    <img
                      src={timelineEvents.find(e => e.id === selectedEvent)?.image}
                      alt={timelineEvents.find(e => e.id === selectedEvent)?.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-8 flex flex-col justify-center">
                    <h3 className="text-3xl text-chainsaw-orange font-orbitron mb-4">
                      {timelineEvents.find(e => e.id === selectedEvent)?.title}
                    </h3>
                    <p className="text-white/90 text-lg mb-4">
                      {timelineEvents.find(e => e.id === selectedEvent)?.description}
                    </p>
                    <span className="text-chainsaw-orange/80">
                      {timelineEvents.find(e => e.id === selectedEvent)?.date}
                    </span>
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default PlotSection; 