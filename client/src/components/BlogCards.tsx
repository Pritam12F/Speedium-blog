import { Link } from "react-router-dom";

export interface cardProps {
  author: {
    name: string;
  };
  authorId: string;
  content: string;
  id: string;
  published: boolean;
  title: string;
}
export const Card = ({ post }: { post: cardProps }) => {
  const posts: cardProps = post;
  return (
    <Link to={`/blogs/${posts.id}`} className="min-w-full my-4">
      <div className="border-2 shadow-lg rounded-md p-5 min-w-full cursor-pointer">
        <div className="flex">
          <div className="bg-red-200 w-7 h-7 rounded-full flex justify-center items-center text-xs mr-3 font-semibold">
            {posts.author.name[0].toUpperCase()}
          </div>
          <div className="font-bold">{posts.title}</div>
        </div>
        <div className="mt-4">
          {posts.content.length > 21
            ? posts.content.substring(0, 20) + "...."
            : posts.content}
        </div>
        <div className="mt-7 flex">
          <div className="mr-4 text-slate-400">Posted by</div>
          {posts.author.name}
        </div>
      </div>
    </Link>
  );
};
