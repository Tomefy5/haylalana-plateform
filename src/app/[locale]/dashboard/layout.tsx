'use client';

import { usePathname } from 'next/navigation';
import { DashboardSidebar } from '@/components/dashboard/Sidebar';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    // Determine user type based on path
    const userType = pathname.includes('/dashboard/pro') ? 'pro' : 'citizen';

    return (
        <div className="flex h-screen bg-haylalana-bg-secondary overflow-hidden">
            {/* Desktop Sidebar */}
            <DashboardSidebar userType={userType} />

            {/* Mobile Header */}
            <div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-white border-b border-haylalana-border-primary h-14 flex items-center justify-between px-4 shadow-sm">
                <span className="font-bold text-haylalana-heading-primary">Haylalàna</span>
                <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </Button>
            </div>

            {/* Mobile Sidebar Overlay */}
            {mobileMenuOpen && (
                <div className="lg:hidden fixed inset-0 z-40 bg-black/50 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)}>
                    <div
                        className="absolute left-0 top-0 bottom-0 w-[280px] bg-white animate-in slide-in-from-left duration-300"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="pt-16">
                            <DashboardSidebar userType={userType} />
                        </div>
                    </div>
                </div>
            )}

            {/* Main Content */}
            <main className={cn(
                "flex-1 overflow-y-auto",
                "lg:pt-0 pt-14" // Account for mobile header
            )}>
                <div className="p-4 sm:p-6 lg:p-8">
                    <div className="max-w-7xl mx-auto animate-in fade-in duration-300">
                        {children}
                    </div>
                </div>
            </main>
        </div>
    );
}
