var todayDate = moment().format("MMM Do YYYY");
console.log(moment().format("HH"))
var currentTime = moment().format("H")
$("#currentDay").html(todayDate);

$ (document).ready (function() {
var timeblockID=["hour9","hour10","hour11","hour12","hour13","hour14","hour15","hour16","hour17"]
    $(".saveBtn").on("click", function (event)  {
        var text=$(this).siblings("textarea.description").val();
        var time=$(this).parent().attr("id")
        localStorage.setItem(time,text)
    })
    for (var i=0;i<timeblockID.length;i++){
        console.log($(`#${timeblockID[i]}`).attr("data-num"))
        if (currentTime===$(`#${timeblockID[i]}`).attr("data-num")) {
            $(`#${timeblockID[i]}`).children("textarea").addClass("present")  
        }
        if (currentTime<$(`#${timeblockID[i]}`).attr("data-num")) {
            $(`#${timeblockID[i]}`).children("textarea").addClass("past")  
        }if (currentTime>$(`#${timeblockID[i]}`).attr("data-num")) {
            $(`#${timeblockID[i]}`).children("textarea").addClass("future")  
        }
    }
    $("#hour9").children("textarea").val(localStorage.getItem("hour9"))
    $("#hour10").children("textarea").val(localStorage.getItem("hour10"))
    $("#hour11").children("textarea").val(localStorage.getItem("hour11"))
    $("#hour12").children("textarea").val(localStorage.getItem("hour12"))
    $("#hour13").children("textarea").val(localStorage.getItem("hour13"))
    $("#hour14").children("textarea").val(localStorage.getItem("hour14"))
    $("#hour15").children("textarea").val(localStorage.getItem("hour15"))
    $("#hour16").children("textarea").val(localStorage.getItem("hour16"))
    $("#hour17").children("textarea").val(localStorage.getItem("hour17"))
}) 
// function timeTracker (){
//     var timeNow=moment().hours();
// }