let timerNumbers = process.argv.slice(2);

for (let times of timerNumbers) {
  if ((times < 0) || (isNaN(times))) {
    continue
  }
    setTimeout (() => {
      console.log(`${times} seconds`)
      process.stdout.write('\u0007');
    }, times * 1000)
  }
