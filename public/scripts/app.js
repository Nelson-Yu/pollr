// require('dotenv').config();
// const knex = require('knex')({
//   client: 'pg',
//   connection: {
//     host : process.env.DB_HOST,
//     user : process.env.DB_USER,
//     password : process.env.DB_PASS,
//     database : process.env.DB_NAME
//   }
// });

$(document).ready(function() {


 const submitCreateButton = () => {
  console.log("submitCreateButton function run")
  $("#createpollbutton").click(function(event) {
    let options = $("#createpoll").serialize();
    console.log("submitCreateButton function finished "+ options);

    $.ajax({
      method: "POST",
      url: "/create",
      data: options,
      dataType: "json",
      success: function(result){
        // console.log("it was success ", result);
        // console.log("Here is the ID: " + result.urlID);
        appendLink(result.urlID);
      },
      error: function(err){
        console.log("we are in an error",err);
      }
    })
  });
 }

  const submitUserButton = () => {
  console.log("submitCreateButton function run")
  $("#createuserbutton").click(function(event) {
    let userInfo = $("#userpage").serialize();
    console.log("submitCreateButton function finished"+ userInfo);

    $.ajax({
      method: "POST",
      url: "/user",
      data: userInfo,
      dataType: "json",
      success: function(result){
        console.log("it was success ",result);
      },
      error: function(err){
        console.log("we are in an error",err);
      }
    })
  });
 }


function appendLink(urlID) {
  $("#votelinkbox").append("<a href=http://localhost:8080/vote/" + urlID + ">localhost:8080/vote/" + urlID + "</a>")
  $("#resultlinkbox").append("<a href=http://localhost:8080/result/" + urlID + ">localhost:8080/result/" + urlID + "</a>")
}



  submitCreateButton();
  submitUserButton();

// Landing page functionality/event handlers
// Clicking 'start' button slide toggles away front page and slides in create poll form
  $("#startbutton").click(function(){
    $("#landing").slideToggle(200, "swing");
    $("#createpoll").slideToggle(200, "swing");
    $(".question").select();
  });

// Clicking 'create poll' button slide toggles away poll form and slides in admin form
  $("#createpollbutton").click(function(){
    $("#createpoll").slideToggle(200, "swing");
    $("#userpage").slideToggle(200, "swing");
    $("#name").select();
  });

// Clicking 'submit' button slide toggles away admin form and slides in admin results/vote links
  $("#createuserbutton").click(function(){
    $("#userpage").slideToggle(200, "swing");
    $("#adminpage").slideToggle(200, "swing");
    // $("#votelinkbox").append("<a href=\"http://design.optimus.com/projects?currentPage=2\">Next Page</a>")
  });

// Vote page functionality
// Drag and droppable options only vertically

  $("#sortable").sortable({
    axis: 'y'
  });

  $("#sortable").disableSelection();

// Submits sortable order into an array and posts it to be requested in server.js
  $("#submitvotebutton").click(function(event) {
    let arr = []
    arr = $('#sortable').sortable('toArray', {attribute: 'value'})

    console.log(arr)

    $.ajax({
      method: "POST",
      url: "/vote/:id",
      data: {result: arr},
      success: function(result){
        console.log("it was success ", results);
      },
      error: function(err){
        console.log("we are in an error",err);
      }
    })
  })


// Clicking Vote button slide toggles away ranker and slides in thank you message
  $("#submitvotebutton").click(function(){
    $("#votepage").slideToggle(200, "swing");
    $("#thankyou").slideToggle(200, "swing");

  });


});
