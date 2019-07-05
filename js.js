$(document).ready(function () {
    //relationship arrays
       var gbpArray = [
           ["#gauss", "selected"],
           ["#tem", "selected"],
           ["#led", "grayedOut"],
           ["#sed", "grayedOut"],
           ["#med", "grayedOut"],
           ["#explore", "selected"]
       ];//end of gbpArray
   
       var sipArray = [
           ["#surface", "selected"],
           ["#tem", "selected"],
           ["#led", "selected"],
           ["#sed", "selected"],
           ["#med", "selected"],
           ["#explore", "selected"]
       ];//end of sipArray
   
       var fibArray = [
           ["#fiber", "selected"],
           ["#tem", "selected"],
           ["#led", "selected"],
           ["#sed", "selected"],
           ["#med", "selected"],
           ["#explore", "selected"]
       ];//end of fibArray
   
       var mvpArray = [
           ["#machine", "selected"],
           ["#tem", "selected"],
           ["#led", "selected"],
           ["#sed", "selected"],
           ["#med", "selected"],
           ["#explore", "selected"]
       ];//end of mvpArray
       
   //Functions Section
       //Reset Function
       function reset() {
           var resetArray = [
               "#gauss",
               "#surface",
               "#fiber",
               "#machine",
               "#tem",
               "#led",
               "#sed",
               "#med",
               "#explore",
           ]//end of resetArray

           //Removes selected and grayedOut classes from all ids in the resetArray
           for (k = 0; k < resetArray.length; k++) {
               $(resetArray[k]).removeClass("selected grayedOut")
           }
       }//end of resetFunction
   
   //Buttons Section
       //Gaussian Beam Parameters Button
       $("#gauss").on("click", function () {
           if ($("#gauss").hasClass("selected")) {
               reset();
           } else {
               for (i = 0; i < gbpArray.length; i++) {
                   for (j = 0; j < gbpArray[i].length; j++) {
                       $(gbpArray[i][0]).attr("class", gbpArray[i][1]);
                       console.log(gbpArray[i][1]);
                   }//Inner Loop
               }//Outter Loop  
           };//end of conditional 
           $("#surface").removeClass("selected");
           $("#fiber").removeClass("selected");
           $("#machine").removeClass("selected");
       });//end of #gauss onClick 
   
       //Surface Intesity Profile Button
       $("#surface").on("click", function () {
           if ($("#surface").hasClass("selected")) {
               reset();
           } else {
               for (i = 0; i < sipArray.length; i++) {
                   for (j = 0; j < sipArray[i].length; j++) {
                       $(sipArray[i][0]).attr("class", sipArray[i][1]);
                       console.log(sipArray[i][1]);
                   }//Inner Loop
               }//Outter Loop  
           };//end of conditional 
           $("#gauss").removeClass("selected");
           $("#fiber").removeClass("selected");
           $("#machine").removeClass("selected");
       });//end of #surface onClick 
   
       //Fiber Coupling Button
       $("#fiber").on("click", function () {
           if ($("#fiber").hasClass("selected")) {
               reset();
           } else {
               for (i = 0; i < fibArray.length; i++) {
                   for (j = 0; j < fibArray[i].length; j++) {
                       $(fibArray[i][0]).attr("class", fibArray[i][1]);
                       console.log(fibArray[i][1]);
                   }//Inner Loop
               }//Outter Loop  
           };//end of conditional 
           $("#gauss").removeClass("selected");
           $("#surface").removeClass("selected");
           $("#machine").removeClass("selected");
       });//end of #fiber onClick 
   
       //Machine Vision Pattern Button
       $("#machine").on("click", function () {
           if ($("#machine").hasClass("selected")) {
               reset();
           } else {
               for (i = 0; i < mvpArray.length; i++) {
                   for (j = 0; j < mvpArray[i].length; j++) {
                       $(mvpArray[i][0]).attr("class", mvpArray[i][1]);
                       console.log(mvpArray[i][1]);
                   }//Inner Loop
               }//Outter Loop  
           };//end of conditional 
           $("#gauss").removeClass("selected");
           $("#surface").removeClass("selected");
           $("#fiber").removeClass("selected");
       });//end of #machine onClick 
   
   });//end of document.ready