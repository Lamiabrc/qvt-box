
import React from 'react';

const FloatingBubbles = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Large bubbles */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-teal-200/30 rounded-full animate-pulse"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-cyan-200/40 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-40 left-20 w-24 h-24 bg-blue-200/25 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-20 right-10 w-18 h-18 bg-purple-200/35 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
      
      {/* Medium bubbles */}
      <div className="absolute top-60 left-1/3 w-12 h-12 bg-teal-300/40 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      <div className="absolute top-80 right-1/3 w-10 h-10 bg-cyan-300/30 rounded-full animate-bounce" style={{ animationDelay: '2.5s' }}></div>
      <div className="absolute bottom-60 left-1/2 w-14 h-14 bg-blue-300/35 rounded-full animate-pulse" style={{ animationDelay: '3s' }}></div>
      
      {/* Small bubbles */}
      <div className="absolute top-32 left-1/4 w-6 h-6 bg-teal-400/50 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
      <div className="absolute top-72 right-1/4 w-8 h-8 bg-cyan-400/40 rounded-full animate-pulse" style={{ animationDelay: '1.8s' }}></div>
      <div className="absolute bottom-32 left-3/4 w-5 h-5 bg-purple-400/45 rounded-full animate-bounce" style={{ animationDelay: '2.2s' }}></div>
      <div className="absolute bottom-72 right-1/2 w-7 h-7 bg-blue-400/35 rounded-full animate-pulse" style={{ animationDelay: '0.8s' }}></div>
      
      {/* Tiny floating elements */}
      <div className="absolute top-16 right-40 w-3 h-3 bg-teal-500/60 rounded-full animate-ping" style={{ animationDelay: '1.2s' }}></div>
      <div className="absolute top-96 left-40 w-4 h-4 bg-cyan-500/50 rounded-full animate-ping" style={{ animationDelay: '2.8s' }}></div>
      <div className="absolute bottom-16 right-60 w-3 h-3 bg-purple-500/55 rounded-full animate-ping" style={{ animationDelay: '0.3s' }}></div>
    </div>
  );
};

export default FloatingBubbles;
