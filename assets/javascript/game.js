$ (function() {

    var randomNum = 0;
    var wins = 0;
    var loses = 0;
    var initScore = 0;
    var jewels = [1,1,1,1];




    genRandomNum(19,120);
    $("#randomNum").text("<h3>" + randomNum + "</h3>");
       for (i=1; i<4; i++) {
           jewels[i]=genRandomNum(1,12);
           console.log("Jewels random nums: " + jewels[i]);    
       }
          // jQuery methods go here...
          $("#wins").text("Wins<br/><h3>" + wins + "</h3>");
          $("#loses").text("Loses<br/><h3>" + loses + "</h3>");
          
   
       function genRandomNum(min, max) {
        var min;
        var max;   
        console.log(min, max);
        var randomNum = 
        Math.floor(Math.random() * (+max - +min)) + +min; 
        console.log("Random # ",randomNum);
        return randomNum;
       }

       function addValue() {
        $("one").click(function(){ myScore = myScore + i[0]})
        $("two").click(function(){ myScore = myScore + i[1];})
        $("one").click(function(){ myScore = myScore + i[2];})
        $("one").click(function(){ myScore = myScore + i[3];})
        $("#myScore").text("My Score<br/><h3>" + myScore + "</h3>");
        if (myScore === randomNum){
            wins++; }
             else if (myScore > randomNum){
            loses++;
        }
        $("#wins").text("Wins<br/><h3>" + wins + "</h3>");
        $("#loses").text("Loses<br/><h3>" + loses + "</h3>");
       }
});