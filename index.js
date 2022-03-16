const img1 = document.querySelector('.img1');
const img2 = document.querySelector('.img2');
const title = document.querySelector('.title');
const btnReload = document.querySelector('.btnReload');

const randomNumber = (min, max) => Math.floor(Math.random() * (max - min) + min);


const getWinner = (firstDice, secondDice) => {
   if (firstDice > secondDice) return title.innerHTML = "Player#1 Win";
   if (firstDice < secondDice) return title.innerHTML = "Player#2 Win";
   return title.innerHTML = "Draw";
};


btnReload.addEventListener('click', () => {
   const dice1 = randomNumber(1, 7);
   const dice2 = randomNumber(1, 7)
   img1.src = `images/dice${dice1}.png`;
   img2.src = `images/dice${dice2}.png`;
   getWinner(dice1, dice2);
})

// console.log(img1.src);
// console.log(img2.src);