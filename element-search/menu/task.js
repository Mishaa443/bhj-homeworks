let menuLink = document.querySelectorAll('a.menu__link');
let k = 0;
	for (let i = 0; i < menuLink.length; i++) {

    menuLink[i].onclick = function() {

        let targetItem = menuLink[i].closest('li.menu__item').querySelector('ul.menu_sub');
        if (targetItem !== null && k === 0) {
            targetItem.className += ' menu_active';
            k = 1;
            return false;
        };

        if (targetItem !== null && k === 1) {
            targetItem.className = targetItem.className.replace(' menu_active', '');
            k = 0;
            return false;
        };

    };
};