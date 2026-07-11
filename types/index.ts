export interface Service {
  id: number | string;
  title: string;
}

export interface Product {
  id: string;
  title: string;
  heading: string;
  description: string;
  content: string[];
}

export interface IndustryCardStyle {
  image: string;
  w: string;
  h: string;
  ml: string;
  textClip: string;
  delayText: number;
  delayCard: number;
  hideText: boolean;
}

export interface IndustryCard extends IndustryCardStyle {
  title: string;
  description: string;
}

export interface Review {
  name: string;
  body: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}
