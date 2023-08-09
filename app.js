
const faker = require('faker');

const adjectives = [
  "Amazing", "Brilliant", "Courageous", "Determined", "Empowering",
  "Fierce", "Grateful", "Hopeful", "Inspiring", "Joyful"
];

const nouns = [
  "Dream", "Journey", "Adventure", "Opportunity", "Destiny",
  "Purpose", "Success", "Miracle", "Triumph", "Voyage"
];

const phrases = [
  "You have the power within you to achieve greatness.",
  "Embrace challenges as stepping stones to success.",
  "Believe in yourself and your dreams.",
  "Your journey is unique and beautiful.",
  "You are capable of achieving your wildest dreams.",
  "Keep moving forward with unwavering determination.",
  "Every day is a new chance to make a difference.",
  "Your potential is limitless, keep pushing forward."
];

function generateRandomMessage() {
  const randomAdjective = faker.random.arrayElement(adjectives);
  const randomNoun = faker.random.arrayElement(nouns);
  const randomPhrase = faker.random.arrayElement(phrases);

  const message = `${randomAdjective} ${randomNoun}: ${randomPhrase}`;
  return message;
}

const randomMessage = generateRandomMessage();
console.log(randomMessage);

module.exports = generateRandomMessage;
