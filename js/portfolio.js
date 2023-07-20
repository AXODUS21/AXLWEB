function checkPhoto() {
  let text = document.querySelector(".js-image-details");
  let img1 = document.querySelector(".js-radio1");
  let img2 = document.querySelector(".js-radio2");
  let img3 = document.querySelector(".js-radio3");
  let img4 = document.querySelector(".js-radio4");

  if (img1.checked) {
    text.innerText =
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti fugit ipsam laborum. Ullam porro asperiores aspernatur, veritatis atque placeat ab accusamus. Impedit consequuntur atque nesciunt nihil inventore porro, repellendus velit."; 
  } else if (img2.checked) {
    text.innerText =
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti fugit ipsam laborum. Ullam porro asperiores aspernatur, veritatis atque placeat ab accusamus. Impedit consequuntur atque nesciunt nihil inventore porro, repellendus velit."; 
  } else if (img3.checked) {
    text.innerText =
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti fugit ipsam laborum. Ullam porro asperiores aspernatur, veritatis atque placeat ab accusamus. Impedit consequuntur atque nesciunt nihil inventore porro, repellendus velit."; 
  } else if (img4.checked) {
    text.innerText =
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti fugit ipsam laborum. Ullam porro asperiores aspernatur, veritatis atque placeat ab accusamus. Impedit consequuntur atque nesciunt nihil inventore porro, repellendus velit."; 
  }
}
