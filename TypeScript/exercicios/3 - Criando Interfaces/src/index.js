const info = await fetch('https://api.github.com/users/Gabriel-Viterbo', {
    method: 'GET',
});
console.log(info);
export {};
