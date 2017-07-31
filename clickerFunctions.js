/**
 * Created by Joshi on 7/29/2017.
 */

function showContact() {
    document.getElementById("textarea1").innerHTML =
        "<h3>Email:</h3><h3 onclick='redirect()'>Joshua.Hughes08@Gmail.com</h3><br>";

}

function showBio() {
    document.getElementById("textarea1").innerHTML =
        "<p> Born and raised in Oregon, Josh currently resides in Portland, Oregon with his wife Samm Saxby. </p>" +
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
        "<div id='board'></div>";
}
function redirect()
{
    window.location.href = "mailto:Joshua.Hughes08@gmail.com";
}