export function getAuthForm() {
    return `
        <form class="mui-form" id="auth-form">
                <div class="mui-textfield mui-textfield--float-label">
                    <input type="email" id="email">
                    <label for="email">Email</label>
                </div>
                <div class="mui-textfield mui-textfield--float-label">
                    <input type="password" id="password">
                    <label for="password">Password</label>
                </div>
                <button
                        type="submit"
                        class="mui-btn mui-btn--primary"
                >
                    Sign in
                </button>
            </form>
    `
}

export function authWithEmailAndPassword(email, password) {
    const apiKey = 'AIzaSyD1zhlvGuxPfB998KWR-5cwRkeQh8P91EU'
    return fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithCustomToken?key=${apiKey}`, {
        method: 'POST',
        body: JSON.stringify({
            email, password,
            returnSecureToken: true
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(data => console.log(data))

}