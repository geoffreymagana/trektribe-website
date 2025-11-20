

export type Partner = {
  name: string;
  username: string;
  avatarUrl: string;
  isVerified?: boolean;
  verificationType?: 'gold' | 'blue';
  followerCount?: number;
  followingCount?: number;
  accountType?: 'Corporate' | 'NGO' | 'Community' | 'Non-profit';
  dateJoined?: string;
};

export type Event = {
  id: string;
  title: string;
  category: "Hike" | "Marathon" | "Cycling" | "Mountain Climb" | "Impact";
  date: string;
  location: string;
  image: {
    id: string;
    url: string;
    hint: string;
  };
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  distance?: number;
  cause?: string;
  snacks?: boolean;
  eventType: "Community" | "Corporate";
  partners?: Partner[];
};

export type Testimonial = {
  id: string;
  name: string;
  role: string;
  quote: string;
  image: {
    id: string;
    url: string;
    hint: string;
  };
};

export type TeamMember = {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: {
    id: string;
    url: string;
    hint: string;
  };
  department: "Leadership" | "Engineering" | "Community";
};

