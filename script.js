gsap.from(".footer #java",{
    scale:0,
    x:100, 
    scrollTrigger:{
        trigger:".footer #java",
        scroller:"body",
        // markers:true,
        start:"top 80%",
        end:"top 50%",
        scrub:2
    }
})

gsap.from(".footer #python",{
    scale:0,
    x:40, 
    scrollTrigger:{
        trigger:".footer #python",
        scroller:"body",
        // markers:true,
        start:"top 80%",
        end:"top 50%",
        scrub:2
    }

})

gsap.from(".footer #javascript",{
    scale:0,
    y:5, 
    scrollTrigger:{
        trigger:".footer #javascript",
        scroller:"body",
        // markers:true,
        start:"top 80%",
        end:"top 50%",
        scrub:2
        
    }

})

gsap.from(".footer #she",{
    scale:0,
    y:10, 
    scrollTrigger:{
        trigger:".footer #she",
        scroller:"body",
        // markers:true,
        start:"top 70%",
        end:"top 80%",
        scrub:2
    }

})

gsap.from(".footer #javaanalysis",{
    scale:0,
    y:400,   
    scrollTrigger:{
        trigger:"body",
        // markers:true,
        // start:"top 70%",
        // end:"top 70%",
        scrub:5 
    }
})

gsap.from(".footer #pythonanalysis",{
    scale:0,
    y:-400,   
    scrollTrigger:{
        trigger:"body",
        // markers:true,
        // start:"top 70%",
        // end:"top 70%",
        scrub:5 
    }
})

gsap.from(".footer #javascriptanalysis",{
    scale:0,
    y:400,   
    scrollTrigger:{
        trigger:"body",
        // markers:true,
        // start:"top 70%",
        // end:"top 70%",
        scrub:5
    }
})

gsap.from(".footer #sheanalysis",{
    scale:0,
    y:-400,   
    scrollTrigger:{
        trigger:"body",
        // markers:true,
        // start:"top 70%",
        // end:"top 70%",
        scrub:5
    }  
})

var body= document.querySelector("body")
var cursor= document.querySelector("#cursor")  

body.addEventListener("mousemove", function(dets){
    gsap.to(cursor, {
        x:dets.x,
        y:dets.y ,
       duration: 0.9,
       ease:"back.out" 
    })
})    



// aniamting the line 
let svg = document.querySelector("svg")
let path= svg.querySelector("path");

const pathlength= path.getTotalLength()

console.log(pathlength)


gsap.set(path, {strokeDasharray: pathlength})  

gsap.fromTo(path, {
      strokeDashoffset: pathlength,
}, {
         strokeDashoffset: 0,
         duration: 7, 
         ease:"none",
         scrollTrigger:{
            trigger:".svg-container", 
            start:"top top",
            end:"bottom bottom ",
            scrub:1
         }
})
