async function getUserInfo() {
    const response = await fetch(`https://api.github.com/users/${username}`);
    const user = await response.json();
    const aboutSection = document.querySelector('#about');

    aboutSection.innerHTML += `
        <p>GitHub Username: ${user.login}</p>
        <p>Public Repos: ${user.public_repos}</p>
        <p>Followers: ${user.followers}</p>
        <p><a href="${user.html_url}" target="_blank">Visit GitHub Profile</a></p>
    `;
}

getUserInfo();
