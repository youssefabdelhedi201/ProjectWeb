/** creating button click show hide navbar **/
var togglebtn=document.querySelector(".togglebtn");
var nav=document.querySelector(".navlinks");
var links=document.querySelector(".navlinks li");

togglebtn.addEventListener("click", function(){
    this.classList.toggle("click");
    nav.classList.toggle("open");
})

var typed=new Typed(".input",{
    strings:["Fullstack Developer","UX Designer","FinOps Developer"],
    typedSpeed:70,
    backSpeed:55,
    loop:true
})

// js/script.js
document.getElementById("downloadBtn").addEventListener("click", function() {
    const link = document.createElement("a");
    link.href = "path/to/your/CV.pdf"; // Update this path to the correct location of your CV file
    link.download = "CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});
document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll(".resume-item");
    const navLinks = document.querySelectorAll(".resume nav ul li a");

    window.addEventListener("scroll", function() {
        let current = "";

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - sectionHeight / 3) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href").includes(current)) {
                link.classList.add("active");
            }
        });
    });
});


