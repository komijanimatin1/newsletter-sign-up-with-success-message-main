const emailInput = document.querySelector('.email') as HTMLInputElement | null;
const submitBtn = document.querySelector('.button') as HTMLButtonElement | null;
const formLabel = document.querySelector('.formLabel') as HTMLDivElement | null;
const text = document.getElementById('text') as HTMLDivElement | null;
const design = document.getElementById('design') as HTMLDivElement | null;
const container = document.querySelector('body div') as HTMLDivElement | null;

//checking validations from DOM
if (emailInput && submitBtn && formLabel && text && design && container) {
    var clicked: boolean = false;
    var hasError: boolean = false;

    let errorMassage = document.createElement('p');

    submitBtn.addEventListener('click', (e) => {
        e.preventDefault();

        emailInput.style.borderColor = 'hsl(0, 0%, 80%)';
        emailInput.style.color = 'black';
        errorMassage.remove();
        hasError = false;
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
        } else {
            //saving in user e-mail
            var userEmail: string = emailInput.value;

            // make a blank container
            clicked = false;
            text.remove();
            design.remove();
            container.classList.add('successMassage');
            // new elements for success massage

            //check image
            let checkImg = document.createElement('img') as HTMLImageElement;
            checkImg.src = './assets/images/icon-success.svg';

            // Label of success massage
            let successLabel = document.createElement('h1');
            successLabel.innerHTML = 'Thanks for subscribing!';

            //description of success massage
            let description = document.createElement('p');
            description.innerHTML = 'A confirmation email has been sent to <p class="userEmail">' + userEmail + '</p>. Please open it and click the button inside to confirm your subscription.';

            //Dismiss button
            let dismissBtn = document.createElement('button');
            dismissBtn.innerHTML = 'Dismiss message';
            dismissBtn.classList.add('button');

            //append elements to success massage div
            container.append(checkImg, successLabel, description, dismissBtn);

            //dismiss button Performance

            dismissBtn.addEventListener('click', (event) => {
                event.stopPropagation();
                container.innerHTML = '';
                container.classList.remove('successMassage');
                container.append(text, design);
            })

        }


    });

    emailInput.addEventListener('focus', () => {
        if (clicked) {
            emailInput.style.borderColor = 'hsl(4, 100%, 67%)';
        }
    });
}