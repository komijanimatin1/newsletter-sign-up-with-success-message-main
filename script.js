var emailInput = document.querySelector('.email');
var submitBtn = document.querySelector('#text form button');
var formLabel = document.querySelector('.formLabel');
var clicked = false;
var hasError = false;
var errorMassage = document.createElement('p');
submitBtn.addEventListener('click', function (e) {
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
    }
    else {
        clicked = false;
    }
});
emailInput.addEventListener('focus', function () {
    if (clicked) {
        emailInput.style.borderColor = 'hsl(4, 100%, 67%)';
    }
});
