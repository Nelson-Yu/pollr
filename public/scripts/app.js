$(document).ready(function() {

// $(() => {
//   $.ajax({
//     method: "GET",
//     url: "/api/users"
//   }).done((users) => {
//     for(user of users) {
//       $("<div>").text(user.name).appendTo($("body"));
//     }
//   });;
// });

$("#startbutton").click(function(){
  $("#landing").slideToggle(200, "swing");
  $("#createpoll").slideToggle(200, "swing");
  $(".question").select();
});

$("#createpollbutton").click(function(){
  $("#createpoll").slideToggle(200, "swing");
  $("#userpage").slideToggle(200, "swing");
  $("#name").select();
});


});
