 /* global $ */
var Enemy=100;
var You=100;
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
            "Gases that trap the suns' warmth in the atmosphere",
            "Wifi",
            "Too Many Greenhouses!",
            "All of the Above"],
        correctanswer:0,
    },
     {
        question: "Which of these Economic Sectors create the harmful gasses",
        answers: [
            "Industry"
            ,"Electricity"
            , "Agriculture",
            "All of the Above"],
        correctanswer:3,
    },
     {
        question: "Which of these gasses contribute most to the greenhouse effect",
        answers: [
            "Methane"
            ,"Carbon Dioxide"
            , "Water Vapor",
            "All of the Above"],
        correctanswer:2,
    },
     {
        question: "Which of the following are greenhouse gases?",
        answers: [
            "Methane"
            ,"Carbon Dioxide"
            , "Water Vapor",
            "All of the Above"],
        correctanswer:3,
    },
     {
        question: "How can you prevent the greenhouse effect",
        answers: [
            "Listen to Skia music"
            ,"Cut some trees"
            , "Reduce,reuse and recycle",
            "Use hot water all the time"],
        correctanswer:2,
    },
     {
        question: "Should you leave all the lights on in your house even if your not their?",
        answers: [
            "YES"
            ,"NO"],
        correctanswer:1,
    },
    {
        question: "Planting tress will help reduce the greenhouse effect",
        answers: [
            "TRUE"
            ,"FALSE"],
        correctanswer:0,
    },
    {
        question: "What are landfills creating",
        answers: [
            "Land struture to hold waste"
            ,"Filling Land",
            "Landfills are fake news",
            "All of the above"],
        correctanswer:0,
    },
    {
        question: "How much trash does the U.S produce every year (Tons)",
        answers: [
            "254 million"
            ,"255 million",
            "1 billion",
            "1 thousand"],
        correctanswer:0,
    },
    {
        question: "What does deforestation cause",
        answers: [
            "Mudslides"
            ,"Trees",
            "Skia music",
            "All of the above"],
        correctanswer:0,
    },
    {
        question: "True or False ,Land Pollution contributes to global warming",
        answers: [
            "False",
            "True"],
        correctanswer:1,
    },
    {
        question: "What causes Water Pollution",
        answers: [
            "Nutrient rich soil runoff"
            ,"Oil Spills",
            "Inorganic Pollution",
            "All of the above"],
        correctanswer:3,
    },
    {
        question: "What causes the most Water Pollutions",
        answers: [
            "Human and Animal Waste"
            ,"Oil Spills",
            "Agricultural fertilizers",
            "Radioactive Substances"],
        correctanswer:2,
    },
    {
        question: "True or False, Discharging Oils and Grease is great for the enviroment",
        answers: [
            "False"
            ,"True",],
        correctanswer:1,
    },
    {
        question: "What is a Deadzone",
        answers: [
            "Areas where marine life suffocate due to lack of oxygen"
            ,"Places where all marine life die",
            "None of the above",
            "All of the above"],
        correctanswer:0,
    },
    {
        question: "True or False,land pollution doesn't contribute to the Greenhouse effect",
        answers: [
            "True"
            ,"False",
            ],
        correctanswer:1,
    },
    
]
function health(){
    $("#YourHealth").html(You);
    $("#EnemyHealth").html(Enemy);
}

function loadquestion(x){
  $(".question").html(game[x].question);


game[x].answers.forEach(function(answer,index) {
    $("#Answers").append('<div class="answer " answer='+ index + '>' + answer + '</div>');
    


});  
}
loadquestion(question);


$("body").on("click", ".answer", function(){
var attr = $(this).attr("answer");
console.log(game[0].correctanswer);
console.log(attr);
$("#Answers").empty();
question++;
loadquestion(question);
if(attr==game[question].correctanswer){
    alert("Correct");
    Enemy=Enemy-25;
    
    
}else{
    alert("wrong");
    You=You-25;
};
health();
});

