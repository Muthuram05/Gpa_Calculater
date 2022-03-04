var btn=document.querySelector("#btn")

btn.onclick=function(){
    var div=document.createElement("div");
    div.innerHTML=generateit();
    document.getElementById("input_box").appendChild(div);
}

//add subject
function generateit(){
    return "<input type='text' class='subject'  placeholder='Subject/Lab Name' required> <input type='text' class='grade' placeholder='Grade' required> <input type='text' class='credit' placeholder='Credits' required> <button onclick='removeit(this)'><img src='icon/icons8-close-30.png'></button>"
}
function removeit(div){
    document.getElementById("input_box").removeChild(div.parentNode);
}

//calc function

function calc(){
    var grade = document.querySelectorAll(".grade");
    var Credit = document.querySelectorAll(".credit");
    var subject = document.querySelectorAll(".subject");
    var username= document.getElementById('name').value;
    var userreg=document.getElementById('year').value;
    var gradearr=[];
    var Creditarr=[];
    var subarr=[];
    var sum = 0; 
    var i =0;
    var Creditpoint = 0;
    subject.forEach(function(element){
        if(element.value !==''){
            subarr.push(element.value)
        }
    })
     grade.forEach(function(element){
         if(element.value !==''){
             gradearr.push(element.value)
         }
     })
      
    Credit.forEach(function(element)
        {
           if(element.value !==''){
             Creditarr.push(element.value)
           }
            
        }
        );
    for(var i=0;i<gradearr.length;i++){
         sum +=gradearr[i]*Creditarr[i];
    }
    

    
    for (i=0; i<Creditarr.length; i++){
        Creditpoint += parseInt(Creditarr[i]);

    }
    sum=sum/Creditpoint;
    document.getElementById('Gpa').innerHTML=sum; 
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

    document.getElementById('result-table').innerHTML=mytable

}

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



  


//GRADE   POINTS     MARK
//O        10        91-100
//A+       9         81-90
//A        8         71-80
//B+       7         61-70
//B        6         50-60
//RA       0          <50
//SA       0           -
//W        0           -