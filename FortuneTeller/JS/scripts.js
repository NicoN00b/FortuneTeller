


$(document).ready(function(){
  $("form#future-survey").submit(function(event){
    event.preventDefault();
    $("#quiz-responses").show();


    // function updateSum() {
    //  var total = 0;
    //  $(".sum:checked").each(function(i, n) {total += parseInt($(n).val());})
    //  $("#quiz-responses").val(total);
    //
    //  $("input.sum").change(updateSum);
    // updateSum();
    // }

    var total = 0;
    var goodAmount = [];

    $("input:checkbox[name=good-luck]:checked").each(function(){
      var goodLuckAmount = parseInt($(this).val());
      total += goodLuckAmount
        // goodAmount.push(goodLuckAmount);
        //goodAmount.forEach(function(luckySpot){
        //return total += luckySpot;
      });



      // for (var i = 0; i <= goodAmount.length; i += 1){
      //   total += goodAmount[i];
      //
      //   console.log(goodAmount)
      // }


      // var totalLuckyNumber = []
      // goodAmount.forEach(function(number){
      //   totalLuckyNumber.push()
      // }

      console.log(total);
      //   $('#quiz-responses').append(goodLuckAmount + "<br>");
      // });
      // $("#quiz-responses").show();
      // $("input:checkbox[name=bad-luck]:checked").each(function(){
      var badLuckAmount = parseInt($(this).val());
      //   $('#quiz-responses').append(badLuckAmount + "<br>");
      // });
      $('#future-survey').hide();
    });
  });
