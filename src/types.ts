export interface RsvpData {
  id?: string;
  fullName: string;
  attendance: 'attending' | 'declined';
  guestsCount: number;
  phone: string;
  message?: string;
  dietaryNotes?: string;
  submittedAt: string;
}

export interface GalleryPhoto {
  id: string;
  src: string;
  title: string;
  category: string;
  aspect: 'portrait' | 'landscape' | 'square';
  caption: string;
}

export interface TimelineEvent {
  time: string;
  title: string;
  description: string;
  iconName: string;
}
