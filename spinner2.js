//process.stdout.write('hello from spinner1.js... \rheyyy\n');


const spin = [" | ", " / ", " - ", " | ", " / ", " - ", " \\ ", " | "];
let delay = 0;
let result = "";

for (let i = 0; i < spin.length; i++) {
  delay += 500;

  setTimeout(() => {
    process.stdout.write(`\r${spin[i]}`);
  }, delay);
}
