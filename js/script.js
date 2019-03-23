 /* global $ */
var Enemy;
var You;
var question=0;



var game = [{
        question: "What is the Greenhouse Effect?",
        answers: ["The trapping of sun warmth in planet's atmosphere",
            "Oxygen getting trapped in the atmosphere!",
            "The Sea levels decreasing!",
            "The sky is turning green!"
        ],
        correctanswer:0,
    },
{
        question: "What causes the Greenhouse Effect",
        answers: [
            "Gases that trap the suns' warmth in the atmosphere"
            ,"Wifi"
            , "Too Many Greenhouses!",
            "All of the Above"],
        correctanswer:0,
    },
     {
        question: "What causes the Greenhouse Effect?",
        answers: [
            "Gases that trap the suns' warmth in the atmosphere"
            ,"Wifi"
            , "Too Many Greenhouses!",
            "All of the Above"],
        correctanswer:0,
    },
     {
        question: "What causes the Greenhouse Effect?",
        answers: [
            "Gases that trap the suns' warmth in the atmosphere"
            ,"Wifi"
            , "Too Many Greenhouses!",
            "All of the Above"],
        correctanswer:0,
    },
    
    
    

]

function loadquestion(x){
  $(".question").html(game[x].question);


game[x].answers.forEach(function(answer,index) {
    $("#Answers").append('<div class="answer " answer='+ index + '>' + answer + '</div>');

});  
}
loadquestion(question);


$(".answer").click(function(){
var attr = $(this).attr("answer");
console.log(game[0].correctanswer);
console.log(attr);
$("#Answers").empty();
question++;
loadquestion(question);
if(attr==game[0].correctanswer){
    console.log("correct");
    
};
});

$("#enter").click(function(){
    
});