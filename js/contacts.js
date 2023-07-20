let github = document.querySelector(".js-github");
let facebook = document.querySelector(".js-facebook");
let gmail = document.querySelector(".js-gmail");
let phone = document.querySelector(".js-phone");

    github.addEventListener("mouseover",() => {
        github.innerText = "Github.com/AXODUS21";
        clearTimeout(time)
            let time = setTimeout(() => {
                github.innerText = "Github";
            }, 3000);   
    });
    facebook.addEventListener("mouseover", () => {
      facebook.innerText = "Axellerosh Lubi";
            clearTimeout(time)
              let time =setTimeout(() => {
                facebook.innerText = "Facebook";
              }, 3000);
    });
    gmail.addEventListener("mouseover", () => {
      gmail.innerText = "lubi.axellerosh@gmail.com";
      gmail.style.textTransform = "lowercase";
            clearTimeout(time)
              let time =setTimeout(() => {
                gmail.innerText = "Gmail";
                gmail.style.textTransform = "capitalize";
              }, 3000);
    });
    phone.addEventListener("mouseover", () => {
      phone.innerText = "09368808085 / 09946928071";
            clearTimeout(time)
              let time =setTimeout(() => {
                phone.innerText = "Phone";
              }, 3000);
    });

