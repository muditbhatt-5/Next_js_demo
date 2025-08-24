import React, { useState, useEffect } from 'react';
import { Gift, Star, Sparkles, Smile, Music, Headphones, Radio } from 'lucide-react';

function App() {
  const [musicNotes, setMusicNotes] = useState<Array<{ id: number; x: number; y: number; delay: number }>>([]);

  useEffect(() => {
    // Generate floating music notes
    const newMusicNotes = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 5
    }));
    setMusicNotes(newMusicNotes);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-200 via-pink-300 to-pink-400 overflow-hidden relative">
      {/* Floating Music Notes Background */}
      {musicNotes.map((note) => (
        <div
          key={note.id}
          className="absolute animate-pulse opacity-20"
          style={{
            left: `${note.x}%`,
            top: `${note.y}%`,
            animationDelay: `${note.delay}s`
          }}
        >
          <div className="text-2xl">🎵</div>
        </div>
      ))}

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen p-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Sparkles */}
          <div className="flex justify-center mb-8 space-x-4">
            <Sparkles className="text-pink-600 w-8 h-8 animate-spin" />
            <Star className="text-pink-700 w-6 h-6 animate-pulse" />
            <Sparkles className="text-pink-600 w-8 h-8 animate-spin" style={{ animationDirection: 'reverse' }} />
          </div>

          {/* Main Apology Message */}
          <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl p-8 md:p-12 border border-pink-300 mb-8">
            <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-rose-500 mb-6 animate-pulse">
              I Am Very Very Sorry
            </h1>
            
            <div className="flex justify-center items-center space-x-6 mb-8">
              <div className="text-6xl animate-bounce" style={{ animationDelay: '0s' }}>🎵</div>
              <Smile className="text-pink-500 w-12 h-12 animate-pulse" />
              <div className="text-6xl animate-bounce" style={{ animationDelay: '0.5s' }}>🎶</div>
            </div>

            <p className="text-xl md:text-2xl text-gray-700 mb-6 font-medium">
              Hey bestie, I know I messed up...
            </p>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto">
              You're such an amazing friend, and I hate that I hurt you. I promise to do better, 
              to listen more, and to be the friend you deserve. 
              Krisha Jiiii, did you forgive me?? 🥺
            </p>
          </div>

          {/* Cute Elements Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-pink-300/60 backdrop-blur-sm rounded-2xl p-6 text-center transform hover:scale-105 transition-transform">
              <div className="text-4xl mb-2">🎵</div>
              <p className="text-pink-800 font-semibold">Music</p>
            </div>
            <div className="bg-pink-300/60 backdrop-blur-sm rounded-2xl p-6 text-center transform hover:scale-105 transition-transform">
              <div className="text-4xl mb-2">🎧</div>
              <p className="text-pink-800 font-semibold">Beats</p>
            </div>
            <div className="bg-pink-300/60 backdrop-blur-sm rounded-2xl p-6 text-center transform hover:scale-105 transition-transform">
              <div className="text-4xl mb-2">🎤</div>
              <p className="text-pink-800 font-semibold">Songs</p>
            </div>
            <div className="bg-pink-300/60 backdrop-blur-sm rounded-2xl p-6 text-center transform hover:scale-105 transition-transform">
              <div className="text-4xl mb-2">🎹</div>
              <p className="text-pink-800 font-semibold">Melody</p>
            </div>
          </div>

          {/* Sweet Message */}
          <div className="bg-gradient-to-r from-pink-400/40 to-pink-500/40 backdrop-blur-md rounded-2xl p-6 border border-pink-400/50">
            <div className="flex justify-center items-center space-x-4 mb-4">
              <div className="text-3xl">🎵</div>
              <Music className="text-pink-600 w-8 h-8" />
              <div className="text-3xl">🎶</div>
              <Headphones className="text-pink-500 w-8 h-8" />
              <div className="text-3xl">🎵</div>
            </div>
            
            <p className="text-lg text-gray-700 font-medium">
              Krisha Jiiii, you deserve all the music, melodies, and happiness in the world 🎵
            </p>
            
            <div className="flex justify-center space-x-3 mt-4">
              {[...Array(5)].map((_, i) => (
                <div 
                  key={i} 
                  className="text-2xl animate-pulse"
                  style={{ animationDelay: `${i * 0.2}s` }}
                >
                  🎵
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Cute Elements */}
          <div className="mt-8 flex justify-center space-x-8">
            <div className="text-5xl animate-bounce" style={{ animationDelay: '1s' }}>🌸</div>
            <div className="text-5xl animate-bounce" style={{ animationDelay: '1.5s' }}>🎵</div>
            <div className="text-5xl animate-bounce" style={{ animationDelay: '2s' }}>🌸</div>
          </div>
        </div>
      </div>

      {/* Additional floating elements */}
      <div className="absolute top-10 left-10 text-pink-300 opacity-30">
        <Star className="w-8 h-8 animate-pulse" />
      </div>
      <div className="absolute top-20 right-20 text-pink-300 opacity-30">
        <Sparkles className="w-6 h-6 animate-spin" />
      </div>
      <div className="absolute bottom-20 left-20 text-pink-300 opacity-30">
        <div className="text-4xl animate-pulse">🎵</div>
      </div>
      <div className="absolute bottom-10 right-10 text-pink-300 opacity-30">
        <Star className="w-6 h-6 animate-pulse" />
      </div>
    </div>
  );
}

export default App;