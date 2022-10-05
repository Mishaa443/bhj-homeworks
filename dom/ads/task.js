let banners = document.getElementsByClassName("rotator");

[...banners].forEach(banner => {
	let bannerList = banner.getElementsByClassName("rotator__case");

	const tick = index => {
    [...bannerList].forEach(element => {
			element.classList.remove("rotator__case_active");
		});

		index = bannerList[index].nextElementSibling ? index + 1 : 0;
		bannerList[index].classList.add("rotator__case_active");

		setTimeout(tick, 1000, index);
	};

	setTimeout(tick, 0, 0);
});