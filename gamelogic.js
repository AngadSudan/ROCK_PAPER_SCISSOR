let rock= document.querySelector(".rock");
let paper= document.querySelector(".paper");
let scissor= document.querySelector(".scissor");
let multi= document.querySelector(".multi");
let single= document.querySelector(".single");
let innerRound= document.querySelector(".inner_round");
let innerWin= document.querySelector(".inner_win");
let innerLoss= document.querySelector(".inner_loss");
let compDisplay= document.querySelector(".inner_comp");
let win=0;
let loss=0;
let total_game=0;
let userChoice=null;
let choice=["rock","paper","scissor"];
// console.log(computerChoice); 
const game=(userChoice)=>{
    let computerChoice=null;
    let choice=["rock","paper","scissor"];
    let selector= Math.round(Math.random()*2);
    console.log(selector);
    //computer choice
    computerChoice= choice[selector];
    compDisplay.innerText=` ${ computerChoice}`
    // if(computerChoice===userChoice){
    //     alert("You guys are equal");
    //     total_game++;
    //     innerRound.innerText=`${total_game}`;   
    // }
    if(selector===0 && userChoice==="paper"){ 
        win++;
        innerWin.innerText=`${win}`;
    }
    if(selector===1 && userChoice==="scissor"){
        win++;
        innerWin.innerText=`${win}`;
    }
    if(selector===2 && userChoice==="rock"){
        win++;
        innerWin.innerText=`${win}`;
    }
    if(selector===0 && userChoice!=="paper" &&userChoice!=="rock" || selector===1 && userChoice!=="scissor" &&userChoice!=="paper" || selector===2 && userChoice!=="rock" && userChoice!=="scissor"  ){
        loss++;
        innerLoss.innerText=`${loss}`
    }
    total_game++;
        innerRound.innerText=`${total_game}`;
}   
const dumbButton=()=>{
    alert("You seriously want that in a ROCK PAPER SCISSOR game -_-");
    let ans=prompt("will you click this again yes or no");
    if(ans==='yes'){
        dumbButton();
    }
    if(ans==='no'){
        alert("okay now play :]");
    }
}

//user choice
rock.onclick=()=>{ 
    userChoice=choice[0];
    game(userChoice);
}
paper.onclick=()=>{
    userChoice=choice[1];
    game(userChoice);
}
scissor.onclick=()=>{
    userChoice=choice[2];
    game(userChoice);
}
single.onclick=()=>{
    dumbButton();
}
multi.onclick=()=>{
    dumbButton();
}