  function getPercent() {
       let obtain = document.getElementById('obtainMark').value;
       let total = document.getElementById('totalMark').value;
       let errorBox = document.getElementById("errorBox");
       let x = (obtain / total) * 100;
       x = Number.parseInt(x);
      
      
      if(obtain>0 && total >0){
        let perCent = document.getElementById('per');
        per.innerHTML = x + "%";
        errorBox.innerHTML = ""
      confettiFunc()
      }else{
         errorBox.innerHTML = "Enter Valid Number";
         per.innerHTML = "%"
      }
    };
    
    function confettiFunc(){
     confetti({
       particleCount:200,
       spread:100,
       origin: {y: 0.6}
     });
    }
    
   let calcbtn = document.getElementById("calcbtn");
   calcbtn.addEventListener("click",getPercent)
