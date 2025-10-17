// src/components/jeunes/quiz-grid.tsx
import Link from 'next/link';
import { mockQuizzes } from '@/lib/mock-data-youth';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Play, Clock, HelpCircle, Trophy } from 'lucide-react';

export function QuizGrid() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockQuizzes.map((quiz) => {
                // Couleur du badge selon difficulté
                const difficultyColor = {
                    'Facile': 'bg-green-100 text-green-700 border-green-300',
                    'Moyen': 'bg-yellow-100 text-yellow-700 border-yellow-300',
                    'Difficile': 'bg-red-100 text-red-700 border-red-300',
                };

                return (
                    <Card
                        key={quiz.id}
                        className="overflow-hidden hover:shadow-2xl transition-all duration-300 group border-2 hover:border-indigo-400 hover:-translate-y-1"
                    >

                        {/* En-tête coloré avec icône */}
                        <div className={`${quiz.color} p-10 flex flex-col items-center justify-center text-white relative overflow-hidden`}>

                            {/* Pattern de fond */}
                            <div className="absolute inset-0 bg-grid-white/[0.1] bg-[size:20px_20px]" aria-hidden="true" />

                            {/* Emoji/Icon */}
                            <div className="relative text-7xl mb-3 group-hover:scale-110 transition-transform">
                                {quiz.icon}
                            </div>

                            {/* Points */}
                            <div className="relative flex items-center gap-1 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                                <Trophy className="w-4 h-4" aria-hidden="true" />
                                <span className="text-sm font-bold">{quiz.points} points</span>
                            </div>
                        </div>

                        <CardContent className="p-6">

                            {/* Badges */}
                            <div className="flex flex-wrap gap-2 mb-4">
                                <Badge variant="secondary" className="text-xs font-semibold">
                                    {quiz.category}
                                </Badge>
                                <Badge
                                    className={`text-xs font-semibold border ${difficultyColor[quiz.difficulty]}`}
                                    variant="outline"
                                >
                                    {quiz.difficulty}
                                </Badge>
                            </div>

                            {/* Titre */}
                            <h3 className="text-xl font-bold mb-3 text-gray-900 line-clamp-2 leading-tight">
                                {quiz.title}
                            </h3>

                            {/* Description */}
                            <p className="text-gray-600 text-sm mb-4 line-clamp-3 leading-relaxed">
                                {quiz.description}
                            </p>

                            {/* Métadonnées */}
                            <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                                <div className="flex items-center gap-1">
                                    <HelpCircle className="w-4 h-4" aria-hidden="true" />
                                    <span>{quiz.questionsCount} questions</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <Clock className="w-4 h-4" aria-hidden="true" />
                                    <span>{quiz.duration}</span>
                                </div>
                            </div>
                        </CardContent>

                        <CardFooter className="p-6 pt-0">
                            <Button
                                asChild
                                className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 font-semibold"
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
            })}
        </div>
    );
}
