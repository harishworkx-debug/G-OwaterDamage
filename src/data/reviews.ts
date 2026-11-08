export interface CustomerReview {
  id: string;
  author: string;
  rating: number;
  reviewCount: string;
  timeAgo: string;
  text: string;
}

export const reviewsSummary = {
  rating: 5.0,
  totalReviews: 3,
  platform: 'Google Reviews',
};

export const customerReviews: CustomerReview[] = [
  {
    id: 'damian-walsh',
    author: 'Damian Walsh',
    rating: 5,
    reviewCount: '1 review',
    timeAgo: 'a year ago',
    text: 'When we needed flood cleanup, the crew arrived prepared and organized. They checked everything to make sure nothing was missing, and we felt confident that our home was in good hands.',
  },
  {
    id: 'rylan-leticia',
    author: 'Rylan Leticia',
    rating: 5,
    reviewCount: '1 review',
    timeAgo: 'a year ago',
    text: 'Is this my go-to mold remediation service? You bet it is! I’m convinced, when mold sees these techs coming, it shrinks…it knows it doesn’t stand a chance. Please, don’t change a thing about your process. It’s perfect!',
  },
  {
    id: 'adam-morrison',
    author: 'Adam Morrison',
    rating: 5,
    reviewCount: '1 review',
    timeAgo: 'a year ago',
    text: 'Their water damage repair service was dependable, and the house felt back to normal quickly. Highly recommend.',
  },
];

