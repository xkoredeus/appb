const shareButton = document.querySelector('.share-button');
const url = window.location.href;

shareButton.addEventListener('click', event => {
    event.preventDefault();
    if(navigator.share) {
        navigator.share({
            title: 'Appbonus — качай приложения за деньги!',
            url: url
        }).then(() => {
            console.log('Thanks for sharing!');
        })
            .catch(console.error);
    }
});