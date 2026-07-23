import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://priyanshurai.dev'),
  title: 'Priyanshu Rai | Software Engineer & AI Systems Developer',
  description: 'Portfolio of Priyanshu Rai, Software Engineer specializing in AI-powered applications, scalable backend architecture, and modern full-stack web platforms.',
  keywords: [
    'Priyanshu Rai',
    'Software Engineer',
    'AI Engineer',
    'Full Stack Developer',
    'FastAPI',
    'Node.js',
    'Next.js',
    'Nyaya AI',
    'Krishi Dost AI',
    'Guru Nanak Institute of Technology',
    'Bihar Developer'
  ],
  authors: [{ name: 'Priyanshu Rai' }],
  openGraph: {
    title: 'Priyanshu Rai | Software Engineer Portfolio',
    description: 'I build AI-powered applications, scalable backend systems, and modern web experiences.',
    url: 'https://priyanshurai.dev',
    siteName: 'Priyanshu Rai Portfolio',
    images: [
      {
        url: '/profile.png',
        width: 800,
        height: 800,
        alt: 'Priyanshu Rai Profile Photo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  icons: {
    icon: '/profile.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                var t = localStorage.getItem('theme');
                if (t === 'light' || (!t && window.matchMedia('(prefers-color-scheme: light)').matches)) {
                  document.documentElement.classList.remove('dark');
                } else {
                  document.documentElement.classList.add('dark');
                }
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body className="bg-slate-50 dark:bg-[#030712] text-slate-800 dark:text-slate-100 antialiased min-h-screen selection:bg-indigo-500/30 selection:text-indigo-200 transition-colors duration-300">
        {children}
      </body>
    </html>
  );
}
