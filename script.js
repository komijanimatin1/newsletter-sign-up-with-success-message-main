var emailInput = document.querySelector('.email');
var submitBtn = document.querySelector('.button');
var formLabel = document.querySelector('.formLabel');
var text = document.getElementById('text');
var design = document.getElementById('design');
var container = document.querySelector('body div');
//checking validations from DOM
if (emailInput && submitBtn && formLabel && text && design && container) {
    var clicked = false;
    var hasError = false;
    var errorMassage_1 = document.createElement('p');
    submitBtn.addEventListener('click', function (e) {
        e.preventDefault();
        emailInput.style.borderColor = 'hsl(0, 0%, 80%)';
        emailInput.style.color = 'black';
        errorMassage_1.remove();
        hasError = false;
        if (emailInput.value === '' || !emailInput.checkValidity()) {
            emailInput.style.borderColor = 'hsl(4, 100%, 67%)';
            emailInput.style.color = 'hsl(4, 100%, 67%)';
            clicked = true;
            emailInput.classList.add('email2');
            if (!hasError) {
                hasError = true;
                errorMassage_1.innerHTML = 'Valid email required';
                errorMassage_1.classList.add('emailError');
                formLabel.append(errorMassage_1);
            }
        }
        else {
            //saving in user e-mail
            var userEmail = emailInput.value;
            // make a blank container
            clicked = false;
            text.remove();
            design.remove();
            container.classList.add('successMassage');
            // new elements for success massage
            //check image
            var checkImg = document.createElement('img');
            checkImg.src = './assets/images/icon-success.svg';
            // Label of success massage
            var successLabel = document.createElement('h1');
            successLabel.innerHTML = 'Thanks for subscribing!';
            //description of success massage
            var description = document.createElement('p');
            description.innerHTML = 'A confirmation email has been sent to <p class="userEmail">' + userEmail + '</p>. Please open it and click the button inside to confirm your subscription.';
            //Dismiss button
            var dismissBtn = document.createElement('button');
            dismissBtn.innerHTML = 'Dismiss message';
            dismissBtn.classList.add('button');
            //append elements to success massage div
            container.append(checkImg, successLabel, description, dismissBtn);
            //dismiss button Performance
            dismissBtn.addEventListener('click', function (event) {
                event.stopPropagation();
                container.innerHTML = '';
                container.classList.remove('successMassage');
                container.append(text, design);
            });
        }
    });
    emailInput.addEventListener('focus', function () {
        if (clicked) {
            emailInput.style.borderColor = 'hsl(4, 100%, 67%)';
        }
    });
}
