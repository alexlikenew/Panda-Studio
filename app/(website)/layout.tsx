// This layout is now redundant as functionality has been moved to app/layout.tsx
// Keeping as a pass-through to maintain folder structure if needed.
import "@/styles/main.scss";
import Footer from "@/components/layout/Footer";
import Navbar from "@/widgets/Navbar";

export default function WebsiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return <>
    <Navbar />
    {children}
    <Footer />
  </>;
}
