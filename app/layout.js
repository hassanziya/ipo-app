// app/layout.js
import "./globals.css";

export const metadata = {
  title: "IPO App",
  description: "Explore and manage IPO listings.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Meta Tags */}
        <meta property="og:title" content="IPO App" />
        <meta
          property="og:description"
          content="Explore and manage IPO listings."
        />
        <meta property="og:image" content="/og-image.jpg" />
      </head>
      <body className="antialiased bg-gray-50 text-gray-900">{children}</body>
    </html>
  );
}
