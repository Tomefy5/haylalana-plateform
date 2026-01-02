export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen bg-haylalana-bg-secondary p-4 sm:p-6 lg:p-8">
            <div className="container mx-auto max-w-7xl">
                {children}
            </div>
        </div>
    );
}
