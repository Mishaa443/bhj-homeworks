let modalMain = document.querySelector('#modal_main');
let modalCloses = Array.from(document.querySelectorAll('div.modal__close'));
let showSuccess = document.querySelector('.show-success');
let modalSuccess = document.querySelector('#modal_success');
modalMain.className = 'modal modal_active';


for (let modalClose of modalCloses) {
	modalClose.onclick = function () {
		let parent =  modalClose.closest('.modal')
		if (parent != null ) {
			modalMain.className = 'modal';	
			modalSuccess.className = 'modal';
		}
	}
}


showSuccess.onclick = function () {
	modalMain.className = 'modal';
	modalSuccess.className = 'modal modal_active';
}

