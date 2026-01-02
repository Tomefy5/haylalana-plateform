import Link from 'next/link';
import { memo } from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { BookOpen, Clock, ArrowRight } from 'lucide-react';
import { Capsule } from '@/lib/mock-data-youth';

interface CapsuleCardProps {
    capsule: Capsule;
}

const CapsuleCard = memo(function CapsuleCard({ capsule }: CapsuleCardProps) {
    return (
        <Card
            className="overflow-hidden hover:shadow-xl transition-all duration-300 group border-2 border-haylalana-border-primary hover:border-haylalana-brand flex flex-col"
        >

            {/* En-tête avec gradient Haylalàna uniforme */}
            <div className="bg-gradient-to-br from-haylalana-brand-light to-haylalana-brand p-8 flex items-center justify-center relative overflow-hidden">

                {/* Pattern */}
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '20px 20px' }} aria-hidden="true" />

                {/* Icon */}
                <div className="relative text-6xl group-hover:scale-110 transition-transform">
                    {capsule.icon}
                </div>
            </div>

            <CardContent className="p-5 flex-1 flex flex-col">

                {/* Badge catégorie */}
                <Badge variant="secondary" className="mb-3 text-xs font-semibold w-fit bg-haylalana-bg-secondary text-haylalana-text-primary border-haylalana-border-primary">
                    {capsule.category}
                </Badge>

                {/* Titre */}
                <h3 className="text-lg font-bold mb-2 text-haylalana-heading-primary line-clamp-2 leading-tight group-hover:text-haylalana-brand transition-colors">
                    {capsule.title}
                </h3>

                {/* Description */}
                <p className="text-haylalana-text-secondary text-sm mb-4 line-clamp-3 leading-relaxed flex-1">
                    {capsule.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1 mb-3">
                    {capsule.tags.slice(0, 3).map((tag) => (
                        <span
                            key={tag}
                            className="px-2 py-1 bg-haylalana-bg-secondary text-haylalana-text-primary text-xs rounded-md border border-haylalana-border-primary"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Temps de lecture */}
                <div className="flex items-center gap-1 text-sm text-haylalana-text-tertiary">
                    <Clock className="w-4 h-4" aria-hidden="true" />
                    <span>{capsule.readTime} de lecture</span>
                </div>
            </CardContent>

            <CardFooter className="p-5 pt-0">
                <Button
                    asChild
                    variant="ghost"
                    className="w-full justify-between text-haylalana-brand hover:bg-haylalana-brand/5 hover:text-haylalana-brand-dark font-semibold group/btn"
                >
                    <Link href={`/jeunes/capsules/${capsule.id}`}>
                        <span className="flex items-center gap-2">
                            <BookOpen className="w-4 h-4" aria-hidden="true" />
                            Lire la capsule
                        </span>
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" aria-hidden="true" />
                    </Link>
                </Button>
            </CardFooter>
        </Card>
    );
});

export { CapsuleCard };
