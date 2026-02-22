import type { Metadata } from 'next';
import './globals.css';
import { LangProvider } from '../lib/LangContext';

export const metadata: Metadata = {
  title: 'MyRehab — Clinical Rehabilitation Intelligence',
  description: 'A clinical AI platform for evidence-based rehabilitation.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <LangProvider>{children}</LangProvider>
      </body>
    </html>
  );
}
