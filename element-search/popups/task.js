let modalMain = document.querySelector('#modal_main');
let modalCloses = Array.from(document.querySelectorAll('div.modal__close'));
let showSuccess = document.querySelector('.show-success');
let modalSuccess = document.querySelector('#modal_success');
modalMain.className = 'modal modal_active';


for (let modalClose of modalCloses) {
	modalClose.onclick = function () {
		let parent =  this.modalClose.closest('.modal')
		if (parent != null ) {
			modalMain.className = 'modal';
		
	}
	}
}


showSuccess.onclick = function () {
	modalSuccess.className = 'modal modal_active';
}

/*

modalClose[0].onclick = function () {
	modalMain.className = 'modal'
}


showSuccess.onclick = function () {
	modalSuccess.className = 'modal modal_active';
}

modalClose[1].onclick = function () {
	modalSuccess.className = 'modal';
	modalMain.className = 'modal';
}
*/