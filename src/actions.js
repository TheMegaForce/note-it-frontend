import { redirect } from "react-router-dom"

// YOUR DEPLOYED API BASE URL
const URL = "https://note-it-backend-no-user.onrender.com"

//createAction => create a Note from form submissions to `/create`
export const createAction = async ({request}) => {
    // get form data
    const formData = await request.formData()

    // construct request body
    const newNote = {
        title: formData.get("title"),
        content: formData.get("content")
    }

    // send request to backend
    await fetch(URL + "/notes/", {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newNote)
    })

    // redirect back to index page
    return redirect("/")
}

//updateAction => update a Note from form submissions to `/update/:id`
export const updateAction = async ({request, params}) => {
    // get form data
    const formData = await request.formData()

    // get Note id
    const id = params.id

    // construct request body
    const updatedNote = {
        title: formData.get("title"),
        content: formData.get("content")
    }

    // send request to backend
    await fetch(URL + `/notes/${id}/`, {
        method: "put",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedNote)
    })

    // redirect back to show page page
    return redirect(`/post/${id}`)
}

//deleteAction => delete a Note from form submissions to `/delete/:id`
export const deleteAction = async ({params}) => {
    // get Note id
    const id = params.id

    // send request to backend
    await fetch(URL + `/notes/${id}/`, {
        method: "delete",
    })

    // redirect back to show page page
    return redirect("/")
}