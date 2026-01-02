import { mockQuizzes } from '@/lib/mock-data-youth';
import { QuizCard } from './quiz-card';

export function QuizGrid() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockQuizzes.map((quiz) => (
                <QuizCard key={quiz.id} quiz={quiz} />
            ))}
        </div>
    );
}
