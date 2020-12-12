let image = document.querySelector("#image-wrapper");
let changeHeight = document.querySelector("#changeHeight");
let changeWidth = document.querySelector("#changeWidth");
let changeBorder = document.querySelector("#changeBorder");
let changeAlt = document.querySelector("#changeAlt");
const sourceSet = [
                "1.jpg",
                "2.jpg",
                "3.jpg",
                "4.jpg",
                "5.jpg",
                "6.jpg",
                "7.jpg",
                "8.jpg",
                "9.jpg"
            ]

image.onclick = function(){
    let number = 1 + Math.random() * (9)
    image.querySelector("img").setAttribute("src", `images/${Math.floor(number)}.jpg`);
}

changeHeight.onkeyup = function(){
    image.style.height = `${changeHeight.value}px`;
}

changeWidth.onkeyup = function(){
    image.style.width = `${changeWidth.value}px`;
}

changeBorder.onkeyup = function(){
    image.style.borderWidth = `${changeBorder.value}px`;
}

changeAlt.onkeyup = function(){
    image.querySelector("img").setAttribute("alt", changeAlt.value);
}