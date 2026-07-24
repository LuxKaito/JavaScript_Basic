

const greeting = (name, callback) => {
    console.log("Xin chào:" ,name);
    callback();
}

const hello  = () => {
    console.log("Hello");
}   

greeting("Hikan", hello);