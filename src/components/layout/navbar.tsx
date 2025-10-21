// src/components/layout/navbar.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import {
    Menu,
    X,
    Scale,
    BookOpen,
    Users,
    FileText,
    MessageSquare,
    Baby,
    GraduationCap,
    Briefcase,
    Rocket,
    ChevronDown
} from 'lucide-react';
import Image from 'next/image';

export function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [contenusOpen, setContenusOpen] = useState(false);
    const pathname = usePathname();

    const navigationLinks = [
        {
            name: 'Accueil',
            href: '/',
        },
        {
            name: 'Contenus',
            href: '/contenus',
            hasDropdown: true,
            dropdownItems: [
                { name: 'Enfants', href: '/contents/children', icon: Baby },
                { name: 'Jeunes', href: '/contents/youth', icon: GraduationCap },
                { name: 'Adultes', href: '/contents/adults', icon: Briefcase },
                { name: 'Startup', href: '/contents/startup', icon: Rocket },
            ],
        },
        {
            name: 'Textes juridiques',
            href: '/legal-texts',
            icon: FileText,
        },
        {
            name: 'Annuaire',
            href: '/directory',
            icon: Users,
        },
        {
            name: 'Blog',
            href: '/blog',
            icon: BookOpen,
        },
        {
            name: 'Contact',
            href: '/contact',
            icon: MessageSquare,
        },
    ];

    const isActive = (href: string) => {
        if (href === '/') return pathname === '/';
        return pathname.startsWith(href);
    };

    return (
        <nav className="sticky top-0 z-50 bg-white border-b-2 border-haylalana-border-primary shadow-sm">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 lg:h-20">

                    {/* Logo */}
                    <Link
                        href="/"
                        className="flex items-center gap-2 group"
                        aria-label="Retour à l'accueil"
                    >
                        {/* Logo Haylalàna */}
                        <div className="relative w-10 h-10 rounded-lg overflow-hidden group-hover:scale-105 transition-transform">
                            <Image
                                src="/icons/haylalana-icon-ss-bg.png"
                                alt="Logo Haylalàna"
                                width={40}
                                height={40}
                                className="object-contain"
                                priority
                            />
                        </div>

                        {/* Nom de la plateforme */}
                        <span className="text-xl font-bold text-haylalana-heading-primary group-hover:text-haylalana-brand transition-colors">
                            Haylalàna
                        </span>
                    </Link>


                    {/* Navigation Desktop */}
                    <div className="hidden lg:flex items-center gap-1">
                        {navigationLinks.map((link) => {
                            if (link.hasDropdown) {
                                return (
                                    <div key={link.name} className="relative">
                                        <button
                                            onClick={() => setContenusOpen(!contenusOpen)}
                                            onMouseEnter={() => setContenusOpen(true)}
                                            className={`
                        px-4 py-2 rounded-lg font-medium text-sm transition-all flex items-center gap-1
                        ${isActive(link.href)
                                                    ? 'bg-haylalana-brand/10 text-haylalana-brand'
                                                    : 'text-haylalana-text-primary hover:bg-haylalana-brand/5 hover:text-haylalana-brand'
                                                }
                      `}
                                        >
                                            {link.name}
                                            <ChevronDown className={`w-4 h-4 transition-transform ${contenusOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
                                        </button>

                                        {/* Dropdown */}
                                        {contenusOpen && (
                                            <div
                                                className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-xl border-2 border-haylalana-border-primary py-2"
                                                onMouseLeave={() => setContenusOpen(false)}
                                            >
                                                {link.dropdownItems?.map((item) => {
                                                    const IconComponent = item.icon;
                                                    return (
                                                        <Link
                                                            key={item.name}
                                                            href={item.href}
                                                            className="flex items-center gap-3 px-4 py-3 hover:bg-haylalana-brand/5 transition-colors"
                                                            onClick={() => setContenusOpen(false)}
                                                        >
                                                            {IconComponent && <IconComponent className="w-5 h-5 text-haylalana-brand" aria-hidden="true" />}
                                                            <span className="text-sm font-medium text-haylalana-text-primary hover:text-haylalana-brand">
                                                                {item.name}
                                                            </span>
                                                        </Link>
                                                    );
                                                })}
                                            </div>
                                        )}
                                    </div>
                                );
                            }

                            return (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={`
                    px-4 py-2 rounded-lg font-medium text-sm transition-all
                    ${isActive(link.href)
                                            ? 'bg-haylalana-brand/10 text-haylalana-brand'
                                            : 'text-haylalana-text-primary hover:bg-haylalana-brand/5 hover:text-haylalana-brand'
                                        }
                  `}
                                >
                                    {link.name}
                                </Link>
                            );
                        })}
                    </div>

                    {/* CTA Desktop */}
                    <div className="hidden lg:flex items-center gap-3">
                        <Button
                            asChild
                            variant="outline"
                            className="border-2 border-haylalana-brand text-haylalana-brand hover:bg-haylalana-brand hover:text-white font-semibold"
                        >
                            <Link href="/contact">Nous contacter</Link>
                        </Button>
                    </div>

                    {/* Bouton Menu Mobile */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="lg:hidden p-2 rounded-lg text-haylalana-text-primary hover:bg-haylalana-brand/5 transition-colors"
                        aria-label={mobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
                    >
                        {mobileMenuOpen ? (
                            <X className="w-6 h-6" aria-hidden="true" />
                        ) : (
                            <Menu className="w-6 h-6" aria-hidden="true" />
                        )}
                    </button>
                </div>

                {/* Menu Mobile */}
                {mobileMenuOpen && (
                    <div className="lg:hidden py-4 border-t border-haylalana-border-primary">
                        <div className="space-y-1">
                            {navigationLinks.map((link) => {
                                if (link.hasDropdown) {
                                    return (
                                        <div key={link.name}>
                                            <button
                                                onClick={() => setContenusOpen(!contenusOpen)}
                                                className={`
                          w-full text-left px-4 py-3 rounded-lg font-medium text-sm transition-all flex items-center justify-between
                          ${isActive(link.href)
                                                        ? 'bg-haylalana-brand/10 text-haylalana-brand'
                                                        : 'text-haylalana-text-primary hover:bg-haylalana-brand/5 hover:text-haylalana-brand'
                                                    }
                        `}
                                            >
                                                {link.name}
                                                <ChevronDown className={`w-4 h-4 transition-transform ${contenusOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
                                            </button>

                                            {contenusOpen && (
                                                <div className="pl-4 mt-1 space-y-1">
                                                    {link.dropdownItems?.map((item) => {
                                                        const IconComponent = item.icon;
                                                        return (
                                                            <Link
                                                                key={item.name}
                                                                href={item.href}
                                                                className="flex items-center gap-3 px-4 py-2 rounded-lg text-sm text-haylalana-text-secondary hover:bg-haylalana-brand/5 hover:text-haylalana-brand transition-colors"
                                                                onClick={() => {
                                                                    setMobileMenuOpen(false);
                                                                    setContenusOpen(false);
                                                                }}
                                                            >
                                                                {IconComponent && <IconComponent className="w-4 h-4" aria-hidden="true" />}
                                                                {item.name}
                                                            </Link>
                                                        );
                                                    })}
                                                </div>
                                            )}
                                        </div>
                                    );
                                }

                                return (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        className={`
                      block px-4 py-3 rounded-lg font-medium text-sm transition-all
                      ${isActive(link.href)
                                                ? 'bg-haylalana-brand/10 text-haylalana-brand'
                                                : 'text-haylalana-text-primary hover:bg-haylalana-brand/5 hover:text-haylalana-brand'
                                            }
                    `}
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        {link.name}
                                    </Link>
                                );
                            })}
                        </div>

                        {/* CTA Mobile */}
                        <div className="mt-4 pt-4 border-t border-haylalana-border-primary">
                            <Button
                                asChild
                                className="w-full bg-haylalana-brand hover:bg-haylalana-brand-dark text-white font-semibold"
                            >
                                <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                                    Nous contacter
                                </Link>
                            </Button>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}
