const emailInput = document.querySelector('.email') as HTMLInputElement;
const submitBtn = document.querySelector('#text form button') as HTMLButtonElement;
const formLabel = document.querySelector('.formLabel');

var clicked: boolean = false;
var hasError: boolean = false;

let errorMassage = document.createElement('p');

submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    emailInput.style.borderColor = 'hsl(0, 0%, 80%)';
    emailInput.style.color = 'black';
    // formLabel.removeChild(errorMassage);
    errorMassage.remove();
    if (emailInput.value === '' || !emailInput.checkValidity()) {
        emailInput.style.borderColor = 'hsl(4, 100%, 67%)';
        emailInput.style.color = 'hsl(4, 100%, 67%)';
        clicked = true;
        emailInput.classList.add('email2');
        if (!hasError) {
            hasError = true;
            errorMassage.innerHTML = 'Valid email required';
            errorMassage.classList.add('emailError');
            formLabel.append(errorMassage);
        }
    }else {
        clicked=false;
    }

});

emailInput.addEventListener('focus', () => {
    if (clicked) {
        emailInput.style.borderColor = 'hsl(4, 100%, 67%)';
    }
});