

// let que = "https://opentdb.com/api.php?amount=10";

// let ran_name = "https://random-word-api.herokuapp.com/word"






let started = true;
let money = 0;

document.addEventListener("keypress",()=>{
  if(started = true){
    started = false;
addingname();
matching();
finalcheck();
// currectness(matching());
  }
  
})







function addingname(){
  let questi = document.querySelector(".questions")
  questi.innerText = question();

  let  one = document.querySelector("#one");
  let two = document.querySelector("#two");
  let three = document.querySelector("#three");
  let four = document.querySelector("#four");
one.innerText=   option();
two.innerText=   option();
three.innerText= option();
four.innerText=  option();
}
function option(){
let NAME = ["rahul","kumer","krishna","sudama","rama","lakshman","sita","radarani","hunuman",'sunker ji',"hari","gopala","makhan chore"];
let random = Math.floor(Math.random()*11)+0;
let ran_name = NAME[random];
return ran_name;
}

function question(){
  let bat = ["koin he vo jo duniya ko banna he ","sita ji kiski patini he hamare ramayan me"];
let ind = Math.floor(Math.random()*2)+0;
let que = bat[ind];
val_sita(ind);
return que
}





function val_sita(index){
if(index == 0){
  console.log("krishna");
  return "krishna";
}else{
console.log("rama");
return "rama";
}
}









function finalcheck(){
if(matching() == val_sita()){
  console.log("yes chhosed correct");
  
}else{
  console.log("wrong option");
  
}
}

function matching(){
let btns = document.querySelectorAll(".options-container button");
for(let btn of btns){
  btn.addEventListener("click",()=>{
 let curr_opt = btn.innerText;
console.log(curr_opt);
return curr_opt;
  })
  
}

}