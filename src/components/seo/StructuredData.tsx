import React from 'react';
import { getLocalBusinessSchema, getBreadcrumbSchema } from '@/lib/structured-data';

interface StructuredDataProps {
  breadcrumbs?: { name: string; url: string }[];
}

export default function StructuredData({ breadcrumbs }: StructuredDataProps) {
  const localBusiness = getLocalBusinessSchema();
  const breadcrumbData = breadcrumbs ? getBreadcrumbSchema(breadcrumbs) : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
      {breadcrumbData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
        />
      )}
    </>
  );
}
