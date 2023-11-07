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

    function handleRedirect() {
        const left = document.getElementById("left")
        left.classList.remove("leftintro")
        left.classList.add("leftoutro")
        const bottom = document.getElementById("bottom")
        bottom.classList.remove("bottomintro")
        bottom.classList.add("bottomoutro")
        setTimeout(() => {
            window.location.replace(`/post/${post.id}`)
        }, 3000);
    }
    
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
        <a onClick={handleRedirect}>
            <h1>{post.title}</h1>
        </a>
        <textarea unselectable="true" readOnly className="textarea">{post.content}</textarea>
        </motion.div>
    );
};

export default Post