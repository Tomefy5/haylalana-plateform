import { BlogPost } from '@/lib/mock-data-blog-contact';
import { BlogCard } from './blog-card';

interface BlogGridProps {
    posts: BlogPost[];
    featured?: boolean;
}

export function BlogGrid({ posts, featured = false }: BlogGridProps) {

    if (posts.length === 0) {
        return (
            <div className="text-center py-16">
                <p className="text-haylalana-text-tertiary">Aucun article trouvé dans cette catégorie</p>
            </div>
        );
    }

    return (
        <div className={`grid gap-6 ${featured ? 'md:grid-cols-2' : 'md:grid-cols-2 lg:grid-cols-3'}`}>
            {posts.map((post) => (
                <BlogCard key={post.id} post={post} />
            ))}
        </div>
    );
}
