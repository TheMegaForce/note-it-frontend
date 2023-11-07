import { Link, useLoaderData, Form } from "react-router-dom";
import { motion } from "framer-motion";

// destructuring the props needed to get our post, including router prop match
const Show = () => {
    const post = useLoaderData();

    function handleUpdateRedirect() {
        const right = document.getElementById("right")
        right.classList.remove("rightintro")
        right.classList.add("rightoutro")
        setTimeout(() => {
            window.location.replace('/')
        }, 3000);
    }

    function handleBackRedirect() {
        const right = document.getElementById("right")
        right.classList.remove("rightintro")
        right.classList.add("rightoutro")
        setTimeout(() => {
            window.location.replace('/')
        }, 3000);
    }

    function handleDeleteRedirect() {
        window.location.replace('/')
    }

    return (
        <div className="min-h-[100vh] bg-[#021817]">
            <div id="right" className="rightintro">
                <div style={{ textAlign: "center" }}>
                    <h2 className="
                        font-medium
                        text-5xl
                        bg-[#F31B26]
                        text-transparent
                        bg-clip-text p-5">
                            "{post.title}" Notes
                    </h2>
                    <Form className="m-10" action={`/update/${post.id}`} method="post">
                        <input
                            type="text"
                            name="title"
                            placeholder="write title here"
                            defaultValue={post.title}
                        />
                        <textarea
                            className="min-h-[50vh] max-h-auto p-3 border-[#E7FDFC] bg-[#043432] text-[#E7FDFC]"
                            type="text"
                            name="content"
                            placeholder="write content here"
                            defaultValue={post.content}
                        />
                        <a onClick={handleUpdateRedirect}>
                            <motion.button
                                initial={{ opacity: 0.6 }}
                                whileHover={{ scale: [null, 1.5, 1.4] }}
                                transition={{ duration: 0.3 }}
                                whileTap={{ scale: 0.9 }}
                                whileInView={{ opacity: 1 }}
                                className="bg-[#5F1114] text-[#E7FDFC] border-none p-3 mt-5">
                                    Update "{post.title}"
                            </motion.button>
                        </a>
                    </Form>
                    <Form action={`/delete/${post.id}`} method="post">
                        <a onClick={handleDeleteRedirect}>
                        <motion.button
                                initial={{ opacity: 0.6 }}
                                whileHover={{ scale: [null, 1.5, 1.4], backgroundColor: "red" }}
                                transition={{ duration: 0.3 }}
                                whileTap={{ scale: 0.9 }}
                                whileInView={{ opacity: 1, backgroundColor: "#5F1114" }}
                                className="bg-[#5F1114] text-[#E7FDFC] border-none p-3 mt-5">
                                    DELETE "{post.title}"
                            </motion.button>
                        </a>
                    </Form>
                </div>
                <a onClick={handleBackRedirect}>
                    <motion.button
                        initial={{ opacity: 0.6 }}
                        whileHover={{ scale: [null, 1.5, 1.4] }}
                        transition={{ duration: 0.3 }}
                        whileTap={{ scale: 0.9 }}
                        whileInView={{ opacity: 1 }}
                        className="bg-[#5F1114] text-[#E7FDFC] border-none p-3 mt-5">
                        Go Back
                    </motion.button>
                </a>
            </div>
        </div>
    );
};

export default Show;