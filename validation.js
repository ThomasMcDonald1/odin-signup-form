var password = document.querySelector('#password');
var confirmPassword = document.querySelector('#confirm-password');
var form = document.querySelector('#signup-form');
var message = document.querySelector('#pass-error');

var valid = false;

password.addEventListener('input', function()
{
    validatePassword();
});

confirmPassword.addEventListener('input', function()
{
    validatePassword();
});

form.addEventListener('submit', function(event)
{
    if (!valid)
    {
        event.preventDefault();
    }
    else
    {
        window.open('https://www.youtube.com/watch?v=pIgZ7gMze7A&ab_channel=WhamVEVO', '_blank');
    }
});

function validatePassword()
{
    if (password.checkValidity()) { password.style.border = "1px solid #159660"; }
    else { password.style.border = "1px solid #af3c07"; }

    if (password.checkValidity() && confirmPassword.value === password.value) 
    {
        confirmPassword.classList.remove('invalid');
        confirmPassword.classList.add('valid');
        confirmPassword.style.border = "1px solid #159660";
        message.style.visibility = "hidden";
        valid = true;
    } 
    else if (confirmPassword.value !== password.value) 
    {
        
        confirmPassword.classList.remove('valid');
        confirmPassword.classList.add('invalid');
        confirmPassword.style.border = "1px solid #af3c07";
        message.textContent = "Please input the same password.";
        message.style.visibility = "visible";
        valid = false;
    }
}