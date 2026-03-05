
const doSomething = () => {
  const a = 10 , b = 0;

  if (b === 0) {
    throw new Error("Không thể chia cho 0");
  }
  return a / b;
}
try {
  doSomething();
} catch (error) {
  console.log("Đã xảy ra lỗi: " + error.message);
} finally {
  console.log("run finally");
}