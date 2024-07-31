import './globals.css';

/* Nextjs */
import type { Metadata } from 'next';

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
        {children}
      </body>
    </html>
  );
}
