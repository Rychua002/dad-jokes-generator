
document.querySelector('.button').addEventListener('click', function(){

    generateJoke();
    
});




async function generateJoke() {
    const jokeRes = await fetch('https://icanhazdadjoke.com/', {
        headers: {
            'Accept': 'application/json'
        }
    });
    const joke = await jokeRes.json()
    document.body.style.backgroundImage = 'url("https://source.unsplash.com/1024x768?laughing")';
    document.querySelector('.content').innerText =joke.joke;
};
