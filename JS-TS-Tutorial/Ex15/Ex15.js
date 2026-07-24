

//promise lấy data
fetch("http://localhost:8000/users")
  .then(res => res.json())
  .then(data => console.log("Fetch promise:",data));

//async await lấy data
const fetchData = async() => {
    const res = await fetch("http://localhost:8000/users");
    const data = await res.json();
    console.log("Fetch async/await:", data);
}

fetchData();