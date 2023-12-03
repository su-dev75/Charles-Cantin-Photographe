window.onload = () => {  

  const btns = document.querySelectorAll(".control .btn")

    for(let btn of btns) {
      btn.addEventListener('click', function(){
      let tag = this.id;

       const imgs = document.querySelectorAll('.gallery img');

        for(let img of imgs){
          img.classList.replace("active", "inactive");

          if(tag in img.dataset || tag === "tous"){
          img.classList.replace("inactive", "active");
        }
     }
   })
 }

} 
