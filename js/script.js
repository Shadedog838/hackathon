 /* global $ */
 var Enemy = 100;
 var You = 100;
 var question = 0;






 var game = [
     {
         question: "1. What is the Greenhouse Effect?",
         answers: ["The trapping of sun warmth in planet's atmosphere",
             "Oxygen getting trapped in the atmosphere!",
             "The Sea levels decreasing!",
             "The sky is turning green!"
         ],
         correctanswer: 0,
     },
     {
         question: "2. What causes the Greenhouse Effect?",
         answers: [
             "Gases that trap the sun's warmth in the atmosphere",
             "Wifi",
             "Too Many Greenhouses!",
             "All of the Above"
         ],
         correctanswer: 0,
     },
     {
         question: "3. Which of these Economic Sectors create the harmful gasses",
         answers: [
             "Industry", 
             "Electricity", 
             "Agriculture",
             "All of the Above"
         ],
         correctanswer: 3,
     },
     {
         question: "4. Which of these gasses contribute most to the greenhouse effect?",
         answers: [
             "Methane",
             "Carbon Dioxide",
             "Water Vapor",
             "All of the Above"
         ],
         correctanswer: 2,
     },
     {
         question: "5. Which of the following are greenhouse gases?",
         answers: [
             "Methane", "Carbon Dioxide", "Water Vapor",
             "All of the Above"
         ],
         correctanswer: 3,
     },
     {
         question: "6. How can you prevent the greenhouse effect?",
         answers: [
             "Listen to Skia music", "Cut some trees", "Reduce,reuse and recycle",
             "Use hot water all the time"
         ],
         correctanswer: 2,
     },
     {
         question: "7. Should you leave all the lights on in your house even if your not there?",
         answers: [
             "YES", "NO"
         ],
         correctanswer: 1,
     },
     {
         question: "8. Planting trees will help reduce the greenhouse effect?",
         answers: [
             "TRUE", "FALSE"
         ],
         correctanswer: 0,
     },
     {
         question: "9. What are landfills creating?",
         answers: [
             "Land struture to hold waste", "Filling Land",
             "Landfills are fake news",
             "All of the above"
         ],
         correctanswer: 0,
     },
     {
         question: "10. How much trash does the U.S produce every year (Tons)?",
         answers: [
             "254 million", "255 million",
             "1 billion",
             "1 thousand"
         ],
         correctanswer: 0,
     },
     {
         question: "11. What does deforestation cause?",
         answers: [
             "Mudslides", "Trees",
             "Skia music",
             "All of the above"
         ],
         correctanswer: 0,
     },
     {
         question: "12. True or False ,Land Pollution contributes to global warming",
         answers: [
             "False",
             "True"
         ],
         correctanswer: 1,
     },
     {
         question: "13. What causes Water Pollution?",
         answers: [
             "Nutrient rich soil runoff", "Oil Spills",
             "Inorganic Pollution",
             "All of the above"
         ],
         correctanswer: 3,
     },
     {
         question: "14. What causes the most Water pollutions?",
         answers: [
             "Human and Animal Waste", "Oil Spills",
             "Agricultural fertilizers",
             "Radioactive Substances"
         ],
         correctanswer: 2,
     },
     {
         question: "15. True or False, Discharging Oils and Grease is great for the environment?",
         answers: [
             "False", "True",
         ],
         correctanswer: 1,
     },
     {
         question: "16. What is a Deadzone",
         answers: [
             "Areas where marine life suffocate due to lack of oxygen", "Places where all marine life die",
             "None of the above",
             "All of the above"
         ],
         correctanswer: 0,
     },
     {
         question: "17. True or False,land pollution doesn't contribute to the Greenhouse effect?",
         answers: [
             "True", "False",
         ],
         correctanswer: 1,
     },

 ]

 function health() {
     $("#YourHealth").html("YOU " + You);
     $("#EnemyHealth").html("ENEMY " + Enemy);
 }

 function loadquestion(x) {
      $("#Answers").empty();
     $(".question").html(game[x].question);


     game[x].answers.forEach(function(answer, index) {
         $("#Answers").append('<div class="answer " answer=' + index + '>' + answer + '</div>');



     });
 }
 loadquestion(question);



 $("body").on("click", ".answer", function() {

    
     var attr = $(this).attr("answer");
      console.log(game[question].correctanswer,"correctanswer");
      console.log(attr,"selected answer");
     console.log(attr == game[question].correctanswer)
    
   
     if (attr == game[question].correctanswer) {
         alert("Correct");
         Enemy = Enemy - 10;


     }
     else {
         alert("wrong");
         You = You - 10;
     };
     /*if (You === 0) {
         alert("You Lose!");
         window.location.href = "lose.html";
     }
     if (Enemy === 0) {
         alert("You Win!");
         window.location.href = "win.html";
     }*/
     if(game.length-1 === question){
         if(You > Enemy){
             alert("You Win!");
         window.location.href = "win.html";
         }
         else{
             alert("You Lose!");
         window.location.href = "lose.html";
         }
         
     }
     console.log(game[question].question);
     health();
      question++;
        loadquestion(question);
 });
 