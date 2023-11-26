let slides = document.querySelectorAll(".slide")
let slidesArrey = Array.from(slides)

let prev = document.querySelector(".prev")
let next = document.querySelector(".next")
// console.log(prev,next);
// console.log(slides)
console.log(slidesArrey)

function prevnext () {
    let activeSlide = document.querySelector(".slide.active")
    let currentindex = slidesArrey. indexOf(activeSlide)

    // console.log(currentindex);

    let prev;
    let next;

    if(currentindex == 0){
        prev = slidesArrey[slidesArrey.length-1]
    }else{

        prev = slidesArrey[currentindex-1]
    }

    if(currentindex == slidesArrey.length-1){
        next = slidesArrey[0]
    }else{
        next = slidesArrey[currentindex+1]
    }

    // console.log("prev",prev)
    // console.log("next",next)
    // console.log(currentindex);
    return [next,prev]
}

// prevnext ()

function koijabo () {
    let activeSlide = document.querySelector(".slide.active")
    let currentindex = slidesArrey. indexOf(activeSlide)

    let [next,prev] = prevnext()

    slidesArrey.map((slide,index)=> {
        if(currentindex == index) {
            slide.style.transform = "translatex(0)"
        }else if (slide == prev) {
            slide.style.transform = "translatex(-100%)"
        }else if (slide == next) {
            slide.style.transform = "translatex(100%)"
        }

        slide.addEventListener("transitionend",function(){
            slide.classList.remove("smooth")
        })
    })
}

next.addEventListener("click",function(){
    let activeSlide = document.querySelector(".slide.active")
    let [next] = prevnext()

    activeSlide.classList.add("smooth")
    next.classList.add("smooth")
    activeSlide.classList.remove("active")
    activeSlide.style.transform = "translatex(-100%)"
    next.classList.add("active")
    next.style.transform = "translatex(0)"
    koijabo ()
})

// prev.addEventListener("click",function(){
//     let activeSlide = document.querySelector(".slide.active")
//     let [prev] = prevnext()

//     activeSlide.classList.add("smooth")
//     prev.classList.add("smooth")
//     activeSlide.classList.remove("active")
//     activeSlide.style.transform = "translatex(100%)"
//     prev.classList.add("active")
//     prev.style.transform = "translatex(0)"
//     koijabo ()
// })