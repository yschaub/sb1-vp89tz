import React, { useState } from 'react';
import { Share2, ThumbsUp, ArrowRight } from 'lucide-react';
import type { Roast } from '../types';
import BeforeAfterSlider from './BeforeAfterSlider';

interface RoastCardProps {
  roast: Roast;
}

export default function RoastCard({ roast }: RoastCardProps) {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(roast.likes);

  const handleLike = () => {
    setLiked(!liked);
    setLikes(prev => liked ? prev - 1 : prev + 1);
  };

  return (
    <div className="bg-gray-800 rounded-xl overflow-hidden shadow-2xl hover:shadow-purple-500/10 transition-all group">
      <div className="relative aspect-video">
        <BeforeAfterSlider
          beforeImage={roast.beforeImage}
          afterImage={roast.afterImage}
        />
        <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-sm rounded-full px-3 py-1.5 text-xs font-medium text-white flex items-center gap-1.5">
          <span className="text-gray-400">Before</span>
          <ArrowRight className="w-3 h-3" />
          <span className="text-purple-400">After</span>
        </div>
      </div>

      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <img
              src={roast.author.avatar}
              alt={roast.author.name}
              className="w-10 h-10 rounded-full ring-2 ring-purple-500/20"
            />
            <div>
              <h3 className="font-semibold text-sm">{roast.author.name}</h3>
              <p className="text-gray-400 text-xs">@{roast.author.handle}</p>
            </div>
          </div>
          <div className="flex gap-2">
            <button 
              onClick={handleLike}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm transition-colors ${
                liked ? 'bg-purple-500 text-white' : 'bg-gray-700 hover:bg-gray-600'
              }`}
            >
              <ThumbsUp className="w-4 h-4" />
              <span>{likes}</span>
            </button>
            <button className="p-1.5 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors">
              <Share2 className="w-4 h-4" />
            </button>
          </div>
        </div>

        <p className="text-gray-300 text-sm">{roast.description}</p>
      </div>
    </div>
  );
}