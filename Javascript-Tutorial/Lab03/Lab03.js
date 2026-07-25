/*
Yêu cầu:
Hãy tạo một mảng products chứa danh sách 5 sản phẩm, mỗi sản phẩm là một object
có các thuộc tính:

- name (tên sản phẩm)
- price (giá sản phẩm)
- inStock (true/false – còn hàng hay không)

Ví dụ:
{
name: "T-shirt",
price: 200,
inStock: true
}
Hãy thực hiện:
1. In ra tên của sản phẩm đầu tiên.
2. Thay đổi giá sản phẩm thứ hai thành 150 và in ra danh sách tất cả sản phẩm
3. Thêm một sản phẩm mới vào cuối mảng và in ra danh sách tất cả sản phẩm
4. Xoá sản phẩm cuối cùng ra khỏi danh sách và in ra danh sách tất cả sản phẩm
5. Dùng forEach( ) để in ra tất cả tên sản phẩm.
6. Dùng map( ) để tạo mảng mới chỉ chứa giá sản phẩm.
7. Dùng filter( ) để lấy các sản phẩm còn hàng (inStock = true).
8. Dùng for...in để duyệt qua thuộc tính của sản phẩm đầu tiên.

*/

const pr1 = {
    name: "áo thun",
    price: 200,
    inStock: true
}

const pr2 = {
    name: "quần jean",
    price: 300,
    inStock: false
}

const pr3 = {
    name: "giày thể thao",
    price: 500,
    inStock: true
}
const pr4 = {
    name: "mũ lưỡi trai",
    price: 100,
    inStock: true
}

const pr5 = {
    name: "túi xách",
    price: 400,
    inStock: false
}   

const products = [pr1, pr2, pr3, pr4, pr5];
console.log("original products: ", products);

// 1. In ra tên của sản phẩm đầu tiên.
const firstProduct = products[0];
console.log("Sản phẩm đầu tiên có tên là: ", firstProduct.name);

// 2. Thay đổi giá sản phẩm thứ hai thành 150 và in ra danh sách tất cả sản phẩm
const secondProduct = [pr1, {
    name: pr2.name,
    price: 150,
    inStock: pr2.inStock
}
, pr3, pr4, pr5];
console.log("Danh sách sản phẩm sau khi thay đổi giá sản phẩm thứ hai: ", secondProduct);

// 3. Thêm một sản phẩm mới vào cuối mảng và in ra danh sách tất cả sản phẩm

products.push({
    name: "đồng hồ",
    price: 600,
    inStock: true
});
console.log("Danh sách sản phẩm sau khi thêm sản phẩm mới: ", products);

// 4. Xoá sản phẩm cuối cùng ra khỏi danh sách và in ra danh sách tất cả sản phẩm
products.pop();
console.log("Danh sách sản phẩm sau khi xoá sản phẩm cuối cùng: ", products);

// 5. Dùng forEach( ) để in ra tất cả tên sản phẩm.
console.log("Tên tất cả sản phẩm: ");
products.forEach((product) => {
    console.log("Product name:",product.name);
});

// 6. Dùng map( ) để tạo mảng mới chỉ chứa giá sản phẩm.
const priceList = products.map((item, index) => {
    return item.price;
})
console.log("Mảng mới chỉ chứa giá sản phẩm: ", priceList);

// 7. Dùng filter( ) để lấy các sản phẩm còn hàng (inStock = true).
const inStockProducts = products.filter((item) => {
    return item.inStock === true;
})
console.log("Các sản phẩm còn hàng: ", inStockProducts);

// 8. Dùng for...in để duyệt qua thuộc tính của sản phẩm đầu tiên.
console.log("Thuộc tính của sản phẩm đầu tiên: ");
for (let key in firstProduct) {
    console.log(key + ": " + firstProduct[key]);
}