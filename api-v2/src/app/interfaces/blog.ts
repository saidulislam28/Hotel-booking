export interface IBlog {
  _id?: string;
  title: string;
  slug?: string;
  short_desc?: string;
  content?: string;
  image?: string;
  gallery?: string;
  category?: string;
  tags: string[];
  author?: string;
  is_active?: boolean;
  is_featured?: boolean;
  is_local_activities?: boolean;
  published_at?: Date;
  meta?: string;
  sort_order?: number;
}
