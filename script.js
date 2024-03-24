document.addEventListener("DOMContentLoaded", function() {
    const segments = document.querySelectorAll(".researchpoint");
  
    segments.forEach(segment => {
      segment.addEventListener("click", function() {
        const details = this.querySelector(".researchpoint-sub");
        details.style.display = details.style.display === "flex" ? "none" : "flex";
        const BgSub = this.querySelector(".researchpoint h1");      
        BgSub.style.background = BgSub.style.background === "rgb(199, 104, 123)" ? "rgb(101, 175, 148)" : "rgb(199, 104, 123)";
      });
    });
  });
  