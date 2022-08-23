const content = document.querySelector('.content');
const g_Button = document.querySelector('.button');

g_Button.addEventListener('click', generateJoke);

generateJoke();

async function generateJoke() {
    const jokeRes = await fetch('https://icanhazdadjoke.com/', {
        headers: {
            'Accept': 'application/json'
        }
    });
    const joke = await jokeRes.json();
    content.innerText =joke.joke;
};

