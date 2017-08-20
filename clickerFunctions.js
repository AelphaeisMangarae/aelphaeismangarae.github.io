/**
 * Created by Joshi on 7/29/2017.
 */

function showContact() {
    document.getElementById("textarea1").innerHTML =
       

}

function showBio() {
    document.getElementById("textarea1").innerHTML =
        "<p> Born and raised in Oregon. </p>" +
        "<p>Together they write things, watch things, and fix things.</p>";

}
function showGame() {
    document.getElementById("textarea1").innerHTML =
        "    <h1>Splatter the Ants!</h1>" +
       " <h3>Too many ants in your house? Take out your aggression here!</h3>" +
    "<table id='pick'>"+
        "<tr>"+
        "<th>How many ants?</th>"+
    "<td><input type='text' id='userInput'></input></td>"+
        "</tr>"+
        "<tr>" +
        "<td></td>" +
        "<td><input type='button' value='Start' onclick='startGame();'></input></td>" +
        "</tr>" +
        "</table>" +
        "<span>Splatter Count: </span><span id='count'></span>" +
        "<br>" +
        "<span>Splatter Percent: </span><span id='percent'></span>" +
            "<br><br><input type='button' value='Restart' onclick='restartGame();'> </input>" +
        "<div id='board'></div>";
}
function redirect()
{
    window.location.href = "";
}
