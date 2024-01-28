function init() {
	const persons = document.getElementsByClassName('person');
	const personArray = Array.from(persons);
	const numberOfContestants = Array.from(persons).length;
	const iterations = 3000;
	let count = 0;

	const scores = Array.apply(null, Array(numberOfContestants)).map(() => 0);

	const tick = () => {
		if (count >= iterations) return;

		const winnerIndex = Math.floor(Math.random() * numberOfContestants);
		const spanneke = document.createElement('span');
		personArray[winnerIndex].append(spanneke);
		scores[winnerIndex]++;
		count++;
		requestAnimationFrame(tick);
	};

	tick();
}

document.getElementById('start').addEventListener('click', () => {
	init();
});
