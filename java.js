const username = 'nursultanadilbekov';

getUserInfo();

getRepos();

async function getRepos() {
    const response = await fetch(`https://api.github.com/users/${username}/repos`);
    const repos = await response.json();
    const portfolioContainer = document.querySelector('.portfolio-items');

    repos.forEach((repo, index) => {
        const repoItem = document.createElement('div');
        repoItem.classList.add('portfolio-item');
        const repoImage = `img/${repo.name}.png`;

        repoItem.innerHTML = `
            <img src="${repoImage}" alt="${repo.name} image" style="width:150px; height:150px;">
            <h3>${repo.name}</h3>
            <p>${repo.description || 'No description available'}</p>
            <button><a href="${repo.html_url}" target="_blank">Go to GITHUB</a></button>
        `;
        portfolioContainer.appendChild(repoItem);
    });
}

async function getUserInfo() {
    const response = await fetch(`https://api.github.com/users/${username}`);
    const user = await response.json();
    const userInfoSection = document.querySelector('#user-data'); // Select the user data section

    userInfoSection.innerHTML = `
        <img src="${user.avatar_url}" alt="Avatar" class="avatar">
        <p><strong>GitHub Username:</strong> ${user.login}</p>
        <p><strong>Public Repos:</strong> ${user.public_repos}</p>
        <p><strong>Followers:</strong> ${user.followers}</p>
        <p><a href="${user.html_url}" target="_blank">Visit GitHub Profile</a></p>
    `;
}

function toggleNightMode() {
    document.body.classList.toggle('night-mode');
    document.querySelectorAll('header, nav, .container, footer, input, button').forEach(el => {
        el.classList.toggle('night-mode');
    });
}

function toggleNightMode() {
    // Toggle night-mode class
    document.body.classList.toggle('dark-theme');
    document.querySelectorAll('header, nav, .container, footer, input, button').forEach(el => {
        el.classList.toggle('dark-theme');
    });

    // Switch between sun and moon icons
    const themeIcon = document.getElementById('theme-icon');
    if (document.body.classList.contains('dark-theme')) {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon'); // Change to sun icon for night mode
    } else {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun'); // Change back to moon icon for light mode
    }
}