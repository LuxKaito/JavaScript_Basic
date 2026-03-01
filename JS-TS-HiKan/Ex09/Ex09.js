
const scores = [10 , 4, 8, 6];

//key: value
const sv1 = {
    score: 10,
    name: "Khang",
    address: {
        city: "HCM",
        district: "Binh Thanh"
    }
}
const sv2 = {
    score: 4,
    name: "Khoa",
    address: {
        city: "HCM",
        district: "Binh Thanh"
    }   
}

const sinhvien = [sv1, sv2];
console.log("Scores:", scores);
console.log(sinhvien);

// get data
console.log("Student before:", sinhvien[0].name);
// set data
sinhvien[0].phone = "0123456789";
console.log("Student after setting phone:", sinhvien);

// delete data
// delete sinhvien[0].name;
// console.log("Student after deleting phone:", sinhvien);

const sv3 = {
    score: 8,
    name: "Hieu",
    address: {
        city: "HCM",
        district: "Binh Thanh"
    }
}

const sinhvien2 = [sv1, sv2, sv3];
console.log(">>> check sinhvien2:", sinhvien2);

// sinhvien2.forEach((item, index) => {
//     console.log(">>> index", index, "item:", item.name);
// });

const person = {
    name: "Khang",
    age: 20,
    city: "HCM"
}
for (let key in person) {
    console.log(">>> key:", key, "value:", person[key]);
}

for (let value of Object.values(person)) {
    console.log(">>> value:", value);
}

// entries: trả về một mảng gồm các cặp [key, value]
for (let [key, value] of Object.entries(person)) {
    console.log(">>> key:", key, "value:", value);
}