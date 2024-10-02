const username = 'nursultanadilbekov';

async function getRepos() {
    const response = await fetch(`https://api.github.com/users/${username}/repos`);
    const repos = await response.json();
    const portfolioContainer = document.querySelector('.portfolio-items');

    repos.forEach(repo => {
        const repoItem = document.createElement('div');
        repoItem.classList.add('portfolio-item');
        repoItem.innerHTML = `
            <h3>${repo.name}</h3>
            <p>${repo.description || 'No description available'}</p>
            <button><a href="${repo.html_url}" target="_blank">Go to GITHUB</a></button>
        `;
        portfolioContainer.appendChild(repoItem);
    });
}

getRepos();

