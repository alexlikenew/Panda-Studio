export const metadata = {
    title: 'Panda Studio',
    description: 'Proces',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="pl">
            <body>{children}</body>
        </html>
    );
}
