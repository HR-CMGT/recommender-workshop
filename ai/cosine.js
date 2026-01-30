
// scores staan voor: 'FPS', 'RPG', 'Strategy', 'Sports', 'Racing', 'Puzzle', 'Adventure', 'Simulation'];

const students = [
  { name: 'Alice', scores: [9, 5, 3, 2, 6, 4, 7, 3] },
  { name: 'Ben', scores: [3, 8, 7, 1, 2, 6, 8, 5] },
  { name: 'Chloe', scores: [2, 9, 8, 1, 1, 7, 6, 8] },
  { name: 'David', scores: [7, 4, 3, 8, 9, 2, 5, 3] },
  { name: 'Ethan', scores: [8, 2, 2, 9, 8, 1, 4, 2] },
  { name: 'Fiona', scores: [1, 8, 9, 2, 1, 8, 7, 9] },
  { name: 'George', scores: [6, 3, 2, 10, 9, 1, 3, 2] },
  { name: 'Hannah', scores: [2, 9, 7, 1, 3, 8, 9, 7] },
  { name: 'Iris', scores: [3, 7, 8, 2, 1, 9, 8, 8] },
  { name: 'Jack', scores: [9, 3, 2, 7, 8, 2, 5, 3] },
  { name: 'Kim', scores: [1, 10, 9, 1, 1, 9, 8, 9] },
  { name: 'Liam', scores: [7, 4, 3, 8, 7, 3, 5, 4] }
]

//
// AI cosine similarity - verwacht twee arrays, geeft terug hoeveel ze overeenkomen
// 1 = gelijk, 0 = totaal anders
//
function cosineSimilarity(arrayA, arrayB) {
  const dotProduct = arrayA.reduce((sum, val, i) => sum + val * arrayB[i], 0);
  const magA = Math.sqrt(arrayA.reduce((sum, val) => sum + val * val, 0));
  const magB = Math.sqrt(arrayB.reduce((sum, val) => sum + val * val, 0));
  return dotProduct / (magA * magB); // getal tussen 0 en 1
}

//
// toon hoeveel de studenten met jouw smaak overeenkomen
//
const myScores = [7, 3, 4, 8, 7, 3, 5, 4]
for (const student of students) {
  console.log(`${student.name} similarity: ${cosineSimilarity(student.scores, myScores)}`)
}


//
// opdracht!
// toon alleen de top 3 studenten die het meest met jouw smaak overeenkomen
//