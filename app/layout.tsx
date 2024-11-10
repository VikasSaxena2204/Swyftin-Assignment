
import './globals.css';

export const metadata = {
  title: 'Chat Screen',
  description: 'A WhatsApp-like chat interface using Next.js, Tailwind, and Shadcn UI',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#f0f2f5]">{children}</body>
    </html>
  );
}
