//Github username
const username = 'nursultanadilbekov';

getUserInfo();

getRepos();

//Function to get respository from github account by using api, by method fetch

async function getRepos() {
    const response = await fetch(`https://api.github.com/users/${username}/repos`);
    const repos = await response.json();
    const portfolioContainer = document.querySelector('.portfolio-items');

    repos.forEach((repo, index) => {
        const repoItem = document.createElement('div');
        repoItem.classList.add('portfolio-item');
        const repoImage = `img\${repo.name}.jpeg`;

        repoItem.innerHTML = `
            <img src="${repoImage}" alt="${repo.name} image" style="width:150px; height:150px;">
            <h3>${repo.name}</h3>
            <p>${repo.description || 'No description available'}</p>
            <button><a href="${repo.html_url}" target="_blank">Go to GITHUB</a></button>
        `;
        portfolioContainer.appendChild(repoItem);
    });
}

//Function to get user information from github account by using api, by method fetch

async function getUserInfo() {
    const response = await fetch(`https://api.github.com/users/${username}`);
    const user = await response.json();
    const userInfoSection = document.querySelector('#user-data');

    userInfoSection.innerHTML = `
        <img src="${user.avatar_url}" alt="Avatar" class="avatar">
        <p><strong>GitHub Username:</strong> ${user.login}</p>
        <p><strong>Public Repos:</strong> ${user.public_repos}</p>
        <p><strong>Followers:</strong> ${user.followers}</p>
        <p><a href="${user.html_url}" target="_blank">Visit GitHub Profile</a></p>
    `;
}

//Nightmode

function toggleNightMode() {
    document.body.classList.toggle('dark-theme');
    document.querySelectorAll('header, nav, .container, footer, input, button').forEach(el => {
        el.classList.toggle('dark-theme');
    });

    const themeIcon = document.getElementById('theme-icon');
    if (document.body.classList.contains('dark-theme')) {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
    } else {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    }
}

//Submit button's funtion

function handleSubmit(event) {
    event.preventDefault();
    const question = document.getElementById('question').value;
    if (question) {
        alert(`You asked: ${question}`);
    } else {
        alert('Please enter a question.');
    }
}