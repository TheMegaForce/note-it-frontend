import { Link } from "react-router-dom";

//destructure the post from props
const Post = ({ post }) => {
  //////////////////
  // Style Objects
  //////////////////
  const div = {
    textAlign: "center",
    background: "#043432",
    margin: "10px auto",
    padding: "1em",
  };
  return (
    <div style={div} className="col-span-2 rounded-[12px] text-[#E7FDFC]">
      <Link to={`/post/${post.id}`}>
        <h1>{post.title}</h1>
      </Link>
      <textarea readOnly className="textarea">{post.content}</textarea>
    </div>
  );
};

export default Post