const header = document.querySelector('header');
const firstBtn = document.querySelector(".first-btn");
const secondBtn = document.querySelector(".second-btn");
const thirdBtn = document.querySelector(".third-btn");
const formSubmitBtn = document.querySelector(".form-btn");
const formFirstName = document.querySelector(".first-name");
const formLastName = document.querySelector(".last-name");
const formEmail = document.querySelector(".email");
const formTxtArea = document.querySelector(".form-txtarea");


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
    removeClass: (button, className) => button.classList.remove(className),
    toggleClass: (button, className) => button.classList.toggle(className)
};

const slideshowController = () => {
    firstBtn.addEventListener('click', () => {
        pureFuncs.replacingHeaderImage('first-header');

        if (!firstBtn.classList.contains('active')) {
            pureFuncs.maniplatingClasses(secondBtn, thirdBtn, firstBtn);
        }
    });

    secondBtn.addEventListener('click', () => {
        pureFuncs.replacingHeaderImage('second-header');

        if (!secondBtn.classList.contains('active')) {
            pureFuncs.maniplatingClasses(firstBtn, thirdBtn, secondBtn);
        }
    });

    thirdBtn.addEventListener('click', () => {
        pureFuncs.replacingHeaderImage('third-header');

        if (!thirdBtn.classList.contains('active')) {
            pureFuncs.maniplatingClasses(firstBtn, secondBtn, thirdBtn);
        }
    });
};
slideshowController();

const formSubmitController = () => {
    const users = [];

    formSubmitBtn.addEventListener('click', () => {
        const user = {
            firstName: formFirstName.value,
            lastName: formLastName.value,
            email: formEmail.value,
            message: formTxtArea.value
        };

        users.push(user);
    });
};
formSubmitController();