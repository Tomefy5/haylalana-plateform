import Link from 'next/link';
import { memo } from 'react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Play, Clock, HelpCircle, Trophy } from 'lucide-react';
import { Quiz } from '@/lib/mock-data-youth';

interface QuizCardProps {
    quiz: Quiz;
}

const QuizCard = memo(function QuizCard({ quiz }: QuizCardProps) {
    // Couleur du badge selon difficulté avec palette Haylalàna
    const difficultyColor = {
        'Facile': 'bg-haylalana-success-bg text-haylalana-success border-haylalana-success/30',
        'Moyen': 'bg-haylalana-info-bg text-haylalana-info border-haylalana-info/30',
        'Difficile': 'bg-haylalana-error-bg text-haylalana-error border-haylalana-error/30',
    };

    return (
        <Card
            className="hover:shadow-xl transition-all duration-300 group border-2 border-haylalana-border-primary hover:border-haylalana-brand flex flex-col"
        >
            <CardHeader className="pb-4">

                {/* En-tête avec icône et badges */}
                <div className="flex items-start justify-between mb-4">

                    {/* Icône avec fond blanc et bordure */}
                    <div className="bg-white border-2 border-haylalana-brand/20 text-haylalana-brand p-4 rounded-xl text-4xl group-hover:scale-110 group-hover:border-haylalana-brand/40 transition-all">
                        {quiz.icon}
                    </div>

                    {/* Badges */}
                    <div className="flex flex-col gap-2 items-end">
                        <Badge variant="secondary" className="text-xs font-semibold bg-haylalana-bg-secondary text-haylalana-text-primary border-haylalana-border-primary">
                            {quiz.category}
                        </Badge>
                        <Badge
                            className={`text-xs font-semibold border ${difficultyColor[quiz.difficulty]}`}
                            variant="outline"
                        >
                            {quiz.difficulty}
                        </Badge>
                    </div>
                </div>

                {/* Titre */}
                <h3 className="text-lg font-bold text-haylalana-heading-primary leading-tight mb-2 group-hover:text-haylalana-brand transition-colors line-clamp-2">
                    {quiz.title}
                </h3>

                {/* Points avec icône Trophy */}
                <div className="flex items-center gap-1.5 text-haylalana-brand">
                    <Trophy className="w-4 h-4" aria-hidden="true" />
                    <span className="text-sm font-bold">{quiz.points} points</span>
                </div>
            </CardHeader>

            <CardContent className="flex-1">

                {/* Description */}
                <p className="text-haylalana-text-secondary text-sm mb-4 line-clamp-3 leading-relaxed">
                    {quiz.description}
                </p>

                {/* Métadonnées */}
                <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-haylalana-text-tertiary">
                        <HelpCircle className="w-4 h-4" aria-hidden="true" />
                        <span>{quiz.questionsCount} questions</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-haylalana-text-tertiary">
                        <Clock className="w-4 h-4" aria-hidden="true" />
                        <span>{quiz.duration}</span>
                    </div>
                </div>
            </CardContent>

            <CardFooter className="pt-4">
                <Button
                    asChild
                    className="w-full bg-haylalana-brand hover:bg-haylalana-brand-dark text-white font-semibold"
                    size="lg"
                >
                    <Link href={`/jeunes/quiz/${quiz.id}`}>
                        <Play className="w-4 h-4 mr-2" fill="currentColor" aria-hidden="true" />
                        Commencer le quiz
                    </Link>
                </Button>
            </CardFooter>
        </Card>
    );
});

export { QuizCard };
