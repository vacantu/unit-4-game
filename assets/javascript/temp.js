
    $(document).ready(function() {
    
    randomNum=genRandomNum(19,120);
    //   console.log("Random Num: ", randomNum);
       for (i=1; i<4; i++) {
     //      jewels[i]=genRandomNum(1,12);
    //       console.log("Jewels random nums: " + jewels[i]);
       }
   
   
   
       function genRandomNum(min, max) {
           console.log(min, max);
           var min;
           var max;
           var random = 
          Math.floor(Math.random() * (+max - +min)) + +min; 
   //        document.write("Random Number Generated : " + random );
       }
   
   