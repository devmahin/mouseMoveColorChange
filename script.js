let main = document.querySelector(".main");
main.addEventListener("mousemove", function (e) {
  let getBunding = this.getBoundingClientRect();
  let rect = e.clientX - getBunding.left;
    if (rect < getBunding.width / 2) {
      console.log("left")
    let redcolor = gsap.utils.mapRange(0, getBunding.width / 2, 255, 0, rect);

    gsap.to(main, {
      backgroundColor: `rgb(${redcolor},0,0)`,
      ease: Power4,
    });
      
    } else {
        let redcolor = gsap.utils.mapRange(getBunding.width /2, getBunding.width, 0, 255, rect);

        gsap.to(main, {
          backgroundColor: `rgb(0,0,${redcolor})`,
          ease: Power4,
        });

        
    console.log("right");
  }
});
main.addEventListener("mouseleave", function () {
    gsap.to(main, {
        backgroundColor: "white"

    })
})
// mapRange(inMin, inMax, outMin, outMax, valueToMap)