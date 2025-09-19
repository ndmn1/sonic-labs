export interface Course {
  id: string;
  title: string;
  description: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  image: string;
  category: string;
  duration: string;
  price: number;
  rating: number;
  students: number;
}

export const courses: Course[] = [
  {
    id: '1',
    title: 'Basis Javascript',
    description: 'Know how JS work and implement a simple todo list program',
    level: 'Beginner',
    image: '/api/placeholder/400/200',
    category: 'Programming',
    duration: '4 weeks',
    price: 99,
    rating: 4.8,
    students: 1250
  },
  {
    id: '2',
    title: 'Advanced React Development',
    description: 'Master React hooks, context, and advanced patterns for building scalable applications',
    level: 'Intermediate',
    image: '/api/placeholder/400/200',
    category: 'Programming',
    duration: '6 weeks',
    price: 149,
    rating: 4.9,
    students: 890
  },
  {
    id: '3',
    title: 'Machine Learning Fundamentals',
    description: 'Learn the basics of ML algorithms and data science with Python',
    level: 'Advanced',
    image: '/api/placeholder/400/200',
    category: 'Data Science',
    duration: '8 weeks',
    price: 199,
    rating: 4.7,
    students: 650
  },
  {
    id: '4',
    title: 'Web Design Principles',
    description: 'Master UI/UX design principles and create beautiful, user-friendly interfaces',
    level: 'Beginner',
    image: '/api/placeholder/400/200',
    category: 'Design',
    duration: '5 weeks',
    price: 129,
    rating: 4.6,
    students: 1100
  },
  {
    id: '5',
    title: 'DevOps and Cloud Computing',
    description: 'Learn Docker, Kubernetes, and AWS for modern application deployment',
    level: 'Advanced',
    image: '/api/placeholder/400/200',
    category: 'DevOps',
    duration: '10 weeks',
    price: 249,
    rating: 4.8,
    students: 420
  },
  {
    id: '6',
    title: 'Digital Marketing Strategy',
    description: 'Comprehensive guide to digital marketing, SEO, and social media marketing',
    level: 'Intermediate',
    image: '/api/placeholder/400/200',
    category: 'Marketing',
    duration: '6 weeks',
    price: 179,
    rating: 4.5,
    students: 780
  }
];

export const categories = [
  'All',
  'Programming',
  'Design',
  'Data Science',
  'DevOps',
  'Marketing'
];

export const levels = [
  'All',
  'Beginner',
  'Intermediate',
  'Advanced'
];
