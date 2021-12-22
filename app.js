const firstButton = document.querySelector(".first-btn");
const secondButton = document.querySelector(".second-btn");
const thirdButton = document.querySelector(".third-btn");
const header = document.querySelector('header');

const pureFunc = {
    replacingHeaderImage: (classList) => {
        if (!header.classList.contains(classList)) {
            header.classList.replace(header.classList, classList);
            header.animate([{ opacity: '0.7' }, { opacity: '1' }], {
                duration: 1200,
            });
        }
    },
    removeClass: (button, className) => {
        button.classList.remove(className);
    },
    toggleClass: (button, className) => {
        button.classList.toggle(className);
    }
}

const init = () => {
    firstButton.addEventListener('click', () => {
        pureFunc.replacingHeaderImage('first-header');

        if (!firstButton.classList.contains('active')) {
            pureFunc.removeClass(secondButton, 'active');
            pureFunc.removeClass(thirdButton, 'active');
            pureFunc.toggleClass(firstButton, 'active');
        }
    });

    secondButton.addEventListener('click', () => {
        pureFunc.replacingHeaderImage('second-header');

        if (!secondButton.classList.contains('active')) {
            pureFunc.removeClass(firstButton, 'active');
            pureFunc.removeClass(thirdButton, 'active');
            pureFunc.toggleClass(secondButton, 'active');
        }
    });

    thirdButton.addEventListener('click', () => {
        pureFunc.replacingHeaderImage('third-header');

        if (!thirdButton.classList.contains('active')) {
            pureFunc.removeClass(firstButton, 'active');
            pureFunc.removeClass(secondButton, 'active');
            pureFunc.toggleClass(thirdButton, 'active');
        }
    });
};
init();