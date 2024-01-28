function init() {
	const persons = document.getElementsByTagName('span');
	const personArray = Array.from(persons);
	const numberOfContestants = personArray.length;
	const scores = personArray.map(() => 0);

	const tick = () => {
		if (Math.max(...scores) >= 100) return;

		const winnerIndex = Math.floor(Math.random() * numberOfContestants);
		scores[winnerIndex]++;
		personArray[winnerIndex].style.width = `${scores[winnerIndex]}%`;

		requestAnimationFrame(tick);
	};

	tick();
}

document.getElementById('start').addEventListener('click', init);
