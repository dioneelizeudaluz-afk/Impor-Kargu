import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Impor Kargu | Importação para Moçambique',
  description: 'Da China para Moçambique, sem complicação.'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-MZ">
      <body>{children}</body>
    </html>
  );
}
