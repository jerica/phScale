
function phAssessment () {
// here is the array of questions
question_array = ["what color is the sky?", "what is your favorite color?"]
scale_array = [
    [
    "<div class='circle'>blue</div>",
    "<div class='circle'>red</div>",
    "<div class='circle'>green</div>",
    "<div class='circle'>yellow</div>",
    "<div class='circle'>orange</div>",
    "<div class='circle'>violet</div>",
    "<div class='circle'>purple</div>",
    "<div class='circle'>black</div>",
    "<div class='circle'>seagreen</div>",
    "<div class='circle'>tan</div>",
    "<div class='circle'>brown</div>",
    "<div class='circle'>white</div>",
    ],[
    "<div class='circle'>blue2</div>",
    "<div class='circle'>red2</div>",
    "<div class='circle'>green2</div>",
    "<div class='circle'>yellow2</div>",
    "<div class='circle'>orange2</div>",
    "<div class='circle'>violet2</div>",
    "<div class='circle'>purple2</div>",
    "<div class='circle'>black2</div>",
    "<div class='circle'>seagreen2</div>",
    "<div class='circle'>tan2</div>",
    "<div class='circle'>brown2</div>",
    "<div class='circle'>white2</div>",
    ]]
    
n = question_array.length
// points are set to 12 * n; n = number of questions
points = 12 * n

$(".points").html(points);
$(".question").show();
$(".scale").show();


for (var i = 0; i < n; i++) {
    $(".question").append(question_array[i]);
    $(".scale").append(scale_array[i])
    $('.scale').on('click', 'circle', function() {
      var input = $(this).val();
    //   for(var i = 0; i < input; i++) {
      alert('You have written inside input field: ' + input + ". This is Alert #" + (i+1))
    //   }
    });
    // var input = $('#myInput').val();
    points = points  - (12 - 9);
    $(".points").html(points);
    // if ( $(".scale").click()  ) {
        
    // }
    // alert(myStringArray[i]);
    //Do something
}

phScore = points / n
if (phScore == 1) {
    $(".points").html("your product has a 100% chance of being really cool");
}else if(phScore < 7){
    $(".points").html("your product has a " + (1 - (phScore/12))*100 + "% chance of being pretty COOL");
}else if(phScore == 7){
    $(".points").html("your product has a 50% chance of being cool");
}else if(phScore > 7){
    $(".points").html("your product has a " + (phScore/12)*100 +"% chance of being too basic; bless your heart");
};
    
}



