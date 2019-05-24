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
 const submitCreateButton = () => {
  console.log("submitCreateButton function run")
  $("#createpollbutton").click(function(event) {
    let options = $("#createpoll").serialize();
    console.log("submitCreateButton function finished"+ options);

    $.ajax({
      method: "POST",
      url: "/create",
      data: options,
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

submitCreateButton();




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

$("#createuserbutton").click(function(){
  $("#userpage").slideToggle(200, "swing");
  $("#adminpage").slideToggle(200, "swing");
});



$("#sortable").sortable();
$("#sortable").disableSelection();

$("#submitvotebutton").click(function(){
  $("#votepage").slideToggle(200, "swing");
  $("#thankyou").slideToggle(200, "swing");

});
});
