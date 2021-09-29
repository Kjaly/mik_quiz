import { TPublication } from '../../store/publications/types';

export type TLink = {
  url: string | null,
  active: boolean,
  label: string | null,
}

export interface PublicationsResponse {
  data: Array<TPublication>,
  links: {
    first: string,
    last:string,
    next:string | null,
    prev:string | null,
  }
  meta: {
    current_page: number,
    from?: number | null,
    last_page: number,
    s: Array<TLink>,
    path: string,
    per_page: number,
    to: number | null,
    total: number,
  }
}

