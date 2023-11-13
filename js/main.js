/* 클릭 이벤트 */
const box = document.querySelector('.box');
const btns = document.querySelectorAll('li');

btns.forEach((btn, idx) => {
	btn.addEventListener('click', (e) => {
		btns.forEach((btn) => btn.classList.remove('on'));
		btns[idx].classList.add('on');

		//배경색 변경 이벤트 추가
		const backColor = btns[idx].innerText;
		box.style.backgroundColor = backColor;
	});
});
