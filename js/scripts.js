$(document).ready(function(){
  $("form").submit (function(event){
    event.preventDefault();
    var input1 = parseInt($("input#input1").val());
    var input2 = parseInt($("input#input2").val());
    var inputArray = [input1, input2];

    for (var total = 0; total <= input1; total += input2){
     $(".output").append("<li>" + total + "</li>");
    }

  });
});
