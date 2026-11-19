export interface LandingService {
  id: string;
  title: string;
  shortDesc: string;
  points: string[];
  image: string;
  imageAlt: string;
}

export interface LandingServiceArea {
  name: string;
  zip: string;
  distanceNote: string;
}

export interface LandingFaq {
  question: string;
  answer: string;
}

export interface LandingPillar {
  title: string;
  desc: string;
  iconName: 'phone' | 'shield' | 'check' | 'gauge';
}

export interface InquiryFormData {
  fullName: string;
  phone: string;
  city: string;
  serviceNeeded: string;
  urgency: string;
  notes: string;
}
