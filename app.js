const header = document.querySelector('header');
const btns = document.querySelectorAll('button');
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
    btns.forEach(btn => {
        btn.addEventListener('click', () => {
            if (btn.dataset.type === "s1") {
                pureFuncs.replacingHeaderImage('first-header');
                if (!btns[0].classList.contains('active')) {
                    pureFuncs.maniplatingClasses(btns[1], btns[2], btns[0]);
                }
            } else if (btn.dataset.type === "s2") {
                pureFuncs.replacingHeaderImage('second-header');
                if (!btns[1].classList.contains('active')) {
                    pureFuncs.maniplatingClasses(btns[0], btns[2], btns[1]);
                }
            } else {
                pureFuncs.replacingHeaderImage('third-header');
                if (!btns[2].classList.contains('active')) {
                    pureFuncs.maniplatingClasses(btns[0], btns[1], btns[2]);
                }
            }
        });
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