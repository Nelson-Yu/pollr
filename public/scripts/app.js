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

const createPollMaker = (pollMaker) => {

}

$(() => {
  $(".drag-drop").sortable({
    axis: "y",
    revert: true,
    scroll: false,
    placeholder: "sortable-placeholder",
    cursor: "move"

    start: function(e, ui) {
      ui.helper.addClass("exclude-me");
      $(".drag-drop .option:not(.exclude-me)")
        .css("visibility", "hidden");
      ui.helper.data("clone").hide();
      $(".cloned-slides .option").css("visibility", "visible");
    },

    stop: function(e, ui) {
      $(".drag-drop .option.exclude-me").each(function() {
        var item = $(this);
        var clone = item.data("clone");
        var position = item.position();

        clone.css("left", position.left);
        clone.css("top", position.top);
        clone.show();

        item.removeClass("exclude-me");
      });

      $(".drag-drop .option").each(function() {
        var item = $(this);
        var clone = item.data("clone");

        clone.attr("data-pos", item.index());
      });

      $(".drag-drop .option").css("visibility", "visible");
      $(".cloned-slides .option").css("visibility", "hidden");
    },

    change: function(e, ui) {
      $(".drag-drop .option:not(.exclude-me)").each(function() {
        var item = $(this);
        var clone = item.data("clone");
        clone.stop(true, false);
        var position = item.position();
        clone.animate({
          left: position.left,
          top: position.top
        }, 200);
      });
    }
  });

  $(".option").each(function(i) => {
    const item = $(this);
    const item_clone = item.clone();
    item.data("clone", item_clone);
    var position = item.position();
    item_clone
    .css({
      left: position.left,
      top: position.top,
      visibility: "hidden"
    })
      .attr("data-pos", i+1);

    $("#cloned-slides").append(item_clone);
  });

})

