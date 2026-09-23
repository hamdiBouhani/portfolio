import { site } from '../data/site';

export const ghCard = (path: string, extra = ''): string =>
  `https://github-profile-summary-cards.vercel.app/api/cards/${path}?username=${site.githubUsername}${extra}`;

export const profileViewsBadge = (): string =>
  `https://komarev.com/ghpvc/?username=${site.githubUsername}&color=0ea5e9&style=flat-square&label=profile+views`;