const myfun = () => {
    try {
        console.log(ram)
        // console.log("here we will learn how finally works")
        return;
    }
    catch (error) {
        console.log("here error hai " + error);
        console.log(p)
    }
    finally {

        console.log("This is finally block ")
    }  
}
myfun();
