let div2 = document.querySelectorAll('.div1 div');
let score = document.getElementById('score');
let compScore = document.getElementById('compscore');
let yourScore = document.getElementById('yourscore');
let indicatorTitle = document.getElementById('indicatortitle');

score.value = 10;

let youcount = 0;
let compcount = 0;



div2.forEach((el, i) => {

    el.addEventListener('click', (e)=>{

        let compChoise = div2[Math.floor(Math.random() * 3)];
        if(e.target.className == compChoise){
            indicatorTitle.innerText = "draw";

        }
        else if(e.target.className == 'rock' && compChoise.className == 'paper'){
            indicatorTitle.innerText = 'computer win!';
            ++compcount;
        }
        else if(e.target.className == 'paper' && compChoise.className == 'rock'){
            indicatorTitle.innerText = 'you win!';
            ++youcount;
        }
        else if(e.target.className == 'qaychi' && compChoise.className == 'paper'){
            indicatorTitle.innerText = 'you win!';
            ++youcount;
        }
        else if(e.target.className == 'paper' && compChoise.className == 'qaychi'){
            indicatorTitle.innerText = 'computer win!';
            ++compcount;
        }
        else if(e.target.className == 'rock' && compChoise.className == 'qaychi'){
            indicatorTitle.innerText = 'you win!';
            ++youcount;
        }
        else if(e.target.className == 'qaychi' && compChoise.className == 'rock'){
            indicatorTitle.innerText = 'computer win!';
            ++compcount;
        }
        compScore.innerText = Number(compcount);
        yourScore.innerText = Number(youcount);
        
    })
   
})
if(compScore.innerText === 10){
    alert("you lose")
}else if(yourScore.innerText === 10){
    alert('you winner!')
} 

