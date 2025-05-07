import { useEffect, useRef } from 'react';
import planet1 from '../assets/planet1.png';
import planet2 from '../assets/planet2.png';
import stars from '../assets/stars.png';

const SpaceBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const planet1Ref = useRef<HTMLImageElement>(null);
  const planet2Ref = useRef<HTMLImageElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current || !planet1Ref.current || !planet2Ref.current) return;
      
      const { clientX, clientY } = e;
      const { width, height } = containerRef.current.getBoundingClientRect();
      
      const mouseXPercentage = Math.round((clientX / width) * 100);
      const mouseYPercentage = Math.round((clientY / height) * 100);
      
      // Move planets in opposite directions based on mouse position
      planet1Ref.current.style.transform = `translate(${mouseXPercentage / 50 - 10}px, ${mouseYPercentage / 50 - 10}px)`;
      planet2Ref.current.style.transform = `translate(${-mouseXPercentage / 40 + 10}px, ${-mouseYPercentage / 40 + 10}px)`;
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 overflow-hidden z-0"
      style={{
        background: `url(${stars}) repeat, linear-gradient(180deg, #0A1128 0%, #1C1C54 70%, #0A1128 100%)`,
      }}
    >
      <div className="absolute inset-0">
        {/* Add a subtle blue gradient overlay */}
        <div className="absolute inset-0 bg-gradient-radial from-blue-900/20 to-transparent"></div>
        
        {/* Left top planet */}
        <img 
          ref={planet1Ref}
          src={planet1}
          alt="Planet"
          className="absolute top-[-100px] left-[-100px] w-[500px] h-[500px] opacity-70 transition-transform duration-300 ease-out"
        />
        
        {/* Right bottom planet */}
        <img 
          ref={planet2Ref}
          src={planet2}
          alt="Planet"
          className="absolute bottom-[-100px] right-[-100px] w-[400px] h-[400px] opacity-70 transition-transform duration-300 ease-out"
        />
      </div>
    </div>
  );
};

export default SpaceBackground;