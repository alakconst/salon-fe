import blogData, { generateSlug } from '@/app/constants/blogData'; // Update the path accordingly
import ReactMarkdown from 'react-markdown';


export default function Page({ params }: { params: { slug: string } }) {

    const blog = blogData.find((post) => generateSlug(post.title) === params.slug);
    if (!blog) {
        return <div className='m-auto flex items-center justify-center h-screen w-full '>User not found</div>;
    }
    return (

        <div className="p-4">
            <div className="bg-white rounded-lg m-auto shadow-md p-4 max-w-4xl">

                <div className='flex flex-col gap-2 items-center'>

                    <div className="text-gray-600 mb-2 text-left text-[12px] lg:text-sm prose ">
                        <h1 >{blog.title}</h1>
                        <div className='prose prose-h1:text-2xl'>
                            <ReactMarkdown>{blog.content}</ReactMarkdown>
                        </div>
                    </div>


                </div>
            </div>
        </div>


    )
}