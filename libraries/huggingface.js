import { pipeline } from 'https://cdn.jsdelivr.net/npm/@huggingface/transformers@3.8.1';

const classifier = await pipeline('sentiment-analysis');
const results = await classifier('Wow, the teachers at cmgt are so cool 🥰!');

console.log(results);  // Check the full result first
console.log(`this review is ${results[0].label}, I am ${(results[0].score * 100).toFixed(2)}% sure.`)
