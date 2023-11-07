import { Link, useLoaderData, Form } from "react-router-dom";

// destructuring the props needed to get our post, including router prop match
const Show = () => {
  const post = useLoaderData();

  ////////////////////
  // Styles
  ///////////////////
  const div = {
    textAlign: "center",
    border: "3px solid green",
    width: "80%",
    margin: "30px auto",
  };

  return (
    <div style={div}>
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
          <button>Update Note</button>
        </Form>
        <Form action={`/delete/${post.id}`} method="post">
          <button>Delete Note</button>
        </Form>
      </div>
      <Link to="/">
        <button>Go Back</button>
      </Link>
    </div>
  );
};

export default Show;