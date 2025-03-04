export interface FormState {
  name: string;
  email: string;
  message: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQProps {
  faqs: FAQItem[];
  title?: string;
}

export interface AboutItem {
  title: string;
  description: string;
  imgUrl: string;
}

export interface HeroProps {
  videoSrc: string;
  subtitle: string;
  title: string;
  highlight: string;
  overlayOpacity?: string; // Default: "bg-black/40"
}