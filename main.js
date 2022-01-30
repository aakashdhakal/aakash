let calcScrollValue = () => {
	let scrollProgress = document.getElementById("progress");
	let progressValue = document.getElementById("progress-value");
	let pos = document.documentElement.scrollTop;
	let calcHeight =
		document.documentElement.scrollHeight -
		document.documentElement.clientHeight;
	let scrollValue = Math.round((pos * 100) / calcHeight);
	if (pos > 100) {
		scrollProgress.style.display = "grid";
	} else {
		scrollProgress.style.display = "none";
	}
	scrollProgress.addEventListener("click", () => {
		document.documentElement.scrollTop = 0;
	});
	scrollProgress.style.background = `conic-gradient(#0A2A12 ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
};
window.onscroll = calcScrollValue;
window.onload = calcScrollValue;

var Tawk_API = Tawk_API || {},
	Tawk_LoadStart = new Date();
(function () {
	var s1 = document.createElement("script"),
		s0 = document.getElementsByTagName("script")[0];
	s1.async = true;
	s1.src = 'https://embed.tawk.to/61f2c971b9e4e21181bc3c1b/1fqe65pnm';
	s1.charset = 'UTF-8';
	s1.setAttribute('crossorigin', '*');
	s0.parentNode.insertBefore(s1, s0);
})();


document.addEventListener('DOMContentLoaded', () => {
	document.getElementById('nav-mode_switch').addEventListener('click', () => {
		document.body.classList.toggle('dark');

		localStorage.setItem(
			'theme',
			document.body.classList.contains('dark') ? 'dark' : 'light'
		);
	});

	if (localStorage.getItem('theme') === 'dark') {
		document.body.classList.add('dark');
	}
});


