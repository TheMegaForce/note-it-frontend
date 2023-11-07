import { Form } from "react-router-dom";
import { motion } from "framer-motion";

const Index = (props) => {

    function handleRedirect() {
        const top = document.getElementById("top")
        top.classList.remove("topintro")
        top.classList.add("topoutro")
        setTimeout(() => {
            window.location.replace('/')
        }, 3500);
    }

    // For each post in the array render a Post component
    return <>
    <div className="min-h-[100vh] bg-[#021817]">
        <div id="top" className="topintro">
            <h2 className="
                font-medium
                text-5xl
                bg-gradient-to-r from-[#5F1114] to-[#F31B26]
                text-transparent
                bg-clip-text">
                    Note-It
            </h2>
            <Form action="/create" method="post">
                <input type="text" name="title" placeholder="write title here"/>
                <textarea className="min-h-[50vh] max-h-auto"
                type="text" name="content" placeholder="write content here"/>
                <a onClick={handleRedirect}>
                    <motion.button
                            initial={{ opacity: 0.6 }}
                            whileHover={{
                                scale: 1.2,
                                transition: { duration: 1 },
                            }}
                            whileTap={{ scale: 0.9 }}
                            whileInView={{ opacity: 1 }} className="bg-[#5F1114] text-[#E7FDFC] border-none p-3 m-10">
                        Create New Note
                    </motion.button>
                </a>
            </Form>
            <a onClick={handleRedirect}>
                <motion.button
                            initial={{ opacity: 0.6 }}
                            whileHover={{
                                scale: 1.2,
                                transition: { duration: 1 },
                            }}
                            whileTap={{ scale: 0.9 }}
                            whileInView={{ opacity: 1 }} className="bg-[#5F1114] text-[#E7FDFC] border-none p-3 m-10">
                    Back Home
                </motion.button>
            </a>
        </div>
    </div>
    </>;
};

export default Index;