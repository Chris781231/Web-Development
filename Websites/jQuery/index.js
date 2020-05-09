//Add Class
$("h1").addClass("big-title margin-50");
$("button").addClass("red");

//Remove Class
$("h1").removeClass("big-title");

//Verifying that an Item Has a Particular Class
console.log("Does 'h1' tag have a 'margin-50' class?\n" + $("h1").hasClass("margin-50"));

//Modifying Text of an Element
$("h1").text("Bye");

//Modifying/Inserting Text and Inner HTML Tag of an Element
$("button").html("<em>Don't Click Me!</em>");

//Modifying attribure
console.log($("img").attr("src"));
$("a").attr("href", "https://www.yahoo.com");
console.log($("h1").attr("class"));

//Eventhandler
$("h1").click(() => {
  $("h1").css("color", "purple");
})

$("button").click(() => {
  $("h1").css("color", "red");
})

$("input").keydown((e) => {
  $("h1").text(e.key);
})

$("h1").on("mouseover", () => {
  $("h1").css("color", "green");
})

$("h1").on("mouseleave", () => {
  $("h1").css("color", "darkgrey");
})

//Add Element
$("h1").before("<button>New</button>");
