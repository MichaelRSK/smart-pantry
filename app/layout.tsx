// app/layout.tsx
import "./globals.css";

export const metadata = {
  title: "SmartPantry",
  description: "Track what you have. Waste less. Save more.",
  icons: {
    icon: "/Green_Basket_Icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-transparent antialiased">
        {children}
      </body>
    </html>
  );
}