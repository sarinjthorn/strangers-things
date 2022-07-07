import React from "react";
import { useState, useEffect } from "react";
import { fetchPosts } from "api/posts";
import PostCard from "./SinglePost";

export default function Home({ token, setTargetPost }) {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const getPosts = async () => {
      const result = await fetchPosts(token);
      setPosts(result);
    };
    getPosts();
  }, [token]);
  return (
    <div>
      {posts.map((post, index) => {
        return (
          <PostCard
            key={`Key: ${index}`}
            post={post}
            token={token}
            setTargetPost={setTargetPost}
          />
        );
      })}
    </div>
  );
}
