const object = JSON.parse(localStorage.getItem('score')) || {
    wins : 0,
    losses : 0,
    ties : 0
};
display();
    let computerMove = ' ';
    let result = ' ';
    
    function playgame(para)
    {
        if (para === 'scissors')
{
    if(computerMove === 'Rock')
    {
        result = 'you win';
    }
    else if (computerMove === 'paper')
    {
        result = 'you lose'
    }
    else if (computerMove === 'scissors')
    {
        result = 'tie';
    }

}
else if (para === 'paper')
{
    if (computerMove === 'Rock')
    {
        result = 'you lose';
    }
    else if (computerMove === 'paper')
    {
        result = 'tie';
    }
    else if (computerMove === 'scissors')
    {
        result = 'you win';
    }
    
}
else if (para === 'Rock')
{
    if (computerMove  === 'Rock')
    {
        result = 'tie';
    }
    else if (computerMove === 'scissors')
    {
        result = 'you win';
    }
    else if (computerMove === 'paper')
    {
        result = 'you lose';
    }
}
if (result === 'you win')
{
    object.wins += 1;
}
else if (result === 'you lose')
{
    object.losses += 1;
}
else if (result === 'tie')
{
    object.ties += 1;
}
display();
document.querySelector('.resul').innerHTML = result;
document.querySelector('.move').innerHTML = 
`you picked <img src="images/${para}-emoji.png" class="size"> 
computer picked <img src="images/${computerMove}-emoji.png" class="size">`;
localStorage.setItem('score', JSON.stringify(object));
}
function movement()
{
    const randommove = Math.random();

    if(randommove >= 0 && randommove <= 1 / 3)
    {
        computerMove = 'Rock';
    }
    else if (randommove > 1 / 3 && randommove < 2 /3)
    {
        computerMove = 'paper';
    }
    else if (randommove > 2 / 3 && randommove <= 1)
    {
        computerMove = 'Scissors';
    }
    console.log(computerMove);
}
function display()
{
    document.querySelector('.display')
    .innerHTML = `wins: ${object.wins}   losses: ${object.losses}   ties: ${object.ties}`;
}