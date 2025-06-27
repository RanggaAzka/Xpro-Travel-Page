// humberger
$('#menu-btn').click(function(){
    $('nav ul').addClass('active')
});
$('#menu-close').click(function(){
    $('nav ul').removeClass('active')
})

// swiper
var swiper = new Swiper(".mySwiper", {
slidesPerView: 3,
spaceBetween: 30,
pagination: {
el: ".swiper-pagination",
clickable: true,
},
});

function showbudget() {
    document.getElementById("budget").classList.remove("hidden");
    document.getElementById("budget2").classList.remove("hidden");
    document.getElementById("budget3").classList.remove("hidden");
    document.getElementById("budget4").classList.remove("hidden");
    document.getElementById("budget5").classList.remove("hidden");
    document.getElementById("budget6").classList.remove("hidden");
    document.getElementById("standar").classList.add("hidden");
    document.getElementById("standar2").classList.add("hidden");
    document.getElementById("standar3").classList.add("hidden");
    document.getElementById("standar4").classList.add("hidden");
    document.getElementById("standar5").classList.add("hidden");
    document.getElementById("standar6").classList.add("hidden");
    document.getElementById("premium").classList.add("hidden");
    document.getElementById("premium2").classList.add("hidden");
    document.getElementById("premium3").classList.add("hidden");
    document.getElementById("premium4").classList.add("hidden");
    document.getElementById("premium5").classList.add("hidden");
    document.getElementById("premium6").classList.add("hidden");
}

function showstandar() {
    document.getElementById("budget").classList.add("hidden");
    document.getElementById("budget2").classList.add("hidden");
    document.getElementById("budget3").classList.add("hidden");
    document.getElementById("budget4").classList.add("hidden");
    document.getElementById("budget5").classList.add("hidden");
    document.getElementById("budget6").classList.add("hidden");
    document.getElementById("standar").classList.remove("hidden");
    document.getElementById("standar2").classList.remove("hidden");
    document.getElementById("standar3").classList.remove("hidden");
    document.getElementById("standar4").classList.remove("hidden");
    document.getElementById("standar5").classList.remove("hidden");
    document.getElementById("standar6").classList.remove("hidden");
    document.getElementById("premium").classList.add("hidden");
    document.getElementById("premium2").classList.add("hidden");
    document.getElementById("premium3").classList.add("hidden");
    document.getElementById("premium4").classList.add("hidden");
    document.getElementById("premium5").classList.add("hidden");
    document.getElementById("premium6").classList.add("hidden");
}

function showpremium() {
    document.getElementById("budget").classList.add("hidden");
    document.getElementById("budget2").classList.add("hidden");
    document.getElementById("budget3").classList.add("hidden");
    document.getElementById("budget4").classList.add("hidden");
    document.getElementById("budget5").classList.add("hidden");
    document.getElementById("budget6").classList.add("hidden");
    document.getElementById("standar").classList.add("hidden");
    document.getElementById("standar2").classList.add("hidden");
    document.getElementById("standar3").classList.add("hidden");
    document.getElementById("standar4").classList.add("hidden");
    document.getElementById("standar5").classList.add("hidden");
    document.getElementById("standar6").classList.add("hidden");
    document.getElementById("premium").classList.remove("hidden");
    document.getElementById("premium2").classList.remove("hidden");
    document.getElementById("premium3").classList.remove("hidden");
    document.getElementById("premium4").classList.remove("hidden");
    document.getElementById("premium5").classList.remove("hidden");
    document.getElementById("premium6").classList.remove("hidden");
}

