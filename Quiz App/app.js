var QuestionNumber = 0;
var score = 0;
var QuizArray = [
    {
    Question: "What is 2 + 2?",
    Answer: "4",
    Options:[
        "4",
        "6",
        "2",
        "8"
    ] 
},
{
    Question: "What is 8 + 8?",
    Answer: "16",
    Options: [
        "88",
        "18",
        "16",
        "14"
    ]
},

{
    Question: "What is 10 + 10?",
    Answer: "20",
    Options: [
        "100",
        "20",
        "110",
        "30"
    ]
},
{
    Question: "What is 15 + 15?",
    Answer: "30",
    Options: [
        "20",
        "115",
        "30",
        "40"
    ]
},
{
    Question: "What is 100 + 100?",
    Answer: "200",
    Options: [
        "200",
        "110",
        "1000",
        "1100"
    ]
},


]


function showQuestion(){
    var Question = document.getElementById("Question");
    Question.innerHTML = QuizArray[QuestionNumber].Question
    var option = document.getElementsByClassName("option");
    
    for(var i = 0; i < option.length; i++){
    // console.log(option.length)
    option[i].innerHTML = QuizArray[QuestionNumber].Options[i];
    }
}
function showPrevious(){
    if(QuestionNumber == 0){
        alert("This is First Question !")
    }
    else{

        QuestionNumber--   
        showQuestion()
    }
}

function showNext(){
    // console.log(QuizArray.length-1)
    var Active = document.getElementsByClassName("Active")
    if(Active.length >0){

        Validation()
        RemoveSelection()
        QuestionNumber++
        showQuestion()

        if(QuestionNumber == QuizArray.length-1){

            // alert("This is last Question !")
            var btn_Next = document.getElementsByClassName("btn_Next")
            btn_Next[0].classList.add("none")
            console.log(btn_Next)
            var btn_Submit = document.getElementsByClassName("btn_Submit")
            btn_Submit[0].classList.remove("none")
        }
        // else{
               
        // }
    }
    else{
        alert("Please Select an option")
    }
}

   function Selected(e){
    console.log(e)
    RemoveSelection()
    
    e.classList.add("Active")
   }

   function RemoveSelection(){
    var Active = document.getElementsByClassName("Active")
    if(Active.length >0){

    Active[0].classList.remove("Active")
}
}

   function Validation(){
        var Active = document.getElementsByClassName("Active")

        
        if(Active[0].innerHTML == QuizArray[QuestionNumber].Answer){
            score +=10
            console.log(score);
        }
        console.log(score);

   }

function Submit(){
    Validation()
    var result = document.getElementById("result")
    result.innerHTML = result.innerHTML + " "+ score
    
    var con = document.getElementById("con")
    con.classList.add("off")

    var MainScore = document.getElementById("MainScore")
    MainScore.classList.remove("off")
}

//    function Submit(){
//         Validation()
    
//        var sc = document.getElementById("sc")
//        sc.innerHTML = score;
//        console.log(sc.innerHTML)
//     // var score2 = score
//     // console.log("Your Score is " + score2);
//     //    result.innerHTML = result.innerHTML + " " + score2
//     reload()
// }
// function reload(){
// window.location.href='Score.html'

// // var 
// }

// function finalResult(){
//     var sc = document.getElementById("sc")
// // alert(sc.innerHTML)
// // console.log(sc.innerHTML)
// var result = document.getElementById(result);
// result.innerHTML = result.innerHTML + sc.innerHTML;

// }