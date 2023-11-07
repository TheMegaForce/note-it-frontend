import { Link, useLoaderData, Form } from "react-router-dom";

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
    
    const div = {
        textAlign: "center",
        border: "3px solid green",
        width: "80%",
        margin: "30px auto",
    };

    return (
        <div style={div} id="right" className="rightintro">
        <div style={{ textAlign: "center" }}>
            <h2>Update {post.title}</h2>
            <Form action={`/update/${post.id}`} method="post">
            <input
                type="text"
                name="title"
                placeholder="write title here"
                defaultValue={post.title}
            />
            <textarea
                type="text"
                name="content"
                placeholder="write content here"
                defaultValue={post.content}
            />
            <a onClick={handleUpdateRedirect}><button>Update Note</button></a>
            </Form>
            <Form action={`/delete/${post.id}`} method="post">
                <a onClick={handleDeleteRedirect}><button>Delete Note</button></a>
            </Form>
        </div>
            <a onClick={handleBackRedirect}><button>Go Back</button></a>
        </div>
    );
};

export default Show;