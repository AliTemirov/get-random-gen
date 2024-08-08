const randomNames = require('random-names');
const faker = require('faker');

const RandomDataGenerator = {
    getRandomName: () => randomNames(),
    getRandomAddress: () => faker.address.streetAddress(),
    getRandomDate: () => faker.date.past(),
    getRandomNumber: (min = 0, max = 100) => Math.floor(Math.random() * (max - min + 1)) + min,
};

module.exports = RandomDataGenerator;
