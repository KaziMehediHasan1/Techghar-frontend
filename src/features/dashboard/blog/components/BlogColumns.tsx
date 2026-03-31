import { RDataTableColumnHeader } from '@/components/tables/RDataTableColumnHeader';
import { Button } from '@/components/ui/button';
import type { IBlogUpdateData } from '@/features/dashboard/blog/blog.types';
import type { ColumnDef } from '@tanstack/react-table';
import { Edit, Loader2, Trash2 } from 'lucide-react';

export const BlogColumns = (
  handleDelete: (id: string) => void,
  handleUpdate: (id: string, blog: IBlogUpdateData) => void
): ColumnDef<IBlogUpdateData>[] => [
  {
    accessorKey: 'image',
    header: 'Image',
    cell: ({ row }) => {
      const images = row.getValue('image') as string[];
      return (
        <div className="w-12 h-12 rounded-lg overflow-hidden border">
          <img
            src={images?.[0] || '/placeholder-image.png'}
            alt="blog"
            className="w-full h-full object-cover"
          />
        </div>
      );
    },
  },
  {
    accessorKey: 'title',
    header: ({ column }) => (
      <RDataTableColumnHeader column={column} title="Blog Title" />
    ),
    cell: ({ row }) => (
      <div className="font-medium max-w-75 truncate">
        {row.getValue('title')}
      </div>
    ),
  },
  {
    accessorKey: 'category',
    header: () => <div className="text-left">Category</div>,
  },
  {
    accessorKey: 'alt',
    header: () => <div className="text-left">SEO Alt Text</div>,
  },
  {
    id: 'edit',
    header: 'Edit',
    cell: ({ row, table }) => {
      const blog = row.original;
      const meta = table.options.meta;
      console.log('meta function check:-', meta);
      return (
        <Button
          variant="ghost"
          size="sm"
          onClick={() => handleUpdate(blog?._id || '', blog)}
          className="text-blue-600 hover:text-blue-700 hover:bg-blue-50"
        >
          <Edit className="w-4 h-4" />
        </Button>
      );
    },
  },
  {
    id: 'delete',
    header: 'Delete',
    cell: ({ row, table }) => {
      const blog = row.original;
      const meta = table.options.meta as {
        isDeletePending: boolean;
        loadingId: string | null;
      };
      const isDeleting = meta?.isDeletePending && meta?.loadingId === blog._id;

      return (
        <Button
          variant="ghost"
          size="sm"
          disabled={isDeleting}
          onClick={() => handleDelete(blog?._id || '')}
          className="text-red-600"
        >
          {isDeleting ? (
            <Loader2 className="w-4 h-4 animate-spin" />
          ) : (
            <Trash2 className="w-4 h-4" />
          )}
        </Button>
      );
    },
  },
];
