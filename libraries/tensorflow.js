// xData zijn het aantal vierkante meters van een studentenkamer
const xData = [5, 10, 15, 20, 25, 30];
// yData zijn de huurprijzen van die kamers
const yData = [100, 200, 350, 500, 700, 1000];

const yNormalized = yData.map(y => y / 1000);
const xs = tf.tensor2d(xData, [xData.length, 1]);
const ys = tf.tensor2d(yNormalized, [yNormalized.length, 1]);

const model = tf.sequential();
model.add(tf.layers.dense({ units: 1, inputShape: [1] }));
model.compile({loss: 'meanSquaredError', optimizer: tf.train.adam(0.1)});

// training
console.log("Start training...");
await model.fit(xs, ys, { epochs: 500 });
console.log("Finished training");

// predicting
const result = model.predict(tf.tensor2d([18], [1, 1])).dataSync();
console.log("Een kamer van 18m2 kost per maand: €" + (result[0] * 1000).toFixed(0));