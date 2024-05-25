// sessionStorage.setItem("pooja", "1297804")
// sessionStorage.setItem("rajkumar", "156890")
// sessionStorage.setItem("name", "kalu")
// console.log(sessionStorage.getItem("name"))

// sessionStorage.removeItem("name")
// sessionStorage.clear();

window.onstorage = (e) => {
    alert("changed")
    console.log(e);
}
