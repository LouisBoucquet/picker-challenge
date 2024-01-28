function init() {
	const progressBars = [...document.getElementsByClassName('progress-bar')];
	const progressInfos = [...document.getElementsByClassName('progress-info')];

	const contestants = ['Yannick', 'Torn', 'Ward'];
	const scores = progressBars.map(() => 0);

	const tick = () => {
		scores.forEach((_, i) => {
			scores[i] += Math.random() * 0.1;
			progressBars[i].style.width = `${scores[i]}%`;
			progressInfos[i].innerText = `${contestants[i]} (${scores[i].toFixed(1)}%)`
		});

		if (Math.max(...scores) < 100)
			requestAnimationFrame(tick);
	};

	tick();
}

document.getElementById('start').addEventListener('click', init);
