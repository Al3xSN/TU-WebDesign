const firstButton = document.querySelector(".first-btn");
const secondButton = document.querySelector(".second-btn");
const thirdButton = document.querySelector(".third-btn");
const header = document.querySelector('header');

const pureFuncs = {
    replacingHeaderImage: (classList) => {
        if (!header.classList.contains(classList)) {
            header.classList.replace(header.classList, classList);
            header.animate([{ opacity: '0.6' }, { opacity: '1' }], {
                duration: 1200,
            });
        }
    },
    maniplatingClasses: (firstRemovebleButton, secondRemovebleButton, firstToggleButton) => {
        pureFuncs.removeClass(firstRemovebleButton, 'active');
        pureFuncs.removeClass(secondRemovebleButton, 'active');
        pureFuncs.toggleClass(firstToggleButton, 'active');
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
        pureFuncs.replacingHeaderImage('first-header');

        if (!firstButton.classList.contains('active')) {
            pureFuncs.maniplatingClasses(secondButton, thirdButton, firstButton);
        }
    });

    secondButton.addEventListener('click', () => {
        pureFuncs.replacingHeaderImage('second-header');

        if (!secondButton.classList.contains('active')) {
            pureFuncs.maniplatingClasses(firstButton, thirdButton, secondButton);
        }
    });

    thirdButton.addEventListener('click', () => {
        pureFuncs.replacingHeaderImage('third-header');

        if (!thirdButton.classList.contains('active')) {
            pureFuncs.maniplatingClasses(firstButton, secondButton, thirdButton);
        }
    });
};
init();