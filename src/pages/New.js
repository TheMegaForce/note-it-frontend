import { Form } from "react-router-dom";

const Index = (props) => {
    // For each post in the array render a Post component
    return <>
    <div className="">
        <h2>Note-It</h2>
        <Form action="/create" method="post">
            <input type="text" name="title" placeholder="write title here"/>
            <textarea className="" type="text" name="content" placeholder="write content here"/>
            <button>Create New Note</button>
        </Form>
    </div>
    </>;
};

export default Index;