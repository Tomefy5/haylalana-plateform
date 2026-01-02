'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
    LayoutDashboard,
    Bot,
    ClipboardList,
    Calendar,
    Calculator,
    Settings,
    ChevronLeft,
    ChevronRight,
    LogOut,
    User,
    HelpCircle,
    TrendingUp
} from 'lucide-react';

interface SidebarProps {
    userType?: 'citizen' | 'pro';
}

const CITIZEN_NAV_ITEMS = [
    { name: 'Tableau de Bord', href: '/dashboard/citizen', icon: LayoutDashboard },
    { name: 'Conseiller IA', href: '/dashboard/advisor', icon: Bot },
    { name: 'Démarches', href: '/dashboard/procedures', icon: ClipboardList },
    { name: 'Ma Progression', href: '#', icon: TrendingUp },
];

const PRO_NAV_ITEMS = [
    { name: 'Tableau de Bord', href: '/dashboard/pro', icon: LayoutDashboard },
    { name: 'Obligations', href: '/dashboard/pro/obligations', icon: Calendar },
    { name: 'Simulateur', href: '/dashboard/pro/simulator', icon: Calculator },
    { name: 'Conseiller IA', href: '/dashboard/advisor', icon: Bot },
    { name: 'Démarches', href: '/dashboard/procedures', icon: ClipboardList },
];

export function DashboardSidebar({ userType = 'citizen' }: SidebarProps) {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const pathname = usePathname();

    const navItems = userType === 'pro' ? PRO_NAV_ITEMS : CITIZEN_NAV_ITEMS;

    return (
        <aside
            className={cn(
                "hidden lg:flex flex-col h-full bg-white border-r border-haylalana-border-primary transition-all duration-300 ease-in-out",
                isCollapsed ? "w-[72px]" : "w-[260px]"
            )}
        >
            {/* User Profile Section */}
            <div className={cn(
                "p-4 border-b border-haylalana-border-primary",
                isCollapsed ? "flex justify-center" : ""
            )}>
                <div className={cn(
                    "flex items-center gap-3",
                    isCollapsed ? "justify-center" : ""
                )}>
                    <div className="w-10 h-10 rounded-full bg-haylalana-brand/10 flex items-center justify-center shrink-0 ring-2 ring-haylalana-brand/20">
                        <User className="w-5 h-5 text-haylalana-brand" />
                    </div>
                    {!isCollapsed && (
                        <div className="flex-1 min-w-0 animate-in fade-in slide-in-from-left-2 duration-200">
                            <p className="font-semibold text-sm text-haylalana-heading-primary truncate">
                                {userType === 'pro' ? 'TechStartup SARL' : 'Alex Rakoto'}
                            </p>
                            <p className="text-xs text-haylalana-text-tertiary truncate">
                                {userType === 'pro' ? 'Compte Entreprise' : 'Citoyen Éclairé'}
                            </p>
                        </div>
                    )}
                </div>
            </div>

            {/* Navigation */}
            <ScrollArea className="flex-1 py-4">
                <nav className="space-y-1 px-3">
                    {navItems.map((item) => {
                        const Icon = item.icon;
                        const isActive = pathname === item.href || pathname.startsWith(item.href + '/');

                        return (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={cn(
                                    "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 group",
                                    isActive
                                        ? "bg-haylalana-brand text-white shadow-sm"
                                        : "text-haylalana-text-secondary hover:bg-haylalana-bg-secondary hover:text-haylalana-brand",
                                    isCollapsed && "justify-center px-2"
                                )}
                                title={isCollapsed ? item.name : undefined}
                            >
                                <Icon className={cn(
                                    "w-5 h-5 shrink-0 transition-transform",
                                    !isActive && "group-hover:scale-110"
                                )} />
                                {!isCollapsed && (
                                    <span className="truncate animate-in fade-in slide-in-from-left-2 duration-200">
                                        {item.name}
                                    </span>
                                )}
                            </Link>
                        );
                    })}
                </nav>

                {/* Divider */}
                <div className="my-4 mx-3 border-t border-haylalana-border-primary" />

                {/* Secondary Actions */}
                <nav className="space-y-1 px-3">
                    <Link
                        href="#"
                        className={cn(
                            "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-haylalana-text-secondary hover:bg-haylalana-bg-secondary hover:text-haylalana-brand transition-all",
                            isCollapsed && "justify-center px-2"
                        )}
                        title={isCollapsed ? "Aide" : undefined}
                    >
                        <HelpCircle className="w-5 h-5 shrink-0" />
                        {!isCollapsed && <span>Aide</span>}
                    </Link>
                    <Link
                        href="#"
                        className={cn(
                            "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-haylalana-text-secondary hover:bg-haylalana-bg-secondary hover:text-haylalana-brand transition-all",
                            isCollapsed && "justify-center px-2"
                        )}
                        title={isCollapsed ? "Paramètres" : undefined}
                    >
                        <Settings className="w-5 h-5 shrink-0" />
                        {!isCollapsed && <span>Paramètres</span>}
                    </Link>
                </nav>
            </ScrollArea>

            {/* Footer Actions */}
            <div className="p-3 border-t border-haylalana-border-primary space-y-2">
                <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsCollapsed(!isCollapsed)}
                    className={cn(
                        "w-full text-haylalana-text-tertiary hover:text-haylalana-brand",
                        isCollapsed ? "justify-center" : "justify-start"
                    )}
                >
                    {isCollapsed ? (
                        <ChevronRight className="w-4 h-4" />
                    ) : (
                        <>
                            <ChevronLeft className="w-4 h-4 mr-2" />
                            Réduire
                        </>
                    )}
                </Button>
                <Button
                    variant="ghost"
                    size="sm"
                    className={cn(
                        "w-full text-red-500 hover:text-red-600 hover:bg-red-50",
                        isCollapsed ? "justify-center" : "justify-start"
                    )}
                    title={isCollapsed ? "Déconnexion" : undefined}
                >
                    <LogOut className="w-4 h-4" />
                    {!isCollapsed && <span className="ml-2">Déconnexion</span>}
                </Button>
            </div>
        </aside>
    );
}
