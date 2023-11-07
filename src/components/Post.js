import { Link } from "react-router-dom";
import { animate, motion, useMotionValue, useTransform } from "framer-motion";
import { useState } from "react";

//destructure the post from props
const Post = ({ post }) => {

    const x = useMotionValue(200);
    const y = useMotionValue(200);

    const rotateX = useTransform(y, [0, 400], [30, -30]);
    const rotateY = useTransform(x, [0, 1200], [-30, 30]);

    function handleMouse(event) {
        const rect = event.currentTarget.getBoundingClientRect();

        x.set(event.clientX - rect.left);
        y.set(event.clientY - rect.top);
    }

    const div = {
        textAlign: "center",
        background: "#043432",
        margin: "10px auto",
        padding: "1em",
        rotateX: rotateX,
        rotateY: rotateY,
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
            onMouseMove={handleMouse}
            onMouseLeave={() => {
                animate(x, 200);
                animate(y, 200);
            }}>
            <motion.div
                style={div}
                drag
                dragConstraints={{
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0,
                }}
                dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
                dragElastic={0.5}
                whileTap={{ cursor: "grabbing" }}
                className="col-span-2 rounded-[12px] text-[#E7FDFC]">
                    <a onClick={handleRedirect}>
                        <motion.h1 
                            initial={{ opacity: 0.6 }}
                            whileHover={{ scale: [null, 1.5, 1.4] }}
                            transition={{ duration: 0.3 }}
                            whileTap={{ scale: 0.9 }}
                            whileInView={{ opacity: 1 }}>
                                {post.title}
                        </motion.h1>
                    </a>
                    <textarea unselectable="true" readOnly className="textarea">{post.content}</textarea>
            </motion.div>
        </motion.div>
    );
};

export default Post