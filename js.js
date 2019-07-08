$(document).ready(function () {
    ///////////////////////////////////////////////////////////////////////Arrays Section///////////////////////////////////////////////////////////
    //first Row
    var gbpArray = [
        ["#machine", " "],
        ["#fiber", " "],
        ["#surface", " "],
        ["#gauss", "selected"],
        ["#tem", "selected"],
        ["#led", "grayedOut"],
        ["#sed", "grayedOut"],
        ["#med", "grayedOut"],
        ["#explore", "selected"]
    ];//end of gbpArray

    var sipArray = [
        ["#machine", " "],
        ["#fiber", " "],
        ["#gauss", " "],
        ["#surface", "selected"],
        ["#tem", "selected"],
        ["#led", "selected"],
        ["#sed", "selected"],
        ["#med", "selected"],
        ["#explore", "selected"]
    ];//end of sipArray

    var fibArray = [
        ["#machine", " "],
        ["#surface", " "],
        ["#gauss", " "],
        ["#fiber", "selected"],
        ["#tem", "selected"],
        ["#led", "selected"],
        ["#sed", "selected"],
        ["#med", "selected"],
        ["#explore", "selected"]
    ];//end of fibArray

    var mvpArray = [
        ["#surface", " "],
        ["#fiber", " "],
        ["#gauss", " "],
        ["#machine", "selected"],
        ["#tem", "selected"],
        ["#led", "selected"],
        ["#sed", "selected"],
        ["#med", "selected"],
        ["#explore", "selected"]
    ];//end of mvpArray

    //second row
    var temArray = [
        ["#surface", "grayedOut"],
        ["#fiber", "grayedOut"],
        ["#gauss", "selected"],
        ["#machine", "grayedOut"],
        ["#tem", "selected"],
        ["#led", "grayedOut"],
        ["#sed", "grayedOut"],
        ["#med", "grayedOut"],
        ["#explore", "selected"]
    ];//end of temArray

    ///////////////////////////////////////////////////////////////////////Functions Section///////////////////////////////////////////////////////////
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
        //loop through and remove "selected" and "grayedOut" classes from the ids in the reset array
        for (k = 0; k < resetArray.length; k++) {
            $(resetArray[k]).removeClass("selected grayedOut")
        }
    }//end of resetFunction

    ///////////////////////////////////////////////////////////////////////Button Section///////////////////////////////////////////////////////////
    //Gaussian Beam Parameters Button
    $("#gauss").on("click", function () {
        if ($("#gauss").hasClass("selected")) {
            reset();
        } else {
            for (i = 0; i < gbpArray.length; i++) {
                for (j = 0; j < gbpArray[i].length; j++) {
                    $(gbpArray[i][0]).attr("class", gbpArray[i][1]);
                }//Inner Loop
            }//Outter Loop  
        };//end of conditional 
    });//end of #gauss onClick 

    //Surface Intesity Profile Button
    $("#surface").on("click", function () {
        if ($("#surface").hasClass("selected")) {
            reset();
        } else {
            for (i = 0; i < sipArray.length; i++) {
                for (j = 0; j < sipArray[i].length; j++) {
                    $(sipArray[i][0]).attr("class", sipArray[i][1]);
                }//Inner Loop
            }//Outter Loop  
        };//end of conditional 
    });//end of #surface onClick 

    //Fiber Coupling Button
    $("#fiber").on("click", function () {
        if ($("#fiber").hasClass("selected")) {
            reset();
        } else {
            for (i = 0; i < fibArray.length; i++) {
                for (j = 0; j < fibArray[i].length; j++) {
                    $(fibArray[i][0]).attr("class", fibArray[i][1]);
                }//Inner Loop
            }//Outter Loop  
        };//end of conditional 
    });//end of #fiber onClick 

    //Machine Vision Pattern Button
    $("#machine").on("click", function () {
        if ($("#machine").hasClass("selected")) {
            reset();
        } else {
            for (i = 0; i < mvpArray.length; i++) {
                for (j = 0; j < mvpArray[i].length; j++) {
                    $(mvpArray[i][0]).attr("class", mvpArray[i][1]);
                }//Inner Loop
            }//Outter Loop  
        };//end of conditional 
    });//end of #machine onClick 

     //Machine Vision Pattern Button
     $("#tem").on("click", function () {
        if ($("#tem").hasClass("selected")) {
            reset();
        } else {
            for (i = 0; i < temArray.length; i++) {
                for (j = 0; j < temArray[i].length; j++) {
                    $(temArray[i][0]).attr("class", temArray[i][1]);
                }//Inner Loop
            }//Outter Loop  
        };//end of conditional 
    });//end of #machine onClick 


});//end of document.ready