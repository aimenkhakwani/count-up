$(document).ready(function(){
  $("form").submit (function(event){
    event.preventDefault();
    var countTo = parseInt($("input#input1").val());
    var countBy = parseInt($("input#input2").val());

    for (var index = countBy; index <= countTo; index += countBy){
     $(".output").append("<li>" + index + "</li>");
    }

  });
});
