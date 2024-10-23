import type { Roast } from '../types';

export const roasts: Roast[] = [
  {
    id: '1',
    beforeImage: 'https://images.unsplash.com/photo-1517292987719-0369a794ec0f',
    afterImage: 'https://images.unsplash.com/photo-1522542550221-31fd19575a2d',
    description: 'Redesigned the dashboard for better visual hierarchy and cleaner data presentation',
    author: {
      name: 'Sarah Chen',
      handle: 'sarahchen_ui',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330'
    },
    likes: 234
  },
  {
    id: '2',
    beforeImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
    afterImage: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d',
    description: 'Simplified the analytics page with a focus on key metrics and actionable insights',
    author: {
      name: 'Alex Rivera',
      handle: 'arivera_design',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e'
    },
    likes: 156
  },
  {
    id: '3',
    beforeImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
    afterImage: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d',
    description: 'Enhanced the mobile navigation with better touch targets and clearer hierarchy',
    author: {
      name: 'Maya Johnson',
      handle: 'maya_designs',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80'
    },
    likes: 189
  }
];