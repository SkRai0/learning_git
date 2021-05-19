function randomnumgenerator(num)
{
    return Math.floor(Math.random()*num);
}

const mywords = ['This is the first line','This the second line','This is the third line','I am a robot','This can not end'];

const num = randomnumgenerator(mywords.length);
console.log(`${mywords[num]}`);