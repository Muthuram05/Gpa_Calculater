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
     /* document.getElementById('Gpa').innerHTML=sum; 
      document.getElementById('crt_point').innerHTML=Creditpoint;
      document.getElementById('user-detail').innerHTML=username;
      document.getElementById('user-reg').innerHTML=userreg
      var mytable = "<table class='table is-fullwidth is-bordered is-striped'><tr>";
      {mytable += "<td>subject"+"</td>"}
      for (var CELL of subarr)
      {mytable +="<td>" + CELL + "</td>";}
      mytable += "</tr>";
      {mytable += "<td>grade"+"</td>"}
      for (var CELL of gradearr)
      {mytable +="<td>" + CELL + "</td>";}
      mytable += "</tr>";
      {mytable += "<td>credit"+"</td>"}
      for (var CELL of Creditarr)
      {mytable +="<td>" + CELL + "</td>";}
      mytable += "</tr></table>";
  
      document.getElementById('result-table').innerHTML=mytable*/
  
  }
  

  
  
  
    
  
  
  //GRADE   POINTS     MARK
  //O        10        91-100
  //A+       9         81-90
  //A        8         71-80
  //B+       7         61-70
  //B        6         50-60
  //RA       0          <50
  //SA       0           -
  //W        0           -