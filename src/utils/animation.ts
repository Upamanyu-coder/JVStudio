export const getRandomBetween = (min: number, max: number): number => {
  return Math.random() * (max - min) + min;
};

export const floatAnimation = (element: HTMLElement, options: {
  xMin?: number;
  xMax?: number;
  yMin?: number;
  yMax?: number;
  duration?: number;
  delay?: number;
} = {}): () => void => {
  const {
    xMin = -10,
    xMax = 10,
    yMin = -10,
    yMax = 10,
    duration = 5000,
    delay = 0
  } = options;
  
  let rafId: number;
  let startTime: number;
  
  const update = (timestamp: number) => {
    if (!startTime) startTime = timestamp;
    const elapsed = timestamp - startTime;
    
    const progress = (elapsed % duration) / duration;
    const easing = Math.sin(progress * Math.PI);
    
    const x = getRandomBetween(xMin, xMax) * easing;
    const y = getRandomBetween(yMin, yMax) * easing;
    
    element.style.transform = `translate(${x}px, ${y}px)`;
    
    rafId = requestAnimationFrame(update);
  };
  
  setTimeout(() => {
    rafId = requestAnimationFrame(update);
  }, delay);
  
  return () => {
    cancelAnimationFrame(rafId);
  };
};

export const typewriterEffect = (element: HTMLElement, text: string, options: {
  delay?: number;
  speed?: number;
  onComplete?: () => void;
} = {}): () => void => {
  const {
    delay = 0,
    speed = 50,
    onComplete
  } = options;
  
  let i = 0;
  let timerId: number;
  
  const type = () => {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      timerId = window.setTimeout(type, speed);
    } else if (onComplete) {
      onComplete();
    }
  };
  
  setTimeout(() => {
    element.textContent = '';
    timerId = window.setTimeout(type, speed);
  }, delay);
  
  return () => {
    clearTimeout(timerId);
  };
};