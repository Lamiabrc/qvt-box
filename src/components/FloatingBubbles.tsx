
import React from 'react';

const FloatingBubbles = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Large bubbles with photos */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-teal-200/30 rounded-full animate-pulse overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=80&h=80&fit=crop&crop=face" 
          alt="Bubble content" 
          className="w-full h-full object-cover opacity-70"
        />
      </div>
      
      <div className="absolute top-40 right-20 w-16 h-16 bg-cyan-200/40 rounded-full animate-bounce overflow-hidden" style={{ animationDelay: '1s' }}>
        <img 
          src="https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=64&h=64&fit=crop" 
          alt="Nature bubble" 
          className="w-full h-full object-cover opacity-70"
        />
      </div>
      
      <div className="absolute bottom-40 left-20 w-24 h-24 bg-blue-200/25 rounded-full animate-pulse overflow-hidden" style={{ animationDelay: '2s' }}>
        <img 
          src="https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=96&h=96&fit=crop" 
          alt="Ocean bubble" 
          className="w-full h-full object-cover opacity-60"
        />
      </div>
      
      <div className="absolute bottom-20 right-10 w-18 h-18 bg-purple-200/35 rounded-full animate-bounce overflow-hidden" style={{ animationDelay: '0.5s' }}>
        <img 
          src="https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=72&h=72&fit=crop" 
          alt="Cozy bubble" 
          className="w-full h-full object-cover opacity-75"
        />
      </div>
      
      {/* Medium bubbles with photos */}
      <div className="absolute top-60 left-1/3 w-12 h-12 bg-teal-300/40 rounded-full animate-pulse overflow-hidden" style={{ animationDelay: '1.5s' }}>
        <img 
          src="https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=48&h=48&fit=crop&crop=face" 
          alt="Cat bubble" 
          className="w-full h-full object-cover opacity-80"
        />
      </div>
      
      <div className="absolute top-80 right-1/3 w-10 h-10 bg-cyan-300/30 rounded-full animate-bounce overflow-hidden" style={{ animationDelay: '2.5s' }}>
        <img 
          src="https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=40&h=40&fit=crop" 
          alt="Light bubble" 
          className="w-full h-full object-cover opacity-70"
        />
      </div>
      
      <div className="absolute bottom-60 left-1/2 w-14 h-14 bg-blue-300/35 rounded-full animate-pulse overflow-hidden" style={{ animationDelay: '3s' }}>
        <img 
          src="https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=56&h=56&fit=crop" 
          alt="Wave bubble" 
          className="w-full h-full object-cover opacity-65"
        />
      </div>
      
      {/* Small bubbles with photos */}
      <div className="absolute top-32 left-1/4 w-6 h-6 bg-teal-400/50 rounded-full animate-bounce overflow-hidden" style={{ animationDelay: '0.2s' }}>
        <img 
          src="https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=24&h=24&fit=crop" 
          alt="Home bubble" 
          className="w-full h-full object-cover opacity-90"
        />
      </div>
      
      <div className="absolute top-72 right-1/4 w-8 h-8 bg-cyan-400/40 rounded-full animate-pulse overflow-hidden" style={{ animationDelay: '1.8s' }}>
        <img 
          src="https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=32&h=32&fit=crop&crop=face" 
          alt="Pet bubble" 
          className="w-full h-full object-cover opacity-75"
        />
      </div>
      
      <div className="absolute bottom-32 left-3/4 w-5 h-5 bg-purple-400/45 rounded-full animate-bounce overflow-hidden" style={{ animationDelay: '2.2s' }}>
        <img 
          src="https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=20&h=20&fit=crop" 
          alt="Mini nature bubble" 
          className="w-full h-full object-cover opacity-85"
        />
      </div>
      
      <div className="absolute bottom-72 right-1/2 w-7 h-7 bg-blue-400/35 rounded-full animate-pulse overflow-hidden" style={{ animationDelay: '0.8s' }}>
        <img 
          src="https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=28&h=28&fit=crop" 
          alt="Small ocean bubble" 
          className="w-full h-full object-cover opacity-80"
        />
      </div>
      
      {/* Additional photo bubbles */}
      <div className="absolute top-96 left-16 w-10 h-10 bg-emerald-300/40 rounded-full animate-bounce overflow-hidden" style={{ animationDelay: '3.5s' }}>
        <img 
          src="https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=40&h=40&fit=crop" 
          alt="Living space bubble" 
          className="w-full h-full object-cover opacity-70"
        />
      </div>
      
      <div className="absolute bottom-96 right-16 w-12 h-12 bg-rose-300/35 rounded-full animate-pulse overflow-hidden" style={{ animationDelay: '4s' }}>
        <img 
          src="https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=48&h=48&fit=crop&crop=face" 
          alt="Comfort bubble" 
          className="w-full h-full object-cover opacity-75"
        />
      </div>
      
      {/* Tiny floating elements with subtle photos */}
      <div className="absolute top-16 right-40 w-3 h-3 bg-teal-500/60 rounded-full animate-ping overflow-hidden" style={{ animationDelay: '1.2s' }}>
        <img 
          src="https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=12&h=12&fit=crop" 
          alt="Tiny bubble" 
          className="w-full h-full object-cover opacity-90"
        />
      </div>
      
      <div className="absolute top-96 left-40 w-4 h-4 bg-cyan-500/50 rounded-full animate-ping overflow-hidden" style={{ animationDelay: '2.8s' }}>
        <img 
          src="https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=16&h=16&fit=crop" 
          alt="Water tiny bubble" 
          className="w-full h-full object-cover opacity-80"
        />
      </div>
      
      <div className="absolute bottom-16 right-60 w-3 h-3 bg-purple-500/55 rounded-full animate-ping overflow-hidden" style={{ animationDelay: '0.3s' }}>
        <img 
          src="https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=12&h=12&fit=crop" 
          alt="Cozy tiny bubble" 
          className="w-full h-full object-cover opacity-95"
        />
      </div>
      
      {/* Motto bubble - floating text */}
      <div className="absolute top-1/2 left-8 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg animate-pulse border border-teal-200" style={{ animationDelay: '5s' }}>
        <p className="text-xs font-medium text-teal-700 whitespace-nowrap">
          Sortez de votre bulle
        </p>
      </div>
      
      <div className="absolute bottom-1/3 right-8 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg animate-bounce border border-cyan-200" style={{ animationDelay: '6s' }}>
        <p className="text-xs font-medium text-cyan-700 whitespace-nowrap">
          On veille sur vous
        </p>
      </div>
    </div>
  );
};

export default FloatingBubbles;
