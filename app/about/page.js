// app/about/page.js
export default function AboutPage() {
    return (
      <section style={{padding: '24px'}}>
        <h1>About</h1>
        <p>We are building a tiny 3-page Next.js site from scratch.</p>
        <nav style={{marginTop: '16px', display: 'flex', gap: '12px'}}>
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </nav>
      </section>
    );
  }
  