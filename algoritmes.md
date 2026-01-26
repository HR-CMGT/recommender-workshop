# TLE3 Specialise Me 3 maart 

- [Verschil AI algoritmes en traditionele algoritmes](#ai-algoritmes-en-traditionele-algoritmes)
- [Predictive, generative en agentic AI](#predictive-generative-en-agentic-ai)

<br><br><br>


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
Vervolgens kan je voor elke waarde aan het model vragen wat het label moet zijn. Dit werkt voor elke waarde, niet alleen de waarden waarop het getraind is!

```js
label = model.classify(-5)
// defeated!
```
In de praktijk is deze trainingdata vaak gigantisch, waardoor het trainen lang duurt en een sterke computer vereist.

### Interessante datasets voor AI training

- [Iris Dataset](https://archive.ics.uci.edu/ml/datasets/iris) - bloementypes voorspellen aan de hand van een foto.
- [MNIST](http://yann.lecun.com/exdb/mnist/) - Handgeschreven cijfers herkennen
- [Kaggle House Prices](https://www.kaggle.com/c/house-prices-advanced-regression-techniques) - Huisprijzen voorspellen met 79 features
- [UCI ML Repository](https://archive.ics.uci.edu/ml/) - Honderden datasets voor diverse machine learning problemen
- [Google Dataset Search](https://datasetsearch.research.google.com/) - Zoekmotor speciaal voor openbare datasets

In dit genre zijn heel veel verschillende AI algoritmes, elk met een eigen doel:

- **Decision Trees** - Eenvoudig model dat data verdeelt in ja/nee vragen
- **K-Nearest Neighbors (KNN)** - Classificeert data op basis van dichtstbijzijnde buren
- **Linear Regression** - Voorspelt waarden door een lijn door data te trekken
- **Neural Networks** - Geïnspireerd op hersenen, met lagen neuronen
- **Convolutional Neural Networks (CNN)** - Gespecialiseerd voor afbeeldingen
- **Recurrent Neural Networks (RNN)** - Verwerkt sequentiële data zoals tekst

<br><br><br>


## Predictive, generative en agentic AI

Je kan AI opdelen in 3 "klassen" :

### Predictive AI

Zoals hierboven beschreven, een model leert van een grote hoeveelheid data, en kan vervolgens een waarde voorspellen. 
Er zijn heel veel verschillende AI algoritmes, en hoeven niet altijd heel groot te zijn of veel rekenkracht te kosten.

- **Handschrift herkenning**: Kan tekst herkennen in een foto.
- **Email spam detection**: Model getraind op email-kenmerken (woordfrequentie, afzenderreputatie) voorspelt "spam" of "geen spam"
- **House price prediction**: Model getraind op kenmerken zoals vierkante meters, locatie, bouwjaar, voorspelt waarde van het huis
- **Credit risk**: Model analyzeert inkomsten, schuldratio, kredietgeschiedenis om "goedgekeurd" of "afgewezen" te voorspellen voor een creditcard
- **Medical diagnosis**: Model getraind op patiëntgegevens (bloeddruk, glucosewaarden) voorspelt ziektekans
- **Gebarentaal herkenning**: Kan handposes herkennen als gebarentaal.

### Generative AI

Dit zijn vaak dezelfde modellen die getraind zijn om data te herkennen, maar nu verder uitgebreid om zelf data te genereren. Sinds de uitvinding van het `transformer` algoritme is generative AI steeds beter geworden.

- **Text generation**: ChatGPT, Claude - genereert menselijke tekst op basis van een prompt
- **Image generation**: DALL-E, Midjourney - creëert afbeeldingen uit tekstbeschrijvingen
- **Code generation**: GitHub Copilot - genereert programmacode op basis van commentaar of context
- **Music generation**: Jukebox, MusicLM - componeert muziek in verschillende stijlen
- **Video generation**: Runway, Synthesia - creëert video's of animaties uit tekst of afbeeldingen

### Agentic AI

Taalmodellen zijn zo goed geworden in het geven van logische antwoorden en processen, dat ze ingezet worden om ook daadwerkelijk zelf acties uit te voeren, en te evalueren of die acties goed zijn gegaan. Dit kan bijv. zijn:

- **Autonomous customer support**: Een AI-agent beantwoordt vragen, zoekt informatie op in databases, en neemt zelfstandig beslissingen over refunds of escalaties.
- **Code debugging**: Een AI-agent analyzeert foutmeldingen, doorzoekt codebases, voert tests uit en implementeert fixes zelfstandig.
- **Financial trading**: Een AI-agent monitort marktdata, analyzeert trends, plaatst orders en evalueert portfolio-performance in real-time.
- **Autonomous research**: Een AI-agent zoekt wetenschappelijke bronnen, leest papers, extraheert relevante informatie en genereert samenattingen zonder menselijke tussenkomst.
- **IT infrastructure management**: Een AI-agent monitort systeemgezondheidsstatus, detecteert problemen, schakelt serverinstanties in/uit en past configuraties automatisch aan.

