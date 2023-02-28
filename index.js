let questions = [
    {
        'que' : "Who has the highest number of ballon'dors",
        'a' : 'Cristiano Ronaldo',
        'b' : 'Lionel Messi',
        'c' : 'Karim Benzema',
        'd' : 'Robert Lewandoski',
        'correct' : 'b'
    },

    {
        'que' : 'Who is the leading goal scorer across all formats?',
        'a' : 'Lionel Messi',
        'b' : 'Karim Benzema',
        'c' : 'Cristiano Ronaldo',
        'd' : 'Erling Halaand',
        'correct' : 'c'
    },

    {
        'que' : 'who won this this years FIFA Best player?',
        'a' : 'Lionel Messi',
        'b' : 'Karim Benzema',
        'c' : 'Kylian Mbape',
        'd' : 'Erling Halaand',
        'correct' : 'a',
    },

    {
        'que' : 'who has the highest number of assists across all formats?',
        'a' : 'Lionel Messi',
        'b' : 'T.Muller',
        'c' : 'Kevin De Bruyne',
        'd' : 'Luke Modric',
        'correct' : 'a',
    },

    {
        'que' : 'Which country has won the most FIFA world cup ',
        'a' : 'Argentina',
        'b' : 'France',
        'c' : 'Brazil',
        'd' : 'England',
        'correct' : 'c',
    }

]

let index = 0;
let total = questions.length;
let right = 0;
let wrong = 0;
let queBox = document.getElementById("queBox") 
let optionInput = document.querySelectorAll('.option')
let loadQuestion = () => {

    if(index == total){
        return endQuiz();
    }

    reset();
    let data = questions[index];
    queBox.innerHTML = `${index+1}) ${data.que}`;
    optionInput[0].nextElementSibling.innerText = data.a;
    optionInput[1].nextElementSibling.innerText = data.b;
    optionInput[2].nextElementSibling.innerText = data.c;
    optionInput[3].nextElementSibling.innerText = data.d;
}

let submitQuiz = () => {
    let data = questions[index];
    let ans = getAnswer();
    if(ans === data.correct){
        right++;
    }else{
        wrong++;
    }
    index++;
    loadQuestion();
    return;
}

let getAnswer = () => {
    let answer;
    optionInput.forEach(
        (input) => {
            if(input.checked){
                answer = input.Value;
                
            }
            
        }
    )
    return answer;
}

let reset = () => {
    optionInput.forEach(
        (input) => {
            input.checked = false;
        }
    )
 
}

let endQuiz = () => {
    document.getElementById("box").innerHTML = 'Thank You!!!!!!!'
}





loadQuestion();