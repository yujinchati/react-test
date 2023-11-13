/* 클릭 이벤트 */
const btns = document.querySelectorAll('li');

btns.forEach((btn, idx) => {
	btn.addEventListener('click', (e) => {
		btns.forEach((btn) => btn.classList.remove('on'));
		btns[idx].classList.add('on');
	});
});
