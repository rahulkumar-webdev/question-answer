

const que = "https://opentdb.com/api.php?amount=10";

async function link() {
  try {
    const response = await axios.get(que);
    const results = response.data.results;

    const randomIndex = Math.floor(Math.random() * results.length);
    const question = results[randomIndex].question;
    const answer = results[randomIndex].correct_answer;

    return {
      question,
      answer
    };
  } catch (error) {
    console.error("Error fetching trivia:", error);
  }
}

// let que = "https://opentdb.com/api.php?amount=10";

// let ran_name = "https://random-word-api.herokuapp.com/word"



// async function link() {
//   try{
//   let data = await axios.get(que);
//   let link_question = await data.data.results[1].question;
//   let link_answer = await data.data.results[random()].correct_answer;
//   return await {
//     question:link_question,
//     answer:link_answer
//   }
//   }
//   catch(ERROR){
//     console.log(ERROR)
//   }
  
// }
// let link = 
// {question : 'how is the pesident of india', answer:'narendr modi'
// };

// let rand_name = ["rahul","rohan","krishna","balram","sudams","radha"];
// let ans_wer = document.querySelector(".answer");
//   let h1 = document.querySelector("#money");
//     let lav = document.querySelector("#lavel");

// let btns = ["one","two","three","four"];
// let started = true;
// let money = 0;
// let level = 0;

// document.addEventListener("dblclick",()=>{
//   if(started = true){
//     started = false;
//     ans_wer.innerText = "";
//     h1.innerHTML ="money<br>0"
//     level = "";
//     money = '';
//     lav.innerHTML = "level<br>0",level;
//     generate_question();
//     f_btns();
//   }
  
// })
// function generate_question() {
//   let que = document.querySelector(".questions");
//   que.innerText = "";
//   que.innerText = link.question;
  
//   let ans = link.answer;
//   let ran = random();
//   let random_ind = btns[ran];
//   asscessing(random_ind,ans);
// }

// function asscessing(ind,ans) {
//   let btn = document.querySelector(`#${ind}`);
//   btn.innerText = ans;
//   btn.addEventListener("click",()=>{
//     btn.style.background="green"
//     level++;
//     lav.innerHTML= `leval<br>${level}`;
//     generate_question();
//     moneyincreasE();
    
//   })
  
// }
// function moneyincreasE() {

//   money++;
//   h1.innerHTML=`money<br>${money++}:lakh`;
// }
// function threed_part(btn1,btn2,btn3,btn4) {
//   maching(btn1);
//   maching(btn2);
//   maching(btn3);
//   maching(btn4);
// }

// // maching
// function maching(btn_n) {
//     if (btn_n.innerText !== link.answer) {
//     btn_n.innerText = rand_name[random()];
//     btn_n.addEventListener("click", () => {
//   btn_n.style.background = "red";
  
//   wrong_t_a_b_fun();
  
// })
//   }
   
// }

// //basic function 
// function wrong_t_a_b_fun() {
//   ans_wer.innerText= link.answer;
//   ans_wer.style.color = "green";
//   let btns = document.querySelectorAll("button");
//   for (let btn of btns) {
//   if (btn.innerText.includes(link.answer) ){
//     btn.style.background="blue"
//   }
//   }
// }
// function f_btns() {
//   let one = document.querySelector(`#one`);
//   let two = document.querySelector(`#two`);
//   let three = document.querySelector(`#three`);
//   let four = document.querySelector(`#four`);
// threed_part(one,two,three,four)
// }


function random() {
  let ran = Math.floor(Math.random()*4);
  return ran;
}


