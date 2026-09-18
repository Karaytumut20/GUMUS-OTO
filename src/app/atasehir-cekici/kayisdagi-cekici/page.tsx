import NeighborhoodSeoPage from '@/components/sections/NeighborhoodSeoPage';
import { ATASEHIR_NEIGHBORHOODS } from '@/data/neighborhoods';
import { getNeighborhoodMetadata } from '@/data/local-seo';

const area = ATASEHIR_NEIGHBORHOODS.find(item => item.slug === 'kayisdagi')!;
export const metadata = getNeighborhoodMetadata(area);
export default function Page() { return <NeighborhoodSeoPage area={area} />; }
