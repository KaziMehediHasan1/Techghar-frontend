import { showDeleteConfirmation } from '@/components/ConfirmationToast';
import RDataTable from '@/components/tables/RDataTable';
import type {
  IBlog,
  IBlogUpdateData,
  TBlogApiResponse,
} from '@/features/dashboard/blog/blog.types';
import { BlogColumns } from '@/features/dashboard/blog/components/BlogColumns';
import { UpdateBlogsModal } from '@/features/dashboard/blog/components/UpdateBlogsModal';
import useDebounce from '@/hooks/useDebounce';
import useDelete from '@/hooks/useDelete';
import useFetch from '@/hooks/useFetch';
import useUpdate from '@/hooks/useUpdate';
import { useState } from 'react';
import { toast } from 'react-toastify';

const BlogDashboardPage = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedBlog, setSelectedBlog] = useState<IBlogUpdateData>({
    _id: '',
    title: '',
    category: '',
    alt: '',
    description: '',
    image: [],
  });

  const [globalFilter, setGlobalFilter] = useState('');
  const [pagination, setPagination] = useState({ pageIndex: 0, pageSize: 10 });
  const debounce = useDebounce(globalFilter, 500);

  const {
    mutateAsync: deleteMutate,
    isPending: isDeletePending,
    isError: isDeleteError,
  } = useDelete('/blog', '/blog');
  const {
    mutateAsync: updateMutate,
    isPending: isUpdatePending,
    isError: isUpdateError,
  } = useUpdate('/blog', '/blog');

  const queryUrl = `/blog?search=${debounce}&page=${pagination.pageIndex + 1}&limit=${pagination.pageSize}`;
  const { data, isLoading, error } =
    useFetch<TBlogApiResponse<IBlog>>(queryUrl);
  console.log('blog data:-', data);
  if (isLoading)
    return (
      <div className="p-10 text-center animate-pulse">Loading Blogs...</div>
    );
  if (error)
    return (
      <div className="p-10 text-red-500 text-center">
        Failed to fetch blogs.
      </div>
    );

  const totalPageCount = Math.ceil(
    (data?.data?.meta?.totalPage || 0) / pagination.pageSize
  );

  const handleDelete = async (id: string) => {
    showDeleteConfirmation({
      message: 'Are you sure you want to delete this blog?',
      onConfirm: async () => {
        await deleteMutate(id);
        toast.success('Blog deleted successfully');
      },
    });
    if (isDeleteError) {
      toast.error('Failed to delete the blog. Please try again.');
    }
  };

  const handleUpdate = (id: string, updatedData: IBlogUpdateData) => {
    setIsModalOpen(true);
    setSelectedBlog({ ...updatedData, id } as IBlogUpdateData);
    if (isUpdateError) {
      toast.error('Failed to update the blog. Please try again.');
    }
  };

  const onUpdateSubmit = async (
    id: string,
    updatedData: Partial<IBlogUpdateData>
  ) => {
    await updateMutate({ id, data: updatedData });
    setIsModalOpen(false);
    toast.success('Blog updated successfully');
  };

  const columns = BlogColumns(handleDelete, handleUpdate);

  return (
    <div className="text-black space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold tracking-tight">Blog Management</h2>
      </div>

      <UpdateBlogsModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        blogData={selectedBlog}
        onUpdate={onUpdateSubmit}
        isLoading={isUpdatePending}
      />

      <RDataTable
        isDeletePending={isDeletePending}
        isUpdatePending={isUpdatePending}
        handleDelete={handleDelete}
        handleUpdate={handleUpdate}
        columns={columns}
        data={data?.data?.result || []}
        totalPage={totalPageCount}
        setPagination={setPagination}
        pagination={pagination}
        globalFilter={globalFilter}
        setGlobalFilter={setGlobalFilter}
      />
    </div>
  );
};

export default BlogDashboardPage;
