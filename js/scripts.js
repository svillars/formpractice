$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var dataInput = $("input#data").val();

    $(".data").text(dataInput.toUpperCase());

    $("#uppercase").show();

    event.preventDefault();
  });
});
