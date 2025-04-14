import React, { useEffect, useState } from 'react';
import { Button } from './ui/button';
import { Play } from 'lucide-react';
import { motion } from 'framer-motion';
import FireParticles from './FireParticles';
import ScratchEffect from './ScratchEffect';

const Hero = () => {
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setIsGlitching(true);
      setTimeout(() => setIsGlitching(false), 200); // Glitch lasts 200ms
    }, 1000); // Random glitch every 1 second (adjust frequency here)

    return () => clearInterval(glitchInterval); // Cleanup on component unmount
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-chainsaw-orange">
      {/* Fire particles effect */}
      <FireParticles />
      
      {/* Scratch and dirt effect */}
      <ScratchEffect />

      {/* Main chainsaw character image - enlarged to remove borders */}
      <motion.div 
        className="absolute right-0 top-1/2 transform -translate-y-1/2 h-full"
        whileHover={{ rotateY: 5 }}
        transition={{ duration: 0.3 }}
      >
        <motion.img 
          src="\lovable-uploads\denji2.png" 
          alt="Chainsaw Man" 
          className="h-full object-cover scale-125"
          initial={{ y: 0 }}
          animate={{ y: [0, -10, 0] }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>

      {/* Japanese vertical text with glitch effect */}
      <div className="absolute right-12 top-1/2 transform -translate-y-1/2">
        <h2 className={`font-rangdi text-white text-7xl writing-vertical tracking-wider font-bold ${isGlitching ? 'glitch' : ''}`}>
          チェンソーマン
        </h2>
      </div>

      {/* Bottom-centered quote + button */}
      <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-end items-center pb-24 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <p className="text-4xl text-white font-orbitron mb-6 tracking-wide">
            "All Devils Are Born With A Name"
          </p>

          <a
            href="https://youtu.be/xvFZjo5PgG0"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-black hover:bg-black/80 text-white px-8 py-6 rounded-md font-orbitron">
              PLAY NOW
              <Play className="ml-2 h-5 w-5" />
            </Button>
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
