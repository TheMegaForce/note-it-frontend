import Post from "../components/Post";
import {useLoaderData} from "react-router-dom"
import {
    MotionValue,
    motion,
    useMotionValue,
    useSpring,
    useTransform,
    Reorder
} from "framer-motion";
import { useRef } from "react";

const Index = (props) => {
    const notes = useLoaderData()

    const div = {
        textAlign: "center",
        background: "#043432",
    };

    function handleRedirect() {
        const left = document.getElementById("left")
        left.classList.remove("leftintro")
        left.classList.add("leftoutro")
        const bottom = document.getElementById("bottom")
        bottom.classList.remove("bottomintro")
        bottom.classList.add("bottomoutro")
        setTimeout(() => {
            window.location.replace('/new')
        }, 3500);
    }

    return <>
        <div className="
        grid grid-cols-[200px_auto] grid-rows-[100vh] bg-[#021817]
        ">
            <motion.div
                style={div}
                id="left" className="leftintro flex-auto w-30 border-none rounded-[12px] m-5">
                    <h1 className="
                        font-bold
                        text-5xl
                        bg-[#F31B26]
                        text-transparent
                        bg-clip-text
                        p-3 m-3">
                            Note-It
                    </h1>
                    <h1 className="welcome text-[#E7FDFC] font-medium">
                        Welcome!
                    </h1>
                    <div className="bottombutton">
                        <a onClick={handleRedirect}>
                            <motion.button
                                initial={{ opacity: 0.6 }}
                                whileHover={{ scale: [null, 1.5, 1.4] }}
                                transition={{ duration: 0.3 }}
                                whileTap={{ scale: 0.9 }}
                                whileInView={{ opacity: 1 }}
                                className="bg-[#5F1114] text-[#E7FDFC] border-none p-3 m-10">
                                    Create New Note
                            </motion.button>
                        </a>
                    </div>
            </motion.div>
            <div id="bottom" className="bottomintro p-5 overflow-auto m-5 w-auto">
                {notes.map((post) => <Post post={post} key={post.id} />)}
            </div>
        </div>
    </>;
};

export default Index;