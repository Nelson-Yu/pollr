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


$("#startbutton").click(function(){
  $("#landing").slideToggle(400, "swing");
  $("#createpoll").slideToggle(400, "swing");
  $(".question").select();
});


$("#createpollbutton").click(function(){
  $("#createpoll").slideToggle(400, "swing");
  $("#userpage").slideToggle(400, "swing");
  $("#name").select();
});

$("#createuserbutton").click(function(){
  $("#userpage").slideToggle(400, "swing");
  $("#adminpage").slideToggle(400, "swing");
  // $("#votelinkbox").append("<a href=\"http://design.optimus.com/projects?currentPage=2\">Next Page</a>")
});



$("#sortable").sortable({
  cursor: "move",
  axis: "y"
});
$("#sortable").disableSelection();

$("#submitvotebutton").click(function(){
  $("#votepage").slideToggle(400, "swing");
  $("#thankyou").slideToggle(400, "swing");

});
});
