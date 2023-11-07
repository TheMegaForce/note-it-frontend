import { Link } from "react-router-dom";
import { motion } from "framer-motion";

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
    <motion.div
    style={div}
    drag
    dragConstraints={{
        top: -20,
        right: 20,
        bottom: 20,
        left: -20,
    }}
    dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
    dragElastic={0.5}
    whileTap={{ cursor: "grabbing" }} className="col-span-2 rounded-[12px] text-[#E7FDFC]">
      <Link to={`/post/${post.id}`}>
        <h1>{post.title}</h1>
      </Link>
      <textarea unselectable="true" readOnly className="textarea">{post.content}</textarea>
    </motion.div>
  );
};

export default Post