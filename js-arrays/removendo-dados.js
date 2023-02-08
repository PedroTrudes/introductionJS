const nota = [10, 6, 8, 5.5, 10];
nota.pop();
nota.reverse()
nota.unshift(2);
nota.shift();
//nota.sort();
nota.splice(0, 2)

const media = (nota[0] + nota[1] + nota[2] + nota[3]) / nota.length;

console.log(`a media é ${media}`)

console.log(nota);