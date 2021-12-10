let width = window.innerWidth;
let height = window.innerHeight;
document.querySelector("button").addEventListener("click", (e) => {
  e.preventDefault();
  alert(`Width : ${width}px ve Height : ${height}px - dir`);
});