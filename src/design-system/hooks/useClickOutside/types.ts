import { RefObject } from 'react';

export interface ClickOutsideProps {
  ref: RefObject<HTMLElement>;

  callback(): void;
}
