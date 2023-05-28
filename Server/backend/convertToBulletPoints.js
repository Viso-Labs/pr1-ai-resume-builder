import { SentenceTokenizer } from 'natural';

function convertToBulletPoints(paragraph) {
  const tokenizer = new SentenceTokenizer();
  const sentences = tokenizer.tokenize(paragraph);
  
  const bulletPoints = sentences.map((sentence) => `- ${sentence}`);

  return bulletPoints;
}

export default convertToBulletPoints;