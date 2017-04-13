/**
 * Created by Joshua on 4/4/17.
 */
var ANT_PATH = 'images/ant.png';
var SPLAT_PATH = 'images/splat.png';

var SPLATTER_COUNT = 0;
var EXECUTED;

function checkWin() {
    var value = Number(document.getElementById("userInput").value);
    if (SPLATTER_COUNT == value) {
        document.getElementById("count").innerText = "You win!";
    }
    document.getElementById("percent").innerText = String((SPLATTER_COUNT / value) * 100) + "%";
}


function startGame() {
    if (!EXECUTED) {
        var board = $("#board");
        var order = [];
        var value = Number(document.getElementById("userInput").value);
        if (value > 0 && value < 30) {
            for (value > 0; value--;) {
                var ant = $('<img class="ant" id="' + value + '" src=' + ANT_PATH + ' onclick= "splatter(this);"> ');
                $(board).append(ant);
                order.push(value);
            }
            EXECUTED = true;
        }
        if (value >= 30) {
            var error = $("<div>That is too many ants... you can't handle that many ants... I " +
                "can't handle that many ants</div>");
            $(board).append(error);
        }
        $(document).ready(function () {
            moveAnts();

        });
        function position() {

            var h = $("#board").height() - 50;
            var w = $("#board").width() - 50;

            var nh = Math.floor(Math.random() * h);
            var nw = Math.floor(Math.random() * w);

            return [nh, nw];

        }

        function moveAnts() {
            for (var i = 0; i < order.length; i++) {
                var newpos = position();
                var id = order[i];
                $("#" + i).animate({
                        top: newpos[0],
                        left: newpos[1]
                    },
                    5000,
                    function () {
                        moveAnts();
                    })
            }

        }
    }
}
function splatter(el) {
    var id = $(el).attr("id");
    if (document.getElementById(id).className == "ant") {
        document.getElementById(id).src = SPLAT_PATH;
        document.getElementById(id).className = "squished";
        console.log(id);
        SPLATTER_COUNT++;
        document.getElementById("count").innerText = String(SPLATTER_COUNT);
        checkWin()
    }
}


window.addEventListener("onclick",startGame);
