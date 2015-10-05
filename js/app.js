
$(document).ready(function () {
   $("#inputNumber").keydown(function (event) {
      
       if (event.which == 13){
       event.preventDefault();
        fizzbuzz();
     }
     });//end of keydown function
   
        $("#bnPlay").click(function() {
          fizzbuzz();
       });
       
   function fizzbuzz(){
   var number = $("input").val();
    if ($.trim(number)=='' || isNaN (number)){
          alert ("not a number, please enter a number.");
     } else{
         for (var i = 1; i <= number; i++) {
          if (i % 3 == 0 && i % 5 == 0) {
                $("#fbList").append("<li class='fb'> FizzBuzz </li>")
            } else if (i % 3 == 0) {
                $("#fbList").append("<li> Fizz </li>")
            } else if (i % 5 == 0) {
                $("#fbList").append("<li> Buzz</li>")
            } else {
                $("#fbList").append("<li>" + i + "</li>")
            }
        };/
      }
   }
   
   $("#bnReset").click(function(){
      event.preventDefault();
      $('ul').empty();
   });
   
});