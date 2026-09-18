import Link from 'next/link';
import StructuredData from '@/components/seo/StructuredData';
import { businessConfig } from '@/config/business';

export interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <>
    <nav aria-label="Breadcrumb" style={{ marginBottom: '24px' }}>
      <ol style={{
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        gap: '8px',
        listStyle: 'none',
        fontSize: '14px',
        color: 'var(--color-text-muted-dark)'
      }}>
        <li>
          <Link href="/" style={{ color: 'var(--color-text-muted-dark)', textDecoration: 'none' }}>
            Ana Sayfa
          </Link>
        </li>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={item.href} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span aria-hidden="true" style={{ color: 'var(--color-border-dark)' }}>/</span>
              {isLast ? (
                <span aria-current="page" style={{ color: 'var(--color-brand-yellow)', fontWeight: 600 }}>
                  {item.label}
                </span>
              ) : (
                <Link href={item.href} style={{ color: 'var(--color-text-muted-dark)', textDecoration: 'none' }}>
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
    <StructuredData breadcrumbs={[
      { name: 'Ana Sayfa', url: businessConfig.siteUrl },
      ...items.map(item => ({ name: item.label, url: item.href }))
    ]} />
    </>
  );
}
