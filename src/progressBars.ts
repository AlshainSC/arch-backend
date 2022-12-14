import shell from "shelljs";
import cliProgress, { Options } from "cli-progress";
import _colors from "ansi-colors";
import chalk from "chalk";
import fs from 'fs';
const { log } = console;
//const bar = new cliProgress.Bar({}, cliProgress.Presets.shades_grey || cliProgress.Presets.legacy);

// export default function progressBar () {
    
//     //console.log(_colors.magenta('Preset: ' + name));
    
//     // create a new progress bar with preset
//     bar.start(200, 0);
//     let value = 0;

//     const timer = setInterval(() => {
        
//         value++;
//         bar.update(value);

//         if (value >= bar.getTotal()) {
//             bar.stop();
//             clearInterval(timer);
//         }
        
//     }, 20)
//     // random value 1..200
    
// }

export default function progressBar() {
    // create new progress bar
    const b1 = new cliProgress.Bar({
        format:
            " " + _colors.cyan("{bar}") + "| {percentage}% || {value}/{total} Chunks",
        barCompleteChar: "\u2588",
        barIncompleteChar: "\u2591",
        hideCursor: true,
        
    });

    //let received: number = 0;

    // const child = shell.exec('npm i', {silent: true, async: true})
    // //@ts-ignore
    // // child.stdio.('data', (data: any) => {
    // //         const total = data.Socket._writeableState.highWaterMark;
    // //         log('total: ', total)
    // //         b1.start(total, 0);
    // //     })
    // //     .on('data', (chunk: any) => {
    // //         received += chunk.length;
    // //         log('chunks received: ', received)
    // //         b1.update(received);
    // //     })
    // //     .on('finish', () => {
    // //         b1.stop();
    // //         onComplete();
    // //     })

    // log('num processes: ', child.stdio.length)
    // //@ts-ignore
    // log('ended: ', child.stdio[0]._readableState.ended)
    // log('stdout: ', child.stdout);




    // initialize the bar -  defining payload token "speed" with the default value "N/A"
    b1.start(200, 0);

    //the bar value - will be linear incremented
    let value = 0;

    // 20ms update rate
    const timer = setInterval(function () {
        // increment value
        value++;

        // update the bar value
        b1.update(value);

        // set limit
        if (value >= b1.getTotal()) {
            // stop timer
            clearInterval(timer);
            b1.stop();
            onComplete();
        }
    }, 20);
    
    //return b1;
}

function onComplete () {
        log(chalk.bgGreenBright('\n' + 'File Generation Successful, Happy Coding!'))
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
