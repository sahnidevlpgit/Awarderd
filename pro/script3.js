//  Mouse Circle Move
window.addEventListener("mousemove", function (dets) {
    document.querySelector("#mousecircle").style.top = `${dets.clientY}px`;
    document.querySelector("#mousecircle").style.left = `${dets.clientX}px`;
    // View Project Circle Move
    document.querySelector("#vwclr").style.top = `${dets.clientY}px`;
    document.querySelector("#vwclr").style.left = `${dets.clientX}px`;

    document.querySelector("#vw").style.top = `${dets.clientY}px`;
    document.querySelector("#vw").style.left = `${dets.clientX}px`;
    
});
document.querySelectorAll(".enlarge").forEach(function (elem) {
    elem.addEventListener("mouseover", function (dets) {
        document.querySelector("#mousecircle").style.display = "none";
        document.querySelector("#vwclr").style.display = "initial";
        document.querySelector("#vw").style.display = "initial";
        document.querySelector("#vwclr").style.mixBlendMode = "difference";
        document.querySelector("#main").style.backgroundColor = dets.target.dataset.color;
        document.querySelectorAll(".insidebottom h3, .insidebottom p").forEach(function (val) {
            val.style.color = "white";
        });
        gsap.to("#vwclr", {
            ease: "ease.out",
            duration: 50,
        });
    });
    elem.addEventListener("mouseleave", function () {
        document.querySelector("#mousecircle").style.display = "initial";
        document.querySelector("#vwclr").style.display = "none";
        document.querySelector("#vw").style.display = "none";
        document.querySelector("#main").style.backgroundColor = "initial";
        document.querySelectorAll(".insidebottom h3, .insidebottom p").forEach(function (val) {
            val.style.color = "initial";
        });
    });
});
// Email Circle Move With Cursor
document.querySelector("#circle").addEventListener("mousemove", function (dets) {
    document.querySelector("#mousecircle").style.backgroundColor = "white";
    document.querySelector("#mousecircle").style.width = "60px";
    document.querySelector("#mousecircle").style.height = "60px";
    document.querySelector("#mousecircle").style.border = "none";
    document.querySelector("#mousecircle").style.mixBlendMode = "difference";
    document.querySelector("#circle").style.transform = `translate3d(${dets.clientX * .2}px, ${dets.clientY * .1}px, 0px) scale3d(1.3, 1.3, 1.3) rotateZ(${dets.clientX * .006}deg)`;
});
document.querySelector("#circle").addEventListener("mouseleave", function (dets) {
    document.querySelector("#mousecircle").style.backgroundColor = "initial";
    document.querySelector("#mousecircle").style.width = "15px";
    document.querySelector("#mousecircle").style.height = "15px";
    document.querySelector("#mousecircle").style.border = "3px solid black";
    document.querySelector("#mousecircle").style.mixBlendMode = "initial";
    document.querySelector("#circle").style.transform = "initial";
});
// Nav bar Mix Blend Mode
document.querySelectorAll(".mixMode").forEach(function(val){
val.addEventListener("mousemove", function (dets) {
    document.querySelector("#mousecircle").style.backgroundColor = "white";
    document.querySelector("#mousecircle").style.width = "60px";
    document.querySelector("#mousecircle").style.height = "60px";
    document.querySelector("#mousecircle").style.border = "none";
    document.querySelector("#mousecircle").style.mixBlendMode = "difference";
});
val.addEventListener("mouseleave", function (dets) {
    document.querySelector("#mousecircle").style.backgroundColor = "initial";
    document.querySelector("#mousecircle").style.width = "15px";
    document.querySelector("#mousecircle").style.height = "15px";
    document.querySelector("#mousecircle").style.border = "3px solid black";
    document.querySelector("#mousecircle").style.mixBlendMode = "initial";
});
});

$('.ttxt h2').textillate( {initialDelay: 370, in: { effect: 'fadeInUp', delay: 60 } });

gsap.to("#overly", {
    delay: 1,
    height: "0px",
    ease: "ease.out",
});


// gsap.to("#overlyclr1", {
//     width: "20px",
//     height: "20px",
//     ease: "ease.in.out",
//     duration: 1,
// });
// gsap.to("#overlyclr", {
//     width: "30px",
//     height: "30px",
//     ease: "ease.in.out",
//     duration: 1,
// });


// $('.ct h2').textillate( {
//      loop: true, 
//      minDisplayTime: 1000,
//      in: { 
//          effect: 'fadeInUp', 
//         },
//     out: { 
//         effect: 'fadeOutUp',
//         }

//     });


// Some ABCD Class Effect of Cursor

document.querySelectorAll(".abcd").forEach(function (val) {
    val.addEventListener("mouseover", function () {
        document.querySelector("#mousecircle").style.border = " 3px solid white";
    });
    val.addEventListener("mouseleave", function () {
        document.querySelector("#mousecircle").style.border = "3px solid black";
    });

});

gsap.fromTo("#vw", 5, { rotation: 0 }, {
    rotation: 360,
    ease: Linear.easeNone,
    repeat: -1
});


// Nav Baar Animation
var cc = 0;
function menuOut(){
    document.querySelector("#nav i").style.border = "none";
    document.querySelector("#nav i").style.transform = "rotate(360deg)",
    gsap.to("#menu", {
        width: "0px", 
    });
    gsap.to("#menu a",{
        duration: 1.5,
        opacity: 0,
        display: "initial",
        ease: "bounce.out", 
        x: 95,
    });
};
document.querySelector("#nav i").addEventListener("click", function(){
    if(cc === 0){
    this.style.border = "2px solid black";
    this.style.transform = "rotate(180deg)",
    gsap.to("#menu", {
            width: "200px", 
    });
    gsap.to("#menu a",{
            duration: 0.8,
            opacity: 1,
            display: "initial",
            ease: "ease.out", 
            x: 0,
    });
    cc = 1;
} else{
    menuOut();
    cc= 0;
}
});
window.addEventListener("click" ,function(dets){
        if(dets.target.id != 'mO'){
            menuOut();
            cc= 0;
    }
    });