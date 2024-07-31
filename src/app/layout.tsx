import './globals.css';

/* Nextjs */
import type { Metadata } from 'next';

/* Providers */
import Providers from './provider';

export const metadata: Metadata = {
  title: 'Test | Hire Digital',
  description: 'Test | Hire Digital'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>)
{
  return (
    <html lang="en">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
