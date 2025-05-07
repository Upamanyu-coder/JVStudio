import { useEffect, useRef } from 'react';
import astronaut from '../assets/astronaut.png';

const Astronaut = () => {
  const astronautRef = useRef<HTMLImageElement>(null);
  
  useEffect(() => {
    const floatAnimation = () => {
      if (!astronautRef.current) return;
      
      // Create a gentle floating animation
      const animation = astronautRef.current.animate(
        [
          { transform: 'translateY(0px) rotate(0deg)' },
          { transform: 'translateY(-20px) rotate(2deg)' },
          { transform: 'translateY(0px) rotate(0deg)' },
        ],
        {
          duration: 6000,
          iterations: Infinity,
          easing: 'ease-in-out'
        }
      );
      
      return () => {
        animation.cancel();
      };
    };
    
    const cleanup = floatAnimation();
    return cleanup;
  }, []);
  
  return (
    <div className="flex justify-center items-center h-full">
      <img
        ref={astronautRef}
        src={astronaut}
        alt="Astronaut"
        className="w-[300px] md:w-[400px] lg:w-[500px] object-contain transition-all duration-300"
      />
    </div>
  );
};

export default Astronaut;