import React from 'react';
import { Twitter, Github } from 'lucide-react';
import RoastCard from './components/RoastCard';
import { roasts } from './data/roasts';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <nav className="border-b border-gray-700/50 sticky top-0 bg-gray-900/95 backdrop-blur-sm z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              UI Roasts
            </h1>
            <div className="flex items-center gap-4">
              <a href="https://twitter.com/search?q=%23UIRoast" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="p-2 hover:bg-gray-700 rounded-full transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://github.com" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="p-2 hover:bg-gray-700 rounded-full transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Design Roasts Gallery</h2>
          <p className="text-gray-400">
            Explore before & after UI transformations from the design community.
            See how small changes can make a big impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {roasts.map((roast) => (
            <RoastCard key={roast.id} roast={roast} />
          ))}
        </div>
      </main>

      <footer className="border-t border-gray-700/50 py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-400">
          <p>Submit your own roasts on Twitter using #UIRoast</p>
        </div>
      </footer>
    </div>
  );
}