document.addEventListener('DOMContentLoaded', () => {
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
  
    if ($navbarBurgers.length > 0) {
        $navbarBurgers.forEach( el => {
            el.addEventListener('click', () => {
                const target = el.dataset.target;
                const $target = document.getElementById(target);
  
                el.classList.toggle('is-active');
                $target.classList.toggle('is-active');
            });
        });
    }
  });
  var btn=document.querySelector("#btn")

  btn.onclick=function(){
      var div=document.createElement("div");
      div.innerHTML=generateit();
      document.getElementById("input_box").appendChild(div);
  }
  
  //add subject
  function generateit(){
      return ' <input type="text" class="samester_name" placeholder="semester Name"> <input type="text" class="sgpa" placeholder="SGPA">  <button onclick="removeit(this)"><img src="icon/icons8-close-30.png"></button>';
  }
  function removeit(div){
      document.getElementById("input_box").removeChild(div.parentNode);
  }
  
  //calc function
  
  function calc(){
      var Sgpa = document.querySelectorAll(".sgpa");
      var subject = document.querySelectorAll(".samester_name");
      var Sgpaarr=[];
      var Subjectarr=[];
      var sum = 0; 
      var i =0;
      Sgpa.forEach(function(element){
          if(element.value !==''){
              Sgpaarr.push(element.value)
          }
      })
       subject.forEach(function(element){
           if(element.value !==''){
               Subjectarr.push(element.value)
           }
       })
       for (i=0; i<Sgpaarr.length; i++){
        sum += parseInt(Sgpaarr[i]);

    }
    console.log(sum)
    sum=sum/Sgpaarr.length
    console.log(sum)
    document.getElementById("Cgpa_result").innerHTML=sum;

  
  }
      // Get the modal
      var modal = document.getElementById("myModal");
  
      // Get the button that opens the modal
      var btn = document.getElementById("myBtn");
      
      // Get the <span> element that closes the modal
      var span = document.getElementsByClassName("close")[0];
      
      // When the user clicks the button, open the modal 
      btn.onclick = function() {
        modal.style.display = "block";
      }
      
      // When the user clicks on <span> (x), close the modal
      span.onclick = function() {
        modal.style.display = "none";
      }
      
      // When the user clicks anywhere outside of the modal, close it
      window.onclick = function(event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      }

      /*submit form*/ 
      var form = document.getElementById("my-form");
  
      async function handleSubmit(event) {
        event.preventDefault();
        var status = document.getElementById("my-form-status");
        var data = new FormData(event.target);
        fetch(event.target.action, {
          method: form.method,
          body: data,
          headers: {
              'Accept': 'application/json'
          }
        }).then(response => {
          if (response.ok) {
            status.innerHTML = "Thanks for your submission!";
            form.reset()
          } else {
            response.json().then(data => {
              if (Object.hasOwn(data, 'errors')) {
                status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
              } else {
                status.innerHTML = "Oops! There was a problem submitting your form"
              }
            })
          }
        }).catch(error => {
          status.innerHTML = "Oops! There was a problem submitting your form"
        });
      }
      form.addEventListener("submit", handleSubmit)
  
  
  
    
  
  
  //GRADE   POINTS     MARK
  //O        10        91-100
  //A+       9         81-90
  //A        8         71-80
  //B+       7         61-70
  //B        6         50-60
  //RA       0          <50
  //SA       0           -
  //W        0           -