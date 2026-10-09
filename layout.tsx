import "./globals.css";

export const metadata = { title: "Vidya AI Tutor", description: "Unified Architecture" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased bg-slate-950 text-white">{children}</body>
    </html>
  );
}