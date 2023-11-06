//----------------- Generate letters -----------------------

let letters="abcdefghijklmnopqrstuvwxyz";

let letterArray=Array.from(letters);
// console.log(letterArray)

let lettersContainer=document.querySelector('.letters');

letterArray.forEach((letter)=>{
    let span=document.createElement('span');
    let spancont=document.createTextNode(letter);
    span.appendChild(spancont);
    span.className='letter-box';
    lettersContainer.appendChild(span)
});

// ----------------------------------------------------------
// ---------------------- Generate Random Word -----------------


let words={
    programming:["ruby","python","php","dart","java","delphi"],
    movies:["prison break","the hobbit","fast"],
    game:["pubg","free fire",'pes','fifa'],
    countries:["algeria","egypt","saudia","palastine","canada"]
}

let allkeys=Object.keys(words);

// random key
let randomkey=Math.floor(Math.random()*allkeys.length)

// random category
let randomCategory=allkeys[randomkey];

// random category value
let randomCategoryValue=words[randomCategory];


// random category value word
let randomCategoryWordkey=Math.floor(Math.random()*randomCategoryValue.length);

// random word final
let randomChosenWord=randomCategoryValue[randomCategoryWordkey];

document.querySelector('.category span').innerHTML=randomCategory;

// -----------------------------------------------------------------------------

// Generate Guess letter--------

let conLETGess=document.querySelector('.letters_guess');

let ArrayChoWord=Array.from(randomChosenWord);


ArrayChoWord.forEach((ele)=>{
    let emptyspan=document.createElement('span');

    if(ele==" "){
        emptyspan.className='space';
    }

    conLETGess.appendChild(emptyspan);

});

// -----------------------------------------------------------

// ------------------------ Compare Letters --------------------
let spans=document.querySelectorAll('.letters_guess span');

let wrong_steps=0;
let true_step=0;

let hungman=document.querySelector('.hung_draw');

document.addEventListener('click',(e)=>{

    
    let sta=false;
    if(e.target.className==='letter-box'){
        e.target.classList.add('clicked');
        let clickedletter=e.target.innerHTML.toLowerCase();
        let chosenWord=Array.from(randomChosenWord.toLowerCase());

        chosenWord.forEach((WorL,index)=>{
            
            if(WorL==clickedletter){
                sta=true;
                true_step++;
    
                spans.forEach((ele,n)=>{
                    if(n===index){
                        ele.innerHTML=WorL;
                    }

                });

            }
            
        });
        if(true_step===chosenWord.length ){
            GameWin();
            lettersContainer.classList.add('finished');
        }

        if(sta!==true){
            wrong_steps++;
            hungman.classList.add(`wrong-${wrong_steps}`)

            if(wrong_steps===8){
                GameEnd();
                lettersContainer.classList.add('finished');
            }
        
        }
        
    }
});


function GameEnd(){
    let div=document.createElement('div');

    let divtext=document.createTextNode(`The Game Over, Word Is ${randomChosenWord}`);

    div.appendChild(divtext);
    div.className='popup'
    document.body.appendChild(div);
}

function GameWin(){
    let div=document.createElement('div');
    let support='';
if(wrong_steps<3){
support='Super';
}else if(wrong_steps>3 && wrong_steps<5){
support='Good'
}
    let divtext=document.createTextNode(`You Win, You Trying ${wrong_steps} Time ,You Are ${support}`);

    div.appendChild(divtext);
    div.className='popup'
    document.body.appendChild(div);
}