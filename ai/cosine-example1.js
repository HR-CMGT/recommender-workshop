// 
// muziek voorbeeld met .map en .sort
//


// cosine similarity
function cosineSimilarity(arrayA, arrayB) {
  const dotProduct = arrayA.reduce((sum, val, i) => sum + val * arrayB[i], 0);
  const magA = Math.sqrt(arrayA.reduce((sum, val) => sum + val * val, 0));
  const magB = Math.sqrt(arrayB.reduce((sum, val) => sum + val * val, 0));
  return dotProduct / (magA * magB); // getal tussen 0 en 1
}

//
// genres :'rock', 'pop', 'jazz', 'electronic', 'classical'
//
const artists = [
  { name: 'The Beatles', scores: [0.8, 0.7, 0.1, 0.2, 0.3] },
  { name: 'Daft Punk', scores: [0.2, 0.6, 0.1, 0.9, 0.2] },
  { name: 'Miles Davis', scores: [0.1, 0.2, 0.9, 0.3, 0.5] },
  { name: 'Beethoven', scores: [0.1, 0.1, 0.3, 0.1, 0.9] },
  { name: 'Radiohead', scores: [0.7, 0.5, 0.3, 0.6, 0.4] }
];

//
// jouw muzieksmaak en recommendation
//
const myTaste = [0.9, 0.4, 0.2, 0.7, 0.1]; // voorkeur rock & electronic
const recommendations = artists
  .map(({ name, scores }) => ({
    artist: name, similarity: cosineSimilarity(myTaste, scores)
  }))
  .sort((a, b) => b.similarity - a.similarity);

console.log(recommendations); // radiohead past het best bij jouw smaak