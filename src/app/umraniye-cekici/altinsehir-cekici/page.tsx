import NeighborhoodSeoPage from '@/components/sections/NeighborhoodSeoPage';
import { UMRANIYE_NEIGHBORHOODS } from '@/data/neighborhoods';
import { getNeighborhoodMetadata } from '@/data/local-seo';

const area = UMRANIYE_NEIGHBORHOODS.find(item => item.slug === 'altinsehir')!;
export const metadata = getNeighborhoodMetadata(area);
export default function Page() { return <NeighborhoodSeoPage area={area} />; }
