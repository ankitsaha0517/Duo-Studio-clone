function init() {
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true
    });
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });


    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    ScrollTrigger.refresh();

}
init()
var crsr =document.querySelector("#corsor")
function mouseMouse(){
    document.addEventListener("mousemove",function(dets){
        gsap.to("#corsor",{
            left: dets.x+2,
            top:dets.y+2,
        })
    }) 
 
    document.querySelector("#page1 video").addEventListener("mouseenter",function(dets){
       crsr.innerHTML = `<h5>sound on</h5>`;
       crsr.style.width=`fit-content`; 
       crsr.style.padding=`1px 5px` ;
       crsr.style.borderRadius= `100px`; 
       crsr.style.textTransform =`uppercase`;
       crsr.style.fontSize =`14px`;
    })
    document.querySelector("#page1 video").addEventListener("mouseleave",function(dets){
       crsr.innerHTML = ` `;
       crsr.style.width=`20px`; 
       crsr.style.padding=` ` ;
       crsr.style.borderRadius= `50%`; 
    })
}
mouseMouse()

document.addEventListener("mouseenter",function(){
    crsr.style.opacity = "1"
})
document.addEventListener("mouseleave",function(){
    crsr.style.opacity = "0"
})

gsap.from("#page1 h1,#page1 h2", {
    y: 10,
    rotate: 10,
    opacity: 0,
    delay: 0.3,
    duration: 0.7
})


var tl = gsap.timeline({
    scrollTrigger:{
        trigger:"#page1 h1",
        scroller:"#main",
        // markers:true,
        start:"top 25%",
        end:"top 0",
        scrub: 2,
    }
})
var tl2 = gsap.timeline({
  scrollTrigger:{
      trigger:"#page1 h1",
      scroller:"#main",
      // markers:true,
      start:"top -125%",
      end:"top 130%",
      scrub: 2,
  }
})
var tl3 = gsap.timeline({
    scrollTrigger:{
        trigger:"#page1 h1",
        scroller:"#main",
        // markers:true,
        start:"top -500%",
        end:"top -480%",
        scrub: 2,
    }
  })
  

tl.to("#page1 h1",{
    x:-100
},"anim")
tl.to("#page1 h2",{
    x:100
},"anim")
tl.to("video",{
    width:"98%"
},"anim")

tl2.to("#main",{
  backgroundColor:"#fff"
})
tl3.to("#main",{
    color:"#fff",
    backgroundColor:"#0F0D0D"
})

function box(){
    document.querySelectorAll(".cel").forEach(function(elem){
        elem.addEventListener("mouseenter",function(){
            var att = elem.getAttribute("det-img");
            crsr.style.height = "350px";
            crsr.style.width = "320px";
            crsr.style.borderRadius = "0";
            crsr.style.backgroundImage = `url(${att})`;
            crsr.style.backgroundColor = `#0F0D0D`;
        })
    })
    document.querySelectorAll(".cel").forEach(function(elem){
        elem.addEventListener("mouseleave",function(){
            crsr.style.height = "20px";
            crsr.style.width = "20px";
            crsr.style.borderRadius = "50%";
            crsr.style.backgroundImage = `none`;
            crsr.style.backgroundColor = `#EDBFFF`;
        })
    })
}
box();

var h4 = document.querySelectorAll(".nav")
var purple = document.querySelector("#purple");
h4.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        purple.style.opacity= `1`;
        purple.style.display= `flex`;
        let h = elem.textContent
        document.querySelectorAll('.scroller').forEach(function(elem){
            var stor = " ";
            for(let i = 1 ;i<=8;i++){
              stor += `<h2>${h}</h2>`
            }
            elem.innerHTML = stor
        })
        
    })

    elem.addEventListener("mouseleave",function(){
        purple.style.opacity= `0`;
        purple.style.display= `none`;

    })
})