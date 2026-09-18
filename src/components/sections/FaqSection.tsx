import React from 'react';
import Accordion from '@/components/ui/Accordion';
import { faqsData } from '@/data/faqs';

export default function FaqSection() {
  return (
    <section className="section" id="sss" style={{ backgroundColor: 'var(--color-bg-dark-soft)' }}>
      <div className="container">
        <div style={{ maxWidth: '720px', marginBottom: '40px' }}>
          <span className="badge badge-warning" style={{ marginBottom: '12px' }}>
            Merak Edilenler
          </span>
          <h2 style={{ marginBottom: '16px' }}>
            Sıkça Sorulan Sorular
          </h2>
          <p className="text-lead">
            Ümraniye ve Ataşehir oto çekici, kurtarma ve yol yardım süreçleri hakkında en sık sorulan soruların net yanıtları.
          </p>
        </div>

        <div style={{ maxWidth: '840px' }}>
          <Accordion items={faqsData} />
        </div>
      </div>
    </section>
  );
}
