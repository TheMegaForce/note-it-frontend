import Post from "../components/Post";
import {useLoaderData} from "react-router-dom"
import { motion } from "framer-motion";

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
            <div id="left" style={div} className="leftintro flex-auto w-30 border-none rounded-[12px] m-5">
                <h1 className="
                font-medium
                text-5xl
                bg-gradient-to-r from-[#5F1114] to-[#F31B26]
                text-transparent
                bg-clip-text
                p-3 m-3
                ">Note-It</h1>
                <div className="bottombutton">
                    <a onClick={handleRedirect}>
                        <motion.button
                            initial={{ opacity: 0.6 }}
                            whileHover={{
                                scale: 1.2,
                                transition: { duration: 1 },
                            }}
                            whileTap={{ scale: 0.9 }}
                            whileInView={{ opacity: 1 }}
                            className="bg-[#5F1114] text-[#E7FDFC] border-none p-3 m-10">
                                Create New Note
                        </motion.button>
                    </a>
                </div>
            </div>
            <div id="bottom" className="bottomintro overflow-auto m-5 w-auto">
                {notes.map((post) => <Post post={post} key={post.id} />)}
            </div>
        </div>
    </>;
};

export default Index;