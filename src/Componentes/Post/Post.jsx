import "./Post.css";

export const Post = ({post}) => {
  return (
    <div className="post">
      <img
        className="PostImg"
        src={post.img}
        alt=""
      />
      <div className="postInfo">
        <div className="postTitle">{post.title}</div>
        <div className="postDesc">
          {post.description}
        </div>
        <div className="postDate">{post.time} Minute age</div>
      </div>
    </div>
  );
};
