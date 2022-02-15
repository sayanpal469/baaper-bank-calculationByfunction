document.getElementById('login-submit').addEventListener(
    'click',

    function () {
        const emailField = document.getElementById('user-email');
        const userEmail = emailField.value

        const passwordField = document.getElementById('user-password');
        const userPassword = passwordField.value

        if (userEmail == '123@gmail.com' && userPassword == '123') {
            window.location.href = 'bank-site.html'
        } else {
            alert(
                "user- 123@gmail.com, password- 123"
            )
        }
    }
)