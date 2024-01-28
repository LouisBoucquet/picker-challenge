function init() {
	const persons = document.getElementsByClassName('person');
	const personArray = Array.from(persons);
	const numberOfContestants = Array.from(persons).length;
	const scores = Array.apply(null, Array(numberOfContestants)).map(() => 0);

	const tick = () => {
		if (Math.max(...scores) >= 100) return;

		const winnerIndex = Math.floor(Math.random() * numberOfContestants);
		const span = document.createElement('span');
		personArray[winnerIndex].append(span);
		scores[winnerIndex]++;

		requestAnimationFrame(tick);
	};

	tick();
}

document.getElementById('start').addEventListener('click', init);
