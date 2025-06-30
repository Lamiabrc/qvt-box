
import React from 'react';

const FloatingBubbles = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Enhanced soap bubble theme with new logo integration */}
      
      {/* Large bubbles with QVT Box theme including images */}
      <div className="absolute top-20 left-10 w-24 h-24 bg-gradient-to-br from-cyan-200/40 to-teal-200/40 rounded-full animate-pulse overflow-hidden backdrop-blur-sm border border-cyan-300/20">
        <div className="w-full h-full bg-gradient-to-br from-cyan-400/20 to-teal-400/20 rounded-full flex items-center justify-center">
          <img 
            src="/lovable-uploads/feb840e8-115f-4c8c-9f4d-ba3dba63932a.png" 
            alt="Wellness" 
            className="w-16 h-16 object-cover rounded-full opacity-70"
          />
        </div>
      </div>
      
      <div className="absolute top-40 right-20 w-20 h-20 bg-gradient-to-br from-purple-200/50 to-pink-200/50 rounded-full animate-bounce overflow-hidden backdrop-blur-sm border border-purple-300/20" style={{ animationDelay: '1s' }}>
        <div className="w-full h-full bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full flex items-center justify-center">
          <img 
            src="/lovable-uploads/349eb6db-54e0-4a35-8c6f-87d6603c2f9e.png" 
            alt="Happiness" 
            className="w-14 h-14 object-cover rounded-full opacity-70"
          />
        </div>
      </div>
      
      <div className="absolute bottom-40 left-20 w-28 h-28 bg-gradient-to-br from-teal-200/35 to-cyan-200/35 rounded-full animate-pulse overflow-hidden backdrop-blur-sm border border-teal-300/25" style={{ animationDelay: '2s' }}>
        <div className="w-full h-full bg-gradient-to-br from-teal-400/25 to-cyan-400/25 rounded-full flex items-center justify-center">
          <img 
            src="/lovable-uploads/c3f540d3-2d74-4082-89bc-397cb4987770.png" 
            alt="Joy" 
            className="w-20 h-20 object-cover rounded-full opacity-70"
          />
        </div>
      </div>
      
      <div className="absolute bottom-20 right-10 w-18 h-18 bg-gradient-to-br from-purple-200/45 to-cyan-200/45 rounded-full animate-bounce overflow-hidden backdrop-blur-sm border border-purple-300/30" style={{ animationDelay: '0.5s' }}>
        <div className="w-full h-full bg-gradient-to-br from-purple-400/30 to-cyan-400/30 rounded-full flex items-center justify-center">
          <img 
            src="/lovable-uploads/7f42c4c1-06c0-45a6-964a-713e71329ecf.png" 
            alt="Gift" 
            className="w-12 h-12 object-cover rounded-full opacity-70"
          />
        </div>
      </div>
      
      {/* Medium bubbles with enhanced soap bubble effect and images */}
      <div className="absolute top-60 left-1/3 w-16 h-16 bg-gradient-to-br from-cyan-300/50 to-teal-300/50 rounded-full animate-pulse overflow-hidden backdrop-blur-lg border border-cyan-400/40" style={{ animationDelay: '1.5s' }}>
        <div className="w-full h-full flex items-center justify-center">
          <img 
            src="/lovable-uploads/14537b13-06d0-4815-b29e-b2046fe7109b.png" 
            alt="Teen" 
            className="w-10 h-10 object-cover rounded-full opacity-60"
          />
        </div>
        <div className="absolute top-2 left-3 w-4 h-4 bg-white/30 rounded-full blur-sm"></div>
        <div className="absolute bottom-3 right-2 w-2 h-2 bg-white/50 rounded-full"></div>
      </div>
      
      <div className="absolute top-80 right-1/3 w-14 h-14 bg-gradient-to-br from-purple-300/40 to-pink-300/40 rounded-full animate-bounce overflow-hidden backdrop-blur-lg border border-purple-400/35" style={{ animationDelay: '2.5s' }}>
        <div className="w-full h-full flex items-center justify-center">
          <img 
            src="/lovable-uploads/7cb94890-211b-4eaa-ae99-d56440ee50a4.png" 
            alt="Family" 
            className="w-8 h-8 object-cover rounded-full opacity-60"
          />
        </div>
        <div className="absolute top-2 left-2 w-3 h-3 bg-white/40 rounded-full blur-sm"></div>
        <div className="absolute bottom-2 right-3 w-2 h-2 bg-white/60 rounded-full"></div>
      </div>
      
      <div className="absolute bottom-60 left-1/2 w-18 h-18 bg-gradient-to-br from-teal-300/45 to-cyan-300/45 rounded-full animate-pulse overflow-hidden backdrop-blur-lg border border-teal-400/40" style={{ animationDelay: '3s' }}>
        <div className="w-full h-full flex items-center justify-center">
          <img 
            src="/lovable-uploads/f04ced40-ac30-432c-8fe3-01c631cb606f.png" 
            alt="Comfort" 
            className="w-12 h-12 object-cover rounded-full opacity-60"
          />
        </div>
        <div className="absolute top-3 left-4 w-3 h-3 bg-white/35 rounded-full blur-sm"></div>
        <div className="absolute bottom-4 right-2 w-2 h-2 bg-white/55 rounded-full"></div>
      </div>
      
      {/* Small bubbles with realistic soap bubble highlights */}
      <div className="absolute top-32 left-1/4 w-10 h-10 bg-gradient-to-br from-cyan-400/60 to-teal-400/60 rounded-full animate-bounce overflow-hidden backdrop-blur-md border border-cyan-500/50" style={{ animationDelay: '0.2s' }}>
        <div className="absolute top-1 left-2 w-2 h-2 bg-white/50 rounded-full"></div>
        <div className="absolute top-2 right-1 w-1 h-1 bg-white/70 rounded-full"></div>
      </div>
      
      <div className="absolute top-72 right-1/4 w-12 h-12 bg-gradient-to-br from-purple-400/50 to-pink-400/50 rounded-full animate-pulse overflow-hidden backdrop-blur-md border border-purple-500/45" style={{ animationDelay: '1.8s' }}>
        <div className="absolute top-2 left-2 w-2 h-2 bg-white/45 rounded-full"></div>
        <div className="absolute bottom-2 right-2 w-1 h-1 bg-white/65 rounded-full"></div>
      </div>
      
      <div className="absolute bottom-32 left-3/4 w-8 h-8 bg-gradient-to-br from-teal-400/55 to-cyan-400/55 rounded-full animate-bounce overflow-hidden backdrop-blur-md border border-teal-500/50" style={{ animationDelay: '2.2s' }}>
        <div className="absolute top-1 left-1 w-2 h-2 bg-white/50 rounded-full"></div>
      </div>
      
      <div className="absolute bottom-72 right-1/2 w-9 h-9 bg-gradient-to-br from-purple-400/45 to-cyan-400/45 rounded-full animate-pulse overflow-hidden backdrop-blur-md border border-purple-500/40" style={{ animationDelay: '0.8s' }}>
        <div className="absolute top-2 left-2 w-2 h-2 bg-white/40 rounded-full"></div>
      </div>
      
      {/* Tiny floating soap bubbles */}
      <div className="absolute top-16 right-40 w-6 h-6 bg-gradient-to-br from-cyan-500/70 to-teal-500/70 rounded-full animate-ping overflow-hidden backdrop-blur-sm border border-cyan-600/60" style={{ animationDelay: '1.2s' }}>
        <div className="absolute top-1 left-1 w-1 h-1 bg-white/60 rounded-full"></div>
      </div>
      
      <div className="absolute top-96 left-40 w-7 h-7 bg-gradient-to-br from-purple-500/60 to-pink-500/60 rounded-full animate-ping overflow-hidden backdrop-blur-sm border border-purple-600/55" style={{ animationDelay: '2.8s' }}>
        <div className="absolute top-1 left-1 w-1 h-1 bg-white/55 rounded-full"></div>
      </div>
      
      <div className="absolute bottom-16 right-60 w-5 h-5 bg-gradient-to-br from-teal-500/65 to-cyan-500/65 rounded-full animate-ping overflow-hidden backdrop-blur-sm border border-teal-600/60" style={{ animationDelay: '0.3s' }}>
        <div className="absolute top-0.5 left-0.5 w-1 h-1 bg-white/65 rounded-full"></div>
      </div>
      
      {/* Enhanced motto bubbles with soap theme */}
      <div className="absolute top-1/2 left-8 transform -translate-y-1/2 bg-gradient-to-r from-white/90 to-cyan-50/90 backdrop-blur-lg rounded-full px-6 py-3 shadow-2xl animate-pulse border-2 border-cyan-200/50" style={{ animationDelay: '5s' }}>
        <p className="text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600 whitespace-nowrap">
          🫧 Sortez de votre bulle
        </p>
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-br from-cyan-400 to-teal-400 rounded-full animate-bounce"></div>
      </div>
      
      <div className="absolute bottom-1/3 right-8 bg-gradient-to-r from-white/90 to-purple-50/90 backdrop-blur-lg rounded-full px-6 py-3 shadow-2xl animate-bounce border-2 border-purple-200/50" style={{ animationDelay: '6s' }}>
        <p className="text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 whitespace-nowrap">
          💙 On veille sur vous
        </p>
        <div className="absolute -top-1 -left-1 w-3 h-3 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full animate-pulse"></div>
      </div>
      
      {/* Additional floating micro-bubbles for atmosphere */}
      {[...Array(15)].map((_, i) => (
        <div
          key={i}
          className={`absolute w-2 h-2 bg-gradient-to-br from-cyan-300/40 to-teal-300/40 rounded-full animate-pulse backdrop-blur-sm border border-cyan-400/30`}
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 4}s`,
            animationDuration: `${2 + Math.random() * 3}s`
          }}
        >
          <div className="absolute top-0.5 left-0.5 w-0.5 h-0.5 bg-white/60 rounded-full"></div>
        </div>
      ))}
      
      {[...Array(12)].map((_, i) => (
        <div
          key={`purple-${i}`}
          className={`absolute w-2 h-2 bg-gradient-to-br from-purple-300/40 to-pink-300/40 rounded-full animate-bounce backdrop-blur-sm border border-purple-400/30`}
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 4}s`,
            animationDuration: `${2 + Math.random() * 3}s`
          }}
        >
          <div className="absolute top-0.5 left-0.5 w-0.5 h-0.5 bg-white/60 rounded-full"></div>
        </div>
      ))}
    </div>
  );
};

export default FloatingBubbles;
