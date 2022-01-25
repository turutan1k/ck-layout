//Current year

let currentYear = new Date().getFullYear();
document.getElementById("year").innerHTML = currentYear

//Scroll

const animItems = document.querySelectorAll('.anim-items');

if(animItems.length > 0){
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll(){
        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;
            if(animItemHeight > window.innerHeight){
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }

            if((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)){
                animItem.classList.add('active');
            } else{
                if(!animItem.classList.contains('anim-no-hide')){
                    animItem.classList.remove('active');
                }
            }
        }
    }

    function offset(el) {
        var rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
    }
    setTimeout(() => {
        animOnScroll();
    }, 300);
}

//Button

let buttons = document.getElementsByClassName('personal-page'),
    forEach = Array.prototype.forEach;

forEach.call(buttons, function (b) {
    b.addEventListener('click', addElement);
});

function addElement(e){
    let addDiv = document.createElement('div'),
    mValue = Math.max(this.clientWidth, this.clientHeight),
    rectBtn = this.getBoundingClientRect();
    sDiv = addDiv.style,
    px = 'px';

    sDiv.width = sDiv.height = mValue + px
    sDiv.left = e.clientX - rectBtn.left - (mValue / 2) + px;
    sDiv.top = e.clientY - rectBtn.top - (mValue / 2) + px;


    addDiv.classList.add('pulse');
    this.appendChild(addDiv);


}

//Navigation

const menuLinks = document.querySelectorAll('.menu__link[data-goto]');

if (menuLinks.length > 0) {
	menuLinks.forEach(menuLink => {
		menuLink.addEventListener("click", onMenuLinkClick);
	});

	function onMenuLinkClick(e) {
		const menuLink = e.target;
		if(menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)){
			const gotoBlock = document.querySelector(menuLink.dataset.goto);
			const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;
			
            if(iconMenu.classList.contains('_active')){
                document.body.classList.remove('_lock')
                iconMenu.classList.remove('_active');
                menuBody.classList.remove('_active');
                menuHeader.classList.remove('fixed');
            }



			window.scrollTo({
				top: gotoBlockValue,
				behavior:"smooth"
			});
			e.preventDefault();
		}
	}

}

//menu burger

const iconMenu = document.querySelector('.header__icon');
const menuBody = document.querySelector('.menu__body');
const menuHeader = document.querySelector('.header');
const changeImg = document.querySelector('.header__img')
const headerText = document.querySelector('.header__text');
if (iconMenu){
    iconMenu.addEventListener("click", function(e){
        document.body.classList.toggle('_lock')
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
        menuHeader.classList.toggle('fixed');
    });
}


