new WOW().init();
var scores, RoundScores , ActivePlayer ,check , game;

done();//function to put all intial values

//roll button function
document.querySelector(".btn-roll").addEventListener('click', function(){
    if(game){
        if(ActivePlayer == 0)
                {
                    document.querySelector(".player-0-panel").classList.add('active');
                    document.querySelector(".player-1-panel").classList.remove('active');
                }
        else{
                    document.querySelector(".player-0-panel").classList.remove('active');
                    document.querySelector(".player-1-panel").classList.add('active');
            }
    //generating random number
    var dice = Math.floor(Math.random() * 6) + 1;
    
    //displaying result
    var diceDOM = document.querySelector(".imageee");
    diceDOM.style.display = 'block';
    diceDOM.src = 'images/dice-' + dice + '.png';
    
    //Displaying score
     if(dice !== 1)
        {//add scores
            RoundScores += dice;
            document.querySelector("#current-" + ActivePlayer).textContent = RoundScores;
        }
    else
        { //next player
                 if(ActivePlayer == 0)
                {
                    document.querySelector(".player-0-panel").classList.remove('active');
                    document.querySelector(".player-1-panel").classList.add('active');
                }
            else{
                document.querySelector(".player-1-panel").classList.remove('active');
                document.querySelector(".player-0-panel").classList.add('active');
            }
            next();
          
        }
    }
    
});


//hold button function
document.querySelector(".btn-hold").addEventListener('click' ,function(){
    if(ActivePlayer == 0)
                {
                    document.querySelector(".player-0-panel").classList.remove('active');
                    document.querySelector(".player-1-panel").classList.add('active');
                }
        else{
                    document.querySelector(".player-0-panel").classList.add('active');
                    document.querySelector(".player-1-panel").classList.remove('active');
            }
    
    if(game)
        {
            //adding current to global score
            scores[ActivePlayer] += RoundScores;
    
            //updation on the screen
            document.querySelector('#score-' + ActivePlayer).textContent = scores[ActivePlayer];
            if(scores[ActivePlayer] >= 40)
            {
                    document.querySelector("#player-"+ ActivePlayer).textContent = 'Winner!';
                    document.querySelector(".imageee").style.display = 'none';
                    document.querySelector(".player-" + ActivePlayer + "-panel").classList.remove('active');
                    document.querySelector(".player-" + ActivePlayer + "-panel").classList.add('winner');
                    game=false;
            }
    
            else{
                    next();
                }
        }
});


document.querySelector('.btn-new').addEventListener('click', done);


function next()
{
    ActivePlayer === 0 ? ActivePlayer =1 : ActivePlayer = 0;
            RoundScores=0;
            document.getElementById("current-0").textContent = '0';
            document.getElementById("current-1").textContent = '0';
       
}




function done()
{
    scores = [0 , 0] ;
    RoundScores = 0;
      game=true;
    ActivePlayer = 0;
    document.querySelector(".player-1-panel").classList.remove('winner');
    document.querySelector(".player-0-panel").classList.remove('winner');
    document.querySelector(".imageee").style.display = 'none';
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.querySelector("#player-0").textContent = 'player-1';
    document.querySelector("#player-1").textContent = 'player-2';
    document.querySelector(".player-1-panel").classList.remove('active');
    document.querySelector(".player-0-panel").classList.add('active');
      game=true;
    
}





