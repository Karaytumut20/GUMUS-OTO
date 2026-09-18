type GuideItem = {
  heading: string;
  body: string;
};

type SeoTextGuideProps = {
  kicker: string;
  title: string;
  lead: string;
  items: GuideItem[];
};

export default function SeoTextGuide({ kicker, title, lead, items }: SeoTextGuideProps) {
  return (
    <section className="seo-text-guide">
      <div className="container">
        <div className="seo-guide-heading">
          <div>
            <p className="subpage-index">{kicker}</p>
            <h2>{title}</h2>
          </div>
          <p>{lead}</p>
        </div>
        <div className="seo-guide-grid">
          {items.map((item, index) => (
            <article key={item.heading}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h3>{item.heading}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
