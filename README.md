# TLE3 Specialise Me 3 maart 

## Recommender Workshop

- [Verschil AI algoritmes en traditionele algoritmes](./algoritmes.md)
- [Predictive, generative en agentic AI](./algoritmes.md)
- [Maak je eigen recommender system](#maak-je-eigen-recommender-system)
- [Real World Example](#real-world-example)
- [Bouw een UI](#bouw-een-ui)

<br><br><br>

# Maak je eigen recommender system 

Het ***KNN algoritme*** kan sets van getallen met elkaar vergelijken om te zien welke het meest overeenkomen. Door getallen te tekenen als punten in een grafiek, kunnen we via de **afstand tussen punten** bepalen welke punten het dichts bij liggen. Zie dit [interactief voorbeeld op Codepen](https://codepen.io/Qbrid/pen/OwpjLX). 

## Game Friend Recommender

> *Ik hou van FPS shooters, en Racing games. Wie van mijn mede studenten past het best bij mij?*

Hieronder vind je een fictieve tabel van studenten en hun gaming interesses. Een 1 betekent geen interesse, een 10 betekent dat dit het favoriete genre is van die student. Je kan deze tabel ook aanpassen voor andere onderwerpen, zoals sport, filmgenres, studie vakken of een dating app.


| Student | FPS | RPG | Strategy | Sports | Racing | Puzzle | Adventure | Simulation |
|---------|-----|-----|----------|--------|--------|--------|-----------|------------|
| Alice   | 9   | 5   | 3        | 2      | 6      | 4      | 7         | 3          |
| Ben     | 3   | 8   | 7        | 1      | 2      | 6      | 8         | 5          |
| Chloe   | 2   | 9   | 8        | 1      | 1      | 7      | 6         | 8          |
| David   | 7   | 4   | 3        | 8      | 9      | 2      | 5         | 3          |
| Ethan   | 8   | 2   | 2        | 9      | 8      | 1      | 4         | 2          |
| Fiona   | 1   | 8   | 9        | 2      | 1      | 8      | 7         | 9          |
| George  | 6   | 3   | 2        | 10     | 9      | 1      | 3         | 2          |
| Hannah  | 2   | 9   | 7        | 1      | 3      | 8      | 9         | 7          |
| Iris    | 3   | 7   | 8        | 2      | 1      | 9      | 8         | 8          |
| Jack    | 9   | 3   | 2        | 7      | 8      | 2      | 5         | 3          |
| Kim     | 1   | 10  | 9        | 1      | 1      | 9      | 8         | 9          |
| Liam    | 7   | 4   | 3        | 8      | 7      | 3      | 5         | 4          |

<br><br><br>

## Data toevoegen

Een AI algoritme is vaak vantevoren getraind met data. Maak een nieuwe projectmap, en daarin een bestand `knn.js`. Voeg de tabel toe als javascript, zodat we dit rechtstreeks aan het KNN algoritme kunnen geven.

```js
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
```

## Training

Leer het model de eigenschappen van de studenten:

```js
import kNear from "./knear.js"

const model = new kNear(3);
for (const student of students) {
    model.learn(student.scores, student.name)
}
```

## Matchmaking

Met het KNN algoritme gaan we kijken welke studenten het dichtst bij jouw eigen interesse liggen:

```js
const myScores = [7, 4, 3, 8, 7, 3, 5, 4]
const buddies = model.findTopMatches(myScores)

for (const buddy of buddies) {
    console.log(`${buddy.name} (distance: ${buddy.distance.toFixed(2)})`)
}
```
Voer de code uit in node met
```js
node knn.js
```

<br><br><br>

# Real World Example

Je hebt gezien dat de gegevens van een student opgeslagen wordt als een reeks getallen. Dit noemen we een [Vector](https://en.wikipedia.org/wiki/Vector_(mathematics_and_physics))

In de echte wereld heeft een dataset duizenden of tienduizenden users. Er zijn speciale databases om met zulke hoeveelheden vector data efficiënt te werken, zoals: [Pinecone](https://www.pinecone.io), [Qdrant](https://qdrant.tech), [Weaviate](https://weaviate.io).

## Pinecone Vector Search

1 - Maak een [Pinecone](https://www.pinecone.com) account.

- Maak een nieuwe API key en noteer die op een veilige plek *-let op, je kan de key achteraf niet meer inzien in het dashboard-*
- Maak een *index* met de naam `gaming-buddies`
- Je hoeft hier ***geen*** taalmodel te selecteren. Kies ***manual*** en geef de tabel 8 kolommen *(het aantal gaming voorkeuren)*

```sh
Dimension: 8
Metric: cosine
Vector type: Dense
```



<br><br><br>

2 - Maak een nieuw [Node](https://nodejs.org/en) project met `npm init` en installeer Pinecone: 

```js
npm install @pinecone-database/pinecone
```

<br><br><br>

3 - Maak een nieuw bestand `upload.js`. Hiermee ga je de data uploaden naar pinecone. ⚠️ Let op dat de students nu ook een `id` nodig hebben!

```js
import { Pinecone } from '@pinecone-database/pinecone'

const pine = new Pinecone({ apiKey: 'YOUR_PINECONE_API_KEY' })
const index = pine.Index('gaming-buddies')

const students = [
  { id: '1', name: 'Alice', scores: [9, 5, 3, 2, 6, 4, 7, 3] }, // id toegevoegd
  { id: '2', name: 'Ben', scores: [3, 8, 7, 1, 2, 6, 8, 5] },
  // ... 
]

await index.upsert(
  students.map(student => ({
    id: student.id,
    values: student.scores,
    metadata: { name: student.name }
  }))
)
```
Voer het uit met

```sh
node upload.js
```

<br><br><br>

4 - In je pinecone dashboard kan je zien of het uploaden geslaagd is. Om te testen kan je in het dashboard al zoeken naar related students!

<img src="./pinecone.png" width="700">

<br><br><br>

5 - Maak een nieuw bestand `search.js`. Hierin gaan we zoeken naar de meest geschikte matches met vector similarity search!

```js
import { Pinecone } from '@pinecone-database/pinecone'

const pine = new Pinecone({ apiKey: 'YOUR_PINECONE_API_KEY' })
const index = pine.Index('gaming-buddies')

const myScores = [7, 4, 3, 8, 7, 3, 5, 4]
const results = await index.query({
  vector: myScores,
  topK: 3,
  includeMetadata: true
})

console.log('Jouw top 3 gaming buddies:')
for (const match of results.matches) {
  console.log(`${match.metadata.name} (score: ${match.score.toFixed(2)})`)
}
```
Voer de code uit met `node search.js`

Het voordeel van Pinecone is dat *similarity search* is ingebouwd en snel blijft werken zelfs als je tienduizend studenten hebt. Je hoeft dus niet het KNN algoritme zelf uit te voeren.



<br><br><br>

# Bouw een UI

Je kan een frontend bouwen waarin je je game interesses kan aangeven met sliders of een invoerveld:

<img src="./matchmaker.png" width="500">

<br>

Deel je project als volgt in:

```
gaming-buddies/
   ├── node_modules/
   ├── server.js
   ├── search.js
   ├── upload.js
   └── public/
       ├── index.html
       ├── app.js
       └── style.css
```

- In `server.js` kan je `express` toevoegen met `npm install express`.
- Hierin maak je routes voor je app, net zoals in ***PRG6 - REST API's***.
- Maak een `POST` request die de student data ontvangt (8 getallen), bv `localhost:3000/api/search/`
- In `server.js` maak je de public map visible met `app.use(express.static('public'))`
- Plaats je frontend website in de `public` map, vanuit daar maak je een `fetch` call naar je endpoint. Daarin geef je de 8 scores mee van de sliders.