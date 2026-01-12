import { slugify, truncate, capitalize } from '../utils/strings';

export interface Article {
  title: string;
  body: string;
  author: string;
}

export interface ProcessedArticle {
  title: string;
  slug: string;
  excerpt: string;
  author: string;
}

export function processArticle(article: Article, excerptLength: number): ProcessedArticle {
  return {
    title: capitalize(article.title),
    slug: slugify(article.title),
    excerpt: truncate(article.body, excerptLength),
    author: capitalize(article.author)
  };
}

export function processArticles(articles: Article[], excerptLength: number): ProcessedArticle[] {
  return articles.map(article => processArticle(article, excerptLength));
}

export function findArticleBySlug(
  articles: ProcessedArticle[],
  slug: string
): ProcessedArticle | undefined {
  return articles.find(article => article.slug === slug);
}
