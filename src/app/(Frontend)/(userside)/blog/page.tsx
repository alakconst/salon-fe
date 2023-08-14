// BlogPage.tsx

import React from 'react';
import Link from 'next/link';
import blogData, {generateSlug} from '@/app/constants/blogData'; // Update the path accordingly
import TruncateText from '@/app/components/CutText';








const BlogPage: React.FC = ( ) => {
    

  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-4">Blogs</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {blogData.map((blog) => (
          <div key={blog.id} className="bg-white rounded-lg shadow-md p-4">
            <img
              src={blog.imageUrl}
              alt={blog.title}
              className="w-full h-48 object-cover mb-2 rounded"
            />
            <h2 className="text-lg font-semibold mb-1">{blog.title}</h2>
                <p className="text-gray-600 mb-2">
                   <TruncateText text={blog.content} maxLength={20} />
                </p>
            <div className='my-4'>
                      <Link href={`/blog/${generateSlug(blog.title)}`}
              className="text-neutral-200 rounded bg-neutral-900 p-2  hover:underline">Read more
            </Link>
          </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;