// ==========================
// BloomNote V4
// ==========================

// Navbar blur saat scroll
const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
    if (window.scrollY > 30) {
        nav.style.background = "rgba(255,255,255,.7)";
        nav.style.boxShadow = "0 20px 45px rgba(0,0,0,.08)";
    } else {
        nav.style.background = "rgba(255,255,255,.45)";
        nav.style.boxShadow = "0 10px 40px rgba(0,0,0,.05)";
    }
});

// Hero animation
window.addEventListener("load", () => {

    const heroLeft = document.querySelector(".hero-left");
    const heroRight = document.querySelector(".hero-right");

    heroLeft.animate([
        {
            opacity:0,
            transform:"translateY(40px)"
        },
        {
            opacity:1,
            transform:"translateY(0)"
        }
    ],{
        duration:900,
        easing:"ease-out",
        fill:"forwards"
    });

    heroRight.animate([
        {
            opacity:0,
            transform:"translateY(60px) scale(.9)"
        },
        {
            opacity:1,
            transform:"translateY(0) scale(1)"
        }
    ],{
        duration:1100,
        delay:250,
        easing:"ease-out",
        fill:"forwards"
    });

});

// Glow mengikuti mouse
document.addEventListener("mousemove",(e)=>{

    document.querySelectorAll(".blob").forEach((blob,index)=>{

        const speed=(index+1)*0.015;

        blob.style.transform=
        `translate(${e.clientX*speed}px,${e.clientY*speed}px)`;

    });

});

// Ripple button
document.querySelectorAll("button").forEach(btn=>{

btn.addEventListener("click",function(e){

const circle=document.createElement("span");

const diameter=Math.max(this.clientWidth,this.clientHeight);

circle.style.width=diameter+"px";

circle.style.height=diameter+"px";

circle.style.left=e.offsetX-diameter/2+"px";

circle.style.top=e.offsetY-diameter/2+"px";

circle.classList.add("ripple");

this.appendChild(circle);

setTimeout(()=>{

circle.remove();

},600);

});

});
