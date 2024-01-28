function init() {
	const personArray = [...document.getElementsByTagName('span')];
	const scores = personArray.map(() => 0);

	const tick = () => {
		if (Math.max(...scores) >= 100) return;

		scores.forEach((_, i) => {
			scores[i] += Math.random() * 0.1;
			personArray[i].style.width = `${scores[i]}%`;
		})

		requestAnimationFrame(tick);
	};

	tick();
}

document.getElementById('start').addEventListener('click', init);
