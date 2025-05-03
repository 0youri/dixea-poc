import type { Piece } from './piece';

export interface Site {
  id: number;
  documentId: string;
  slug: string;
  title: string;
  description?: string;
  logo: string;
  pieces: Piece[];
}