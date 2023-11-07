// YOUR DEPLOYED API BASE URL
const URL = "https://note-it-backend-no-user.onrender.com"

//indexLoader => get all todos for index route
export const indexLoader = async () => {
    const response = await fetch(URL + "/notes/")
    const notes = await response.json()
    return notes
}

//showLoader => get a single todo for Show route
export const showLoader = async ({params}) => {
    const response = await fetch(URL + `/notes/${params.id}/`)
    const note = await response.json()
    return note
}