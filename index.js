function init() {
	const persons = document.getElementsByClassName("person");
	const personArray = Array.from(persons);
	const max = Array.from(persons).length;
	const iterations = 3000;
	let count = 0;

	const iterator = setInterval(() => {
		if (count < iterations) {
			let winner = Math.ceil(Math.random() * max);
			winner = winner - 1;
			const spanneke = document.createElement("span");
			personArray[winner].append(spanneke);
			personArray[winner].setAttribute(
				"data-total",
				personArray[winner].getElementsByTagName("span").length
			);
			count++;
		} else {
			clearInterval(iterator);
		}
	}, 10);
}

document.getElementById("start").addEventListener("click", () => {
	init();
});