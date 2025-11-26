/** @format */

const sentimentScore = {
  score: 3,
  positiveWords: [
    "knowledgeable",
    "patient",
    "diplomatic",
    "sincere",
    "creative",
    "marvelous",
  ],
  negativeWords: [
    "judgmental",
    "rude",
    "vain",
    "jealous",
    "interruptive",
    "defensive",
  ],
};
function getSentimentScore(sentence) {
  const words = sentence.split(" ");
  let totalScore = 0;
  for (let word of words) {
    const lowerWord = word.toLowerCase;
    if (sentimentScore.positiveWords.includes(word.toLowerCase())) {
      totalScore += 1;
    } else if (sentimentScore.negativeWords.includes(word.toLowerCase())) {
      totalScore -= 1;
    }
  }

  return totalScore;
}
console.log(getSentimentScore("He is Knowledgeable and creative"));
console.log(getSentimentScore("He is jealous, vain and also rude"));
console.log(getSentimentScore("They are diplomatic and sincere"));
