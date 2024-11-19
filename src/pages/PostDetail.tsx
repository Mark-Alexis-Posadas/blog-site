import axios from "axios";
import { FC, useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export const PostDetail: FC = () => {
  const { id } = useParams();
  const [post, setPost] = useState([]);

  const fetchPost = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/posts/get-single-post/${id}`
      );
      setPost(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    fetchPost();
  }, [id]);

  if (!post) {
    return <div>Loading...</div>;
  }
  return (
    <div className="container mx-auto px-4 py-8">
      <article className="bg-white shadow-md rounded-lg overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h1 className="text-2xl font-bold mb-2">{post.title}</h1>
          <p className="text-gray-600 mb-4">{post.content}</p>
          <p className="text-gray-600">Category: {post.categories}</p>
        </div>
      </article>
    </div>
  );
};
