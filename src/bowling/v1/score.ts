import { Game } from '../types/game.type';

export function score(game: Game) {
/*** variables *****/
let scoreData: number[] = [];
let strike: boolean = false;
let spare: boolean = false;
let openFrame: boolean = false;
let lastFrame: boolean = false;
let spareFirst: boolean = false;
let error: boolean = false;
let currentScore: number = 0;
let index: number = 1;
let totalScore: number = 0;


game
  .map((frame: number[]) => {
    (frame.length === 2 && frame[0] === 10) && frame.pop();     // FILTER THROUGH ALL FRAMES IN THE ARRAY AND REMOVE ZERO FROM FRAMES WHERE A STRIKE
    return frame;
  }) 
  .forEach((frame: number[]) => {
    scoreData.push(...frame);
   //  CHECK GAME TYPE (STRIKE/SPARE/OPENFRAME/LASTFRAME) 
   frame.length === 3
   ? lastFrame = true
   : frame[0] + frame[1] > 10
   ? error = true
   : frame[0] === 10
   ? strike = true
   : frame[0] + frame[1] === 10
   ? spare = true
   : openFrame = true;

   const strikeCase = strike && (openFrame || spare || lastFrame) && !spareFirst;
    const spareCase = spare && (openFrame || strike || lastFrame);
 
   spare && scoreData.length == 2 ? spareFirst=true : null;

   error && (totalScore=-1);
 
   strikeCase && (calculateScore(1), (strike = !strike));  //calculate score if strikeCase true
   spareCase && (calculateScore(2), (spare = !spare), (spareFirst = !spareFirst));
   openFrame && (calculateScore(2), (openFrame = !openFrame));
   lastFrame && ((lastFrame = !lastFrame), calculateScore(3));
  });

  function calculateScore(num: number) {
    let i= lastFrame ? 3 : strike || spare ? 2 : 1;    

    for (let n = scoreData.length; n > i; n -= num) {
      //console.log(scoreData);
      let othershot = strike == false && spare == false && openFrame == true   
      ? 0
      : scoreData[2];

      currentScore = scoreData[0] + scoreData[1] + othershot;

      scoreData.splice(0, num);
      totalScore += currentScore;
      //console.log(`Frame ${index} score:${currentScore}`);
      //console.log(`Total score:${totalScore}`);
      index++;
    }
  }
  return totalScore;
}

