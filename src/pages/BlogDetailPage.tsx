import Wrapper from '@/components/layout/Wrapper';
import useFreeFetch from '@/hooks/useFreeFetch';
import { useParams, useNavigate } from 'react-router-dom';
import { Calendar, Tag, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import BlogDetailSkeleton from '@/components/BlogDetailSkeleton';

type TBlogData = {
  _id: string;
  image: string[]; 
  title: string;
  description: string;
  category: string;
  createdAt: string;
};

type TApiBlog = {
  data: TBlogData;
};

const BlogDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data, isLoading } = useFreeFetch<TApiBlog>(`/blog/${id}`);
  const blog = data?.data;

  if (isLoading) {
    return <BlogDetailSkeleton />;
  }

  if (!blog) {
    return (
      <Wrapper>
        <div className="text-center py-20">
          <h2 className="text-2xl font-bold">Blog not found!</h2>
          <Button onClick={() => navigate('/blog')} className="mt-4">
            Back to Blogs
          </Button>
        </div>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <div className="max-w-4xl mx-auto py-6 sm:py-10 px-4">
        {/* BACK BUTTON */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-gray-600 hover:text-brand-primary transition-colors mb-6 group"
        >
          <ArrowLeft
            size={20}
            className="group-hover:-translate-x-1 transition-transform"
          />
          <span className="font-medium">Back</span>
        </button>

        {/* HERO SECTION: Category & Title */}
        <header className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wide">
              {blog.category}
            </span>
            <div className="flex items-center gap-1 text-gray-400 text-xs sm:text-sm">
              <Calendar size={14} />
              <span>{new Date(blog.createdAt).toLocaleDateString()}</span>
            </div>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            {blog.title}
          </h1>
        </header>

        {/* FEATURED IMAGE */}
        <div className="relative aspect-video mb-10 rounded-xl overflow-hidden shadow-lg border border-gray-100">
          <img
            src={
              blog.image?.[0] || 'https://placehold.co/1200x600?text=Blog+Image'
            }
            alt={blog.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* ARTICLE CONTENT */}
        <article className="prose prose-sm sm:prose-base lg:prose-lg max-w-none text-gray-700 leading-relaxed">
          <div className="whitespace-pre-wrap">{blog.description}</div>
        </article>

        {/* FOOTER: Tags or Categories */}
        <footer className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2 text-gray-500 italic">
              <Tag size={16} />
              <span>Category: {blog.category}</span>
            </div>
          </div>
        </footer>
      </div>
    </Wrapper>
  );
};

export default BlogDetailPage;
