import * as tf from '@tensorflow/tfjs';

async function go(): Promise<void> {
	const model = tf.sequential();

	model.add(tf.layers.dense({units: 10, activation: 'sigmoid',inputShape: [2]}));
	model.add(tf.layers.dense({units: 1, activation: 'sigmoid',inputShape: [10]}));

	model.compile({loss: 'meanSquaredError', optimizer: 'rmsprop'});

	const trainingData = tf.tensor2d([[0, 0], [0, 1], [1, 0], [1, 1]]);
	const targetData = tf.tensor2d([[0], [1], [1], [0]]);

	for (let i = 1; i < 100 ; ++i) {
		const h = await model.fit(trainingData, targetData, {epochs: 30});
		console.log(`Loss after Epoch ${i} : ${h.history.loss[0]}`);
	}

	//@ts-ignore
	model.predict(trainingData).print();
}

go();
