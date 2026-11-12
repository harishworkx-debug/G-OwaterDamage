import { createContext } from 'react';

export interface SeoHeadData {
  title: string;
  description?: string;
  path?: string;
  robots?: string;
  schemaPayload?: string;
}

export type SeoCollector = (data: SeoHeadData) => void;

export const SeoCollectorContext = createContext<SeoCollector | null>(null);

