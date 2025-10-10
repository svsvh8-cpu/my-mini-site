// app/contact/page.js
export default function ContactPage() {
    return (
      <section style={{padding: '24px'}}>
        <h1>Contact</h1>
        <p>Write to us at hello@example.com</p>
        <nav style={{marginTop: '16px', display: 'flex', gap: '12px'}}>
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </nav>
      </section>
    );
  }

  