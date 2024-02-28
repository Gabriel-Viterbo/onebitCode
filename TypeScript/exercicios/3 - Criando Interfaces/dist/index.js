"use strict";
const users = [];
async function fetchUserInfo(username) {
    try {
        const response = await fetch(`https://api.github.com/users/${username}`, {
            method: 'GET',
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const { id, login, name, bio, public_repos, repos_url } = await response.json();
        users.push({ id, login, name, bio, public_repos, repos_url });
    }
    catch (error) {
        throw new Error(`There has been a problem with your fetch operation: ${error}`);
    }
}
async function fetchUserRepos(url) {
    try {
        const response = await fetch(url, {
            method: 'GET',
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const repos = await response.json();
        console.log(repos);
    }
    catch (error) {
        throw new Error(`There has been a problem with your fetch operation: ${error}`);
    }
}
async function showAllUsers() {
    users.forEach((user) => console.log(user));
}
async function sumAllRepos() {
    console.log(users.reduce((acc, user) => acc + user.public_repos, 0));
}
async function mostFiveRepos() {
    users.sort((a, b) => b.public_repos - a.public_repos);
    console.log(users);
    console.log(users.length);
    for (let index = 0; index < users.length; index++) {
        if (index <= 4) {
            console.log(`${index + 1}º: ${users[index].name}`);
        }
    }
}
async function run() {
    await fetchUserInfo('Gabriel-Viterbo');
    await fetchUserInfo('luan-jesus');
    await fetchUserInfo('Salgaritimo');
    await fetchUserInfo('azevedovinicius');
    await mostFiveRepos();
}
run();
