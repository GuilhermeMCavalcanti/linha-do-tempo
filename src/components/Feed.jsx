import posts from "../data/posts";
import Post from "../components/Post";

function Feed() {
  return (
    <div className="feed">
      {posts.map(post => (
        <Post key={post.id} data={post} />
      ))}
    </div>
  );
}

export default Feed;