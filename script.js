let container = document.querySelector('.container')
let boxes = document.querySelectorAll('.box')
let guessColor = document.querySelector('.guess_color')
let amountOfScore = document.querySelector('.score')
let swap = document.querySelector('.swap')
let reset = document.querySelector('.reset')
let reset_btn = document.querySelector('.reset_btn')
let modal1 = document.querySelector('#id01')
let modal2 = document.querySelector('#id02')
let modal3 = document.querySelector('#id03')
let modal4 = document.querySelector('#id04')
let modal5 = document.querySelector('#id05')
let modal6 = document.querySelector('#id06')
let modal7 = document.querySelector('#id07')
let modal8 = document.querySelector('#id08')
let modal9 = document.querySelector('#id09')
let modal10 = document.querySelector('#id10')
let liveP = document.querySelector('.live_p')
let score = 0;
let guess;
let level;
leftChances = 3;

function generate(a) {
    level = a;
    let displayHex = false;


    for (let i = 0; i < boxes.length; i++) {
        if (i < a) {
            boxes[i].classList.add('addhover')
            var r = Math.floor(Math.random() * 256);
            var g = Math.floor(Math.random() * 256);
            var b = Math.floor(Math.random() * 256);


            boxes[i].style.backgroundColor = `rgb(${r}, ${g}, ${b})`
            boxes[i].style.opacity = '1'
        } else {
            boxes[i].classList.remove('addhover')
            boxes[i].style.opacity = '0'
        }



    }


    let selected = Math.floor(Math.random() * a)
    guess = boxes[selected].style.backgroundColor
    console.log(guess)
    guessColor.innerHTML = "Guess Color: " + guess;



    swap.addEventListener("click", function () {
        if (displayHex) {
            guessColor.innerHTML = "Guess Color: " + guess;
            displayHex = false;

        } else {
            let rgbValues = guess.match(/\d+/g);
            let r0 = parseInt(rgbValues[0]);
            let g0 = parseInt(rgbValues[1]);
            let b0 = parseInt(rgbValues[2])

            var hexColor = "#" + componentToHex(r0) + componentToHex(g0) + componentToHex(b0);

            function componentToHex(c) {
                var hex = c.toString(16);
                return hex.length == 1 ? "0" + hex : hex;
            }
            guessColor.innerHTML = "Guess Color: " + hexColor;
            displayHex = true;

        }

    });

}
reset_btn.addEventListener('click', function () {
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].style.transform = 'rotate(720deg)'
        boxes[i].classList.add('addhover')
        boxes[i].style.transition = '0.8s'

    }
})



function cancelBtn() {

    modal1.style.display = "none";
    modal2.style.display = "none";

}


function cancelBtn2() {
    score = 0;
    guess = 'none'
    leftChances = 3;

    amountOfScore.innerHTML = "Score: " + score;
    guessColor.innerHTML = "Guess Color: " + guess;
    liveP.innerHTML = leftChances;

    modal1.style.display = "none";
    modal2.style.display = "none";
    modal3.style.display = "block";
    level = undefined;

    for (let box of boxes) {
        box.style.backgroundColor = 'white';
        box.style.opacity = 1;
        box.addEventListener('mouseover', function () {
            if (!level) {
                box.style.cursor = 'not-allowed';
                // box.classList.add('hover');
            }
        });

        box.addEventListener('click', function () {
            if (!level) {
                modal4.style.display = "block";
                return;
            }
        });
    }

}



function cancelBtn3() {

    modal4.style.display = "none";

}
function cancelBtn4() {
    modal5.style.display = "none";

}
function cancelBtn5() {
    modal6.style.display = "none";

}
function cancelBtn6() {
    modal3.style.display = "none";
}


for (let box of boxes) {
    box.addEventListener('mouseover', function () {
        if (!level) {
            box.style.cursor = 'not-allowed';
            box.classList.add('hover');
        }
    });

    box.addEventListener('mouseout', function () {
        if (!level) {
            box.style.cursor = 'pointer';
            box.classList.remove('hover');
        }
    });

    box.addEventListener('click', function () {
        if (!level) {
            modal4.style.display = "block";
            return;
        }
        if (this.style.backgroundColor == guess) {
            score += level / 3 * 10;
            modal5.style.display = "block";
            generate(level);
        } else {
            score -= level / 3 * 5;
            leftChances--
            modal6.style.display = "block";

            if (leftChances < 1) {
                modal7.style.display = "block";
            }
        }

        if (score >= 50 && level == 3 ) {
            modal10.style.display = "block";
        }
        if (score >= 100 && level == 6) {
            modal8.style.display = "block";
        }
        if (score >= 200 && level == 9) {
            modal9.style.display = "block";
            modal9.addEventListener("click", function () {
                modal9.style.display = "none";
                modal7.style.display = "none";
                modal6.style.display = "none";
                modal5.style.display = "none";
                modal4.style.display = "none";
                cancelBtn2()
                modal3.style.display = "none";


            })

        }

        liveP.innerHTML = leftChances;
        amountOfScore.innerHTML = "Score: " + score;
    });

}



function cancelBtn7() {
    modal7.style.display = "none";
    modal6.style.display = "none";
    modal5.style.display = "none";
    modal4.style.display = "none";
    modal3.style.display = "none";

    score = 0;
    guess = 'none'
    leftChances = 3;


    amountOfScore.innerHTML = "Score: " + score;
    guessColor.innerHTML = "Guess Color: " + guess;
    liveP.innerHTML = leftChances;


    level = undefined;

    for (let box of boxes) {
        box.style.backgroundColor = 'white';
        box.style.opacity = 1;
        box.addEventListener('mouseover', function () {
            if (!level) {
                box.style.cursor = 'not-allowed';
                box.classList.add('hover');
            } 9
        });

        box.addEventListener('click', function () {
            if (!level) {
                modal4.style.display = "block";
                return;
            }
        });
    }

}

function nextLevel() {
    score = 0;
    guess = 'none'
    leftChances = 3;

    amountOfScore.innerHTML = "Score: " + score;
    guessColor.innerHTML = "Guess Color: " + guess;
    liveP.innerHTML = leftChances;
    generate(level + 3);
    modal8.style.display = "none";
    modal10.style.display = "none";
    modal7.style.display = "none";
    modal6.style.display = "none";
    modal5.style.display = "none";
    modal4.style.display = "none";
    modal3.style.display = "none";
}








