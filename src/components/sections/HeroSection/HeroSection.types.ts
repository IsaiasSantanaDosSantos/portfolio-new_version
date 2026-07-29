import { HTMLAttributes } from 'react';

export interface HeroSectionProps extends HTMLAttributes<HTMLElement> {
  title: string;
  subtitle: string;
}
