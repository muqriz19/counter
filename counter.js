var counter;

counter = 0;

var message = document.querySelector('.messages');

var clickAudio = new Audio();
clickAudio.src = 'click.wav';
clickAudio.defaultPlaybackRate = 2.0;

var clickShowcase = new Audio();
clickShowcase.src = 'beep.wav';

document.querySelector('.messages').style.display = 'none';

document.querySelector('.btn-add').addEventListener('click', function(){
    counter++;
    document.getElementById('counter-num').textContent = counter;

    clickAudio.play();

    if 
    (
        counter === 10 ||
        counter === 20 ||
        counter === 30 ||
        counter === 40 ||
        counter === 50 ||
        counter === 60 ||
        counter === 70 ||
        counter === 80 ||
        counter === 90
    ) {
        
        message.style.display = 'block';
        message.textContent = counter + 'th number has reached!';
        clickShowcase.play();

    } else if (counter === 100) {
        message.textContent = counter + 'th number has reached! Congrats! You WIN!';
        clickShowcase.play();
    }

});
