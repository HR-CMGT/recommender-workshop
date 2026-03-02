# Deel 1 - Introductie AI algoritmes

<img width="750" src="./ai/tle-algos.png">

<br><br><br><br><br><br>

## Prediction

| Drukte in de trein | Data |
|---|---|
| <img width="200" src="./ai/drukte.png"> | • Historische reizigersdata<br>• Dag van de week<br>• Seizoen en vakantieperiodes<br>• Evenementen<br>• Weer<br>• Spitsuren<br>• Schoolkalender<br>• Publieke feestdagen<br>• Werkdagen vs. thuiswerken<br>• Treintype en route |

| Spotify Recommendations | Data |
|---|---|
| <img width="200" src="./ai/spotify.png"> | • Luistergeschiedenis<br>• Favoriete nummers en artiesten<br>• Afspeelduur per nummer<br>• Overgeslagen nummers<br>• Tijdstip van afspelen<br>• Betalende gebruiker<br>• Geografische locatie<br>• Gebruikersleeftijd en geslacht<br>• Sponsored content<br>• Audio features (tempo, key, energy)<br>• Seizoen en jaargetijde<br>• Sociale connecties en wat vrienden luisteren |


<br><br><br><br><br><br>




## Predictive, Generative en Agentic AI

| Predictive AI | Generative AI | Agentic AI |
|---|---|---|
| Drukte in de trein | Text generation | Autonomous customer support |
| Broeikas Ecosysteem | Image generation | Code debugging en testing |
| Thuisbezorgd drukte | Code generation | Financial trading |
| Tekst herkenning | Music generation  | Autonomous research |
| Email spam | Video generation | IT infrastructure management |
| House price prediction | | |
| Credit card fraude | | |
| Medical diagnosis | | |
| Pose herkenning | | |


<br><br><br><br><br><br>


## AI algoritmes en traditionele algoritmes

Traditionele algoritmes kan je zien als `if else` statements. De developer bedenkt de logica, en bedenkt wanneer er wat moet gebeuren in de flow van een programma.

```js
if(health < 1) {
  label = "player is defeated"
}
if(health > 0) {
  label = "player is alive"
}
```

In AI algoritmes wordt (meestal) een model *getraind* met data. Dit model leert dan begrijpen wat de labels zijn voor de verschillende waarden.

```js
let data = [
  {value:0, label: "defeated"},
  {value:-2, label: "defeated"},
  {value:3, label: "alive"},
  {value:9, label: "alive"},
]

model.learn(data)
```

Als je genoeg data levert, kan het model ***leren*** welke waarden "defeated" zijn en welke "alive"

Vervolgens kan je nieuwe waarden voorleggen en vragen wat hiervan het label is:

```js
label = model.classify(-5) // defeated! (0.87)
```

### Confidence 

Een eigenschap van het doen van een voorspelling is dat die nooit 100% zeker is. Een voorspelling krijgt een *confidence* score: hoe zeker is het algoritme. Voor bovenstaand voorbeeld zou dat zijn:

| Waarde | Voorspelling | Confidence |
|--------|--------------|------------|
| -4 | defeated | 0.95 |
| -3 | defeated | 0.92 |
| -2 | defeated | 0.88 |
| -1 | defeated | 0.75 |
| 0 | defeated | 0.65 |
| 1 | alive | 0.60 |
| 2 | alive | 0.78 |
| 3 | alive | 0.85 |
| 4 | alive | 0.93 |


> *Vraag: wanneer is een confidence hoog genoeg, en hoe zou je die kunnen verbeteren?*

> *Vraag: bij het IF statement weet je altijd 100% zeker dat het klopt, dus waarom zou je een AI algoritme gebruiken?*


<br><br><br><br><br><br>


## Datasets

Een "real world" dataset is vaak veel complexer dan slechts 1 of 2 getallen. Dat maakt het lastig om er een patroon in te herkennen. Een AI algoritme kan je net zo lang *trainen* totdat het wel een patroon heeft gevonden!

- [Puma Indians Dataset](https://www.kaggle.com/datasets/uciml/puma-indians-diabetes-database) - Diabetes voorspellen op basis van medische metingen
- [Huizenprijzen](https://www.kaggle.com/competitions/house-prices-advanced-regression-techniques/data) voorspellen aan de hand van 79 eigenschappen van een huis
- [MNIST](http://yann.lecun.com/exdb/mnist/) - Handgeschreven cijfers herkennen
- [UCI Repository](https://archive.ics.uci.edu/ml/) en [Google Dataset Search](https://datasetsearch.research.google.com/) - Honderden datasets voor diverse machine learning problemen

<br><br><br><br><br><br>


## Algoritmes

- **Cosine Similarity** - Klein en snel algoritme dat snel kan zien hoeveel twee getallenreeksen overeenkomen
- **Decision Trees** - Eenvoudig model dat data verdeelt in ja/nee vragen
- **K-Nearest Neighbors (KNN)** - Classificeert data op basis van dichtstbijzijnde punten
- **Linear Regression** - Voorspelt waarden door een lijn door data te trekken
- **Neural Networks** - Geïnspireerd op hersenen, met lagen neuronen
- **Convolutional Neural Networks (CNN)** - Neural network voor afbeeldingen
- **Transformer** - AI model dat een grote hoeveelheid data tegelijkertijd kan analyseren, werkt goed voor taal

<br>

- [Deel 2 - Maak je eigen recommender system](./recommender.md) 
