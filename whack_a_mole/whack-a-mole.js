var moleList = []; // starts empty, fills with moles
var holeList = []; // gets populated by function startHoleList
var failure = false // end game check, starts as false
var timer;
var score = 0;
var highScore = 0;


// Fills holeList with 0-19 to correspond to the divs
function startHoleList() {
    holeList = []
    for (i = 0; i < 20; i++) {
        holeList.push(i);
    }
}

// Checks if there are any available holes for moles
function failureCheck() {
    if (holeList.length === 0) {
        failure = true
        clearInterval(timer)
        alert("Game Over!  You scored " + score + "!")
        if (score > highScore) {
            highScore = score;
            $('.highScore').html("High Score: " + highScore)
        }
    }
}

// Selects random available hole for a mole to appear
function moleGenerator() {
    holeList = _.shuffle(holeList);
    var moleTile = holeList.pop();
    $('#' + moleTile).css("backgroundImage", "url('mole.jpg')");
    moleList.push(moleTile);
    console.log("holeList: " + holeList);
    console.log("moleList: " + moleList);
    failureCheck()
}

function moleInterval() {
    timer = setInterval(moleGenerator, 100);
}

// Whack. if Mole, add points, remove mole, update hole/mole lists.
$('.tile').click(function () {
    if ($(this).css("backgroundImage").match(/mole.jpg/)) {
        $('#' + this.id).css("backgroundImage", "url('hole.jpg')");
        // console.log("click" + this.id);
        moleList.splice(this.id, 1);
        holeList.push(this.id);
        console.log("molelist: " + moleList);
        console.log("holelist: " + holeList);
        score = score + 50
    } else {
        score = score - 10
    }
    $('#score').html("Score: " + score)
});

// Click start to begin the game
$('#start').click(function () {
    startHoleList();
    moleInterval();
});

// Clears the game
$('#clear').click(function () {
    clearInterval(timer)
    $('.tile').css("backgroundImage", "url('hole.jpg')");
    score = 0;
    $('#score').html("Score: " + score)
    startHoleList()
});