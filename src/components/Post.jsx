import { useState } from "react";

function Post({ data }) {
  const [liked, setLiked] = useState(false);

  function toggleLike() {
    setLiked(!liked);
  }

  return (
    <div className="Post">
      <div className="Post-header">
        <img src={data.avatar} alt="" />
        <p>{data.username}</p>
      </div>

      <img className="Post-image" src={data.image} alt="" />

      <div className="Post-footer">
        <div className="Post-actions">
          <span
            onClick={toggleLike}
            className="like-btn"
            style={{ color: liked ? "red" : "black", cursor: "pointer" }}
          >
            {liked ? "❤️" : "🤍"}
          </span>
          <span>💬</span>
          <span>📤</span>
        </div>
        <p><strong>{data.username}</strong> {data.description}</p>
      </div>
    </div>
  );
}

export default Post;