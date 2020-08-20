var enter = 13;
$("input[type='text']").keypress(function () {
  if ($("input[type='text']").val() === "") {
    enter = null;
  } else {
    enter = 13;
  }
});

$("ul").on("click", "li", function () {
  $(this).toggleClass("completed");
});

$("ul").on("click", "span", function (event) {
  $(this)
    .parent()
    .fadeOut(500, function () {
      $(this).remove();
    });
  event.stopPropagation();
});

$("input[type='text']").keypress(function (event) {
  if (event.which === enter) {
    //   grabbing new todo text from input
    const todoText = $(this).val();
    $(this).val("");
    //   create a new li and add to ul
    $("ul").append(
      "<li><span><i class='far fa-trash-alt'></i></span> " + todoText + "</li>"
    );
  }
});

$(".fa-edit").click(function () {
  $("input[type='text']").fadeToggle(200);
});
