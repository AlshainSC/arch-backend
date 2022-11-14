import shell from 'shelljs';
import cliProgress from 'cli-progress';
import _colors from 'ansi-colors';
const {log} = console;

export default function progressBar(){
  log('  ')
  // create new progress bar
  const b1 = new cliProgress.Bar({
      format: ' ' + _colors.cyan('{bar}') + '| {percentage}% || {value}/{total} Chunks',
      barCompleteChar: '\u2588',
      barIncompleteChar: '\u2591',
      hideCursor: true
  });

  // initialize the bar -  defining payload token "speed" with the default value "N/A"
  b1.start(200, 0);

  // the bar value - will be linear incremented
  let value = 0;


  // 20ms update rate
  const timer = setInterval(function(){
      // increment value
      value++;

      // update the bar value
      b1.update(value);

      // set limit
      if (value >= b1.getTotal()){
          // stop timer
          clearInterval(timer);

          b1.stop();
      }
  }, 20);
  log(' ')
  //return b1;
}


// export const progressBar = () => {
//   let n = 0;
//   let time = 100;

//     while (n < 50) {
//       n++;
//       time += 100;
//       setTimeout(() => {
//         process.stdout.write("|");
//       }, time);
//     }
// }

// export const progressBar = setInterval(() => {
//   let n = 0;
//   while (n < 100) {
//     process.stdout.write("#");
//     n++;
//   }
//   if (n === 100) {
//     clearInterval(progressBar);
//   }
// }, 1000);