import Link from 'next/link';

export default function HomePage() {
  return (
    <section style={{ padding: '24px' }}>
      <h1>Welcome to My Mini Site HER</h1>
      <p>This is the Home page.</p>

      <nav style={{ marginTop: '16px', display: 'flex', gap: '12px' }}>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </section>
  );
}
