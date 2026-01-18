// This layout is now redundant as functionality has been moved to app/layout.tsx
// Keeping as a pass-through to maintain folder structure if needed.

export default function WebsiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
