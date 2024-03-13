const users = [
    { userid: 'admin', password: 'abc123' }
];

function logintest() {
    let writtenUsername = document.getElementById('username').value;
    let writtenPassword = document.getElementById('password').value;

    for (let i = 0; i < users.length; i++) {
        if (writtenUsername === users[i].userid && writtenPassword === users[i].password) {
            alert("Login successful!");
            return;
        }
    }
    alert("Invalid username or password.");
}

