import type { Metadata } from 'next';
import { DM_Mono, Instrument_Serif } from 'next/font/google';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { PageTransition } from '@/components/page-transition';
import './globals.css';

const dmMono = DM_Mono({
  variable: '--font-dm-mono',
  subsets: ['latin'],
  weight: ['400', '500'],
});

const instrumentSerif = Instrument_Serif({
  variable: '--font-instrument-serif',
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal', 'italic'],
});

export const metadata: Metadata = {
  title: 'RawEval Research | Expert-Annotated AI Evaluation Data',
  description:
    'Hand-picked domain experts from IITs, IIMs & top institutions. We deliver production-grade annotated datasets across healthcare, finance, legal & technology.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmMono.variable} ${instrumentSerif.variable}`}>
        <Navbar />
        <main id="main-content" style={{ paddingTop: 'var(--nav-height)' }}>
          <PageTransition>
            {children}
          </PageTransition>
        </main>
        <Footer />
      </body>
    </html>
  );
}
