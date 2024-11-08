document.getElementById('startButton').addEventListener('click', startCountdown);

let rocketImage = new Image();
rocketImage.src = 'https://img.freepik.com/free-vector/rocket-spaceship-cartoon-vector-icon-illustration-science-technology-icon-concept-isolated-flat_138676-9714.jpg';  // Replace with your rocket image path
let rocketY = 150;  
let rocketCanvas = document.getElementById('rocketCanvas');
let ctx = rocketCanvas.getContext('2d');



rocketImage.onload = function() {
    ctx.drawImage(rocketImage, rocketCanvas.width / 2 - rocketImage.width /2 , rocketY);
};

function startCountdown() {
    let countdownElement = document.getElementById('countdown');
    let countdown = 10;
    countdownElement.innerText = countdown;

    const countdownInterval = setInterval(() => {
        countdown--;
        countdownElement.innerText = countdown;

        if (countdown <= 0) {
            clearInterval(countdownInterval);
            blastOff();
        }
    }, 1000);
}

function blastOff() {
    const countdownElement = document.getElementById('countdown');
    countdownElement.innerText = "blast off!!! woohooo!! what a thrill";

    
    animateRocket();
}


function animateRocket() {
    if (rocketY > -1000) { 
        ctx.clearRect(0, 0, rocketCanvas.width, rocketCanvas.height);  
        ctx.drawImage(rocketImage, rocketCanvas.width / 2 - rocketImage.width / 2, rocketY);
        rocketY -= 5; 
        requestAnimationFrame(animateRocket);
    }
}
