import "./globals.css";

export const metadata = {
  title: "Reactive Sentinel",
  description: "Real-time on-chain alerts and automation."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
