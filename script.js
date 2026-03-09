const signUpButtons = document.querySelectorAll('button'); 

signUpButtons.forEach(button => {
    button.addEventListener('click', function() {
        alert('This site is only for Demo purpose!');
    });
});
