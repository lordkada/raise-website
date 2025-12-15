export interface BlogPost {
  id: string;
  title: string;
  subtitle: string;
  target: string;
  category: 'Vision' | 'Tech' | 'Case Study';
  readTime: string;
  date: string;
  content: React.ReactNode;
}

export interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
  colSpan: number;
}
