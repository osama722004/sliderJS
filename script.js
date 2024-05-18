let pre = document.querySelector(".pre");
let next = document.querySelector(".next");

next.addEventListener("click", () => {
  let items = document.querySelectorAll(".item");
  let lastItem = items[items.length - 1];
  let firstItem = items[0].cloneNode(true); // clone the first item
  document.querySelector(".slider").removeChild(items[items.length - 1]); // remove the last item
  document.querySelector(".slider").insertBefore(lastItem, items[0]); // insert the last item before the first
});

pre.addEventListener("click", () => {
  let items = document.querySelectorAll(".item");
  let firstItem = items[0];
  let lastItem = items[items.length - 1].cloneNode(true); // clone the last item
  document.querySelector(".slider").removeChild(items[0]); // remove the first item
  document.querySelector(".slider").appendChild(firstItem); // append the first item after the last
});
