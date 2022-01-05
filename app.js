const header = document.querySelector('header');
const btns = document.querySelectorAll('button');
const formSubmitBtn = document.querySelector(".form-btn");
const formFirstName = document.querySelector(".first-name");
const formLastName = document.querySelector(".last-name");
const formEmail = document.querySelector(".email");
const formTxtArea = document.querySelector(".form-txtarea");

const slideshowController = () => {
    btns.forEach(btn => {
        btn.addEventListener('click', () => {
            header.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(./resources/${btn.dataset.type}.jpg)`;
            header.animate([{ opacity: '0.6' }, { opacity: '1' }], {
                duration: 1200,
            });

            btns.forEach(button => {
                button.dataset.type !== btn.dataset.type ? button.classList.remove('active') : button.classList.add('active');
            });
        });
    });
};
slideshowController();

const formSubmitController = () => {
    // const users = [];

    formSubmitBtn.addEventListener('click', () => {
        if (formFirstName.value.length < 3 || formLastName.value.length < 3) {
            alert("Too short first name/last name!")
        } // else {
        //     const user = {
        //         firstName: formFirstName.value,
        //         lastName: formLastName.value,
        //         email: formEmail.value,
        //         message: formTxtArea.value
        //     };

        //     users.push(user);
        //     console.log(users);
        // }
    });
};
formSubmitController();