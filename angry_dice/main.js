var die1 = new Die(1);
var die2 = new Die(2);

var round1 = new Round(1, 3);
var round2 = new Round(2, 7);
var round3 = new Round(3, 11);

var dieList = [die1, die2];
var rollList = [die1, die2];
var currentRound = round1


function Round(num, sum) {
    this.num = num;
    this.complete = false
    this.sum = sum
}

function Die(id) {
    this.number = id;
    this.held = false;
    this.value = 3;
    this.roll = function() {
        if (this.held === false) {
            this.value = Math.floor(Math.random() * 6) + 1;
        }
    }
}

// Starts the game with blank Holds
$('.btn--radius')[0].classList.remove("held")
$('.btn--radius')[0].innerText = "HOLD"

function setup() {
    var hold = $('.btn--radius');
    var instruct = $('#instructionsList')
    hold[0].classList.remove("held")
    hold[0].innerText = "HOLD"
    instruct.empty()
    instruct.append('<div class="box play" id="roundone" >Round One: Roll a combination of 1 and 2</div>')
    instruct.append('<div class="box play" id="roundtwo" >Round Two: Roll an Angry Face and a 4</div>')
    instruct.append('<div class="box play" id="roundthree" >Round Three: Roll a combination of 5 and 6</div>')
    $("#roundone").css(
        "font-weight", "900",
    );
    $("#roundtwo").css(
        "background", "gray"
    );
    $("#roundthree").css(
        "background", "gray"
    )

}

setup()


// checks for the word "Held" to add the Held class or not
function holdCheck(elem){
    if (elem.classList.value.includes("held") === true) {
        elem.innerText = "HOLD";
        elem.classList.remove('held')
    } else {
        elem.innerText = "HELD";
        elem.classList.add('held')
    }
};

// Makes the Die.held true or false
function holdDie() {
    die1.held = $('#hold1')[0].classList.value.includes("held") === true;
    die2.held = $('#hold2')[0].classList.value.includes("held") === true;

}

// ROLL
$('#roll').click( function() {
    die1.roll();
    die2.roll();
    updateImage();
    if (die1.value === 3 && die2.value === 3) {
        round1.complete = false;
        round2.complete = false;
        round3.complete = false;
        setup()
    } else {
        roundCheck();
        // doubleAngry();
    }
});

$('.btn--radius').click(function () {
    var num = $(this).attr('id').slice(-1);
    if (num === "1" && die1.value === 6) {
    } else if (num === "2" && die2.value === 6) {
    } else {
        holdCheck(this);
        holdDie(this)
    }
});

function updateImage() {
    $('#die1').find('> img').attr("src", "img/" + die1.value + ".png")
    $('#die2').find('> img').attr("src", "img/" + die2.value + ".png")
}


function roundOne() {
    if (die1.value + die2.value === round1.sum) {
        round1.complete = true
    }
}

function roundTwo() {
    if (die1.value === 4 || die2.value === 4) {
        if (die1.value === 3 || die2.value === 3) {
            if (round1.complete === true) {
                round2.complete = true
            }
        }
    }
}

function roundThree() {
    if (die1.value + die2.value === round3.sum && round2.complete === true) {
        round3.complete = true
    }
}

function roundCheck() {
    roundOne()
    roundTwo()
    roundThree()
    if (round1.complete === true) {
        $('#roundone').css({
            "backgroundColor": "green",
            "color": "white"
        })
        $('#roundtwo').css({
            "backgroundColor": "white",
        })
    }
    if (round1.complete === true && round2.complete === true) {
        $('#roundtwo').css({
            "backgroundColor": "green",
            "color": "white"
        })
        $('#roundthree').css({
            "backgroundColor": "white",
        })
    }
    if (round2.complete === true && round3.complete === true) {
        $('#roundthree').css({
            "backgroundColor": "green",
            "color": "white"
        })
    }
}





// function doubleAngry() {
//     if (die1.value === 3 && die2.value === 3) {
//         round1.complete = false;
//         round2.complete = false;
//         round3.complete = false;
//     }
// }


// TODO Play again
// TODO animate roll