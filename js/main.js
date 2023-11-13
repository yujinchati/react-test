const box = document.querySelector('.box');
const btns = document.querySelectorAll('li');

btns.forEach((btn, idx) => {
	btn.addEventListener('click', (e) => {
		//재클릭 방지
		if (e.currentTarget.classList.contains('on')) return;

		btns.forEach((btn) => btn.classList.remove('on'));
		btnClickOn(btns[idx]);
		const backColor = btns[idx].innerText;
		boxColor(backColor);
	});
});

//버튼 활성화 함수
function btnClickOn(e) {
	e.classList.add('on');
}

//배경색 변경 함수
function boxColor(color) {
	box.style.backgroundColor = color;
}
