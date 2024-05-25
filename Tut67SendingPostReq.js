const createTodo = async(todo) => {
    let options = {
        method: 'Post',
        headers: { 'Content-type': 'application/JSON' },
        body: JSON.stringify(todo),
    } 
    let p = await fetch("https://jsonplaceholder.typicode.com/posts", options);
    let responce = await p.json();
    return responce;
}

const getTodo = async (id) => {
    let responce = await fetch("https://jsonplaceholder.typicode.com/posts/" + id)
    let r = await responce.json();
    return r;
}
const mainFun = async() => {
    let todo = {
        tittle: "devendra",
        body: "singh",
        userID: "12018568",
    }
    let todor = await createTodo(todo);
    console.log(todor)
    console.log(await getTodo(5))
}
mainFun();