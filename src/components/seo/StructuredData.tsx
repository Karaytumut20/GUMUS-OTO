import React from 'react';
import { getLocalBusinessSchema, getWebSiteSchema, getBreadcrumbSchema } from '@/lib/structured-data';

interface StructuredDataProps {
  breadcrumbs?: { name: string; url: string }[];
  schemas?: Record<string, unknown>[];
}

export default function StructuredData({ breadcrumbs, schemas = [] }: StructuredDataProps) {
  const data = [
    ...(!breadcrumbs && schemas.length === 0 ? [getLocalBusinessSchema(), getWebSiteSchema()] : []),
    ...(breadcrumbs ? [getBreadcrumbSchema(breadcrumbs)] : []),
    ...schemas
  ];

  return (
    <>
      {data.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
