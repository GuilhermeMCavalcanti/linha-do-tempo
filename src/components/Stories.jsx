import posts from "../data/posts";

function Stories() {
  return (
    <div className="Stories">
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <img className="Bubble-stories" src={post.avatar} alt="" />
            <p>{post.username}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Stories;