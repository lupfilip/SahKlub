var title = ["Mi smo Šah Klub!", "Kaj vse ponujamo?", "Postani član in uporabi naša orodja"];
var content = [
    "Naša spletna stran je namenjena skupnosti šahistov, ki jih zanimajo informacije o klubu in vse do igranja preko spleta s člani kluba..",
    "Mi ponujamo naše objave o dogodkih šahovskega sveta, za prijavljene člane pa še dodatno igranje preko spleta. Poleg tega je vsem uporabnikom na voljo šahovnica za" +
    " analizo, ki vsebuje podatkovno zbirko iger vseh članov (za prijavljene člane pa še posebej vaše igre)",
    "Kot član lahko igraš preko spleta z drugimi člani. Pridruži se zdaj in pokaži svoje zmožnosti."
];
var img = ["media/image/image1.jpg", "media/image/image2.jpg", "media/image/image3.jpg"]

document.querySelector(".carousel .left").addEventListener("click", function() {
    var items = document.getElementById("carouselItem").children;
    var selected;

    for(let i = 0; i < items.length; i++) {
        if(items[i].classList.contains("selected")) selected = i;
    }

    var newSelected = selected - 1;
    while(newSelected < 0) newSelected += items.length;

    items[selected].classList.remove("selected");
    items[newSelected].classList.add("selected");

    document.querySelector(".carousel .text h2").innerHTML = title[newSelected];
    document.querySelector(".carousel .text p").innerHTML = content[newSelected];
    document.querySelector(".carousel img").src = img[newSelected];

});

document.querySelector(".carousel .right").addEventListener("click", function() {
    var items = document.getElementById("carouselItem").children;
    var selected;

    console.log(items);
    for(let i = 0; i < items.length; i++) {
        if(items[i].classList.contains("selected")) selected = i;
    }

    var newSelected = selected + 1;
    while(newSelected >= items.length) newSelected -= items.length;

    items[selected].classList.remove("selected");
    items[newSelected].classList.add("selected");

    document.querySelector(".carousel .text h2").innerHTML = title[newSelected];
    document.querySelector(".carousel .text p").innerHTML = content[newSelected];
    document.querySelector(".carousel img").src = img[newSelected];
});

window.onload = function() {
    document.querySelector(".carousel .text h2").innerHTML = title[0];
    document.querySelector(".carousel .text p").innerHTML = content[0];
    document.querySelector(".carousel img").src = img[0];
}

window.addEventListener("scroll", function() {
    let elements = document.querySelectorAll(".content div > *");
    elements.forEach(element => {
        let rect = element.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
            element.classList.add("animate");
        } else {
            element.classList.remove("animate");
        }
    });
});

const menuButton = document.querySelector("header > button");
const menuDiv = document.querySelector("header > div");

menuButton.addEventListener("mouseenter", function () {
    menuDiv.style.display = (menuDiv.style.display === "block") ? "none" : "block";
    document.querySelectorAll("header > div ul").forEach(x => x.style.display = (menuDiv.style.display === "block") ? "block" : "none");
});

menuDiv.addEventListener("mouseleave", function () {
    if(window.innerWidth <= 768) {
        menuDiv.style.display = "none";
    }
});

window.addEventListener("resize", function() {
    if(window.innerWidth >= 768) {
        menuDiv.style.display = "";
        document.querySelectorAll("header > div ul").forEach(x => x.style.display = "");

    }
});


