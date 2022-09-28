function setInputLabelFields()
{
    let allQuestions = document.querySelectorAll(".question");
    for (let i = 0; i < allQuestions.length; i++)
    {
        question = allQuestions[i];
        let questionInputs = question.getElementsByTagName('input');
        let questionLabels = question.getElementsByTagName('label');
        
        for (let j = 0; j < questionInputs.length; j++)
        {
            let inputID = 'q' + (i+1) + 'a' + (j+1);
            questionInputs[j].id = inputID;
            questionLabels[j].htmlFor = questionInputs[j].id;

            let inputName = 'q' + (i+1);
            questionInputs[j].name = inputName;
        }
    }
}

let resultIconsMale =
{
    "Bold": "turtwig",
    "Brave": "pikachu",
    "Calm": "chikorita",
    "Docile": "charmander",
    "Hardy": "torchic",
    "Hasty": "shinx",
    "Impish": "piplup",
    "Jolly": "totodile",
    "Lonely": "bulbasaur",
    "Naive": "chimchar",
    "Quiet": "treeko",
    "Quirky": "squirtle",
    "Rash": "mudkip",
    "Relaxed": "phanpy",
    "Sassy": "riolu",
    "Timid": "cyndaquil",
}

let resultIconsFemale =
{
    "Bold": "squirtle",
    "Brave": "charmander",
    "Calm": "cyndaquil",
    "Docile": "bulbasaur",
    "Hardy": "treeko",
    "Hasty": "pikachu",
    "Impish": "chimchar",
    "Jolly": "eevee",
    "Lonely": "mudkip",
    "Naive": "skitty",
    "Quiet": "chikorita",
    "Quirky": "piplup",
    "Rash": "torchic",
    "Relaxed": "vulpix",
    "Sassy": "totodile",
    "Timid": "turtwig",
}

function getNature()
{
    let result =
    {
        "Bold": 0,
        "Brave": 0,
        "Calm": 0,
        "Docile": 0,
        "Hardy": 0,
        "Hasty": 0,
        "Impish": 0,
        "Jolly": 0,
        "Lonely": 0,
        "Naive": 0,
        "Quiet": 0,
        "Quirky": 0,
        "Rash": 0,
        "Relaxed": 0,
        "Sassy": 0,
        "Timid": 0,
    };

    let formData = document.querySelectorAll(".inputAnswer");

    for (i in formData)
    {
        if (formData[i].checked)
        {
            // 'answer' is in form 'key:value,key:value', kvpairs gets each individual key-value pair
            let answer = formData[i].value;
            let kvpairs = answer.split(',');

            for (j in kvpairs)
            {
                let kvpair = kvpairs[j].split(':');
                let kvpairKey = kvpair[0];
                let kvpairValue = kvpair[1];

                result[kvpairKey] += parseInt(kvpairValue);
            }
        }
    }
    let resultMaxValue = Math.max(...Object.values(result));

    let finalResultStr = "";
    let allResultsValueStr = "";
    let allResultsNatureStr = "";
    let starterIcons = document.querySelector(".result-icons");
    starterIcons.innerHTML = "";
    for (i in result)
    {
        allResultsValueStr += result[i] + " Points <br>";
        allResultsNatureStr += i + "<br>";
        if (result[i] === resultMaxValue)
        {
            console.log(i);
            finalResultStr += i + ", ";
            starterIcons.innerHTML += '<img src="' + resultIconsFemale[i] + '.png" alt="' + resultIconsFemale[i] + '" class="starter-icon"></img>';
            starterIcons.innerHTML += '<img src="' + resultIconsMale[i] + '.png" alt="' + resultIconsMale[i] + '" class="starter-icon"></img>';
        }
    }

    let finalResultDiv = document.querySelector(".final-result");
    let finalAllResultsDiv = document.querySelector(".final-result-all");
    finalResultDiv.classList.remove("hidden");
    finalAllResultsDiv.classList.remove("hidden");
    document.querySelector(".result-icons").classList.remove("hidden");

    document.querySelector(".final-result-value").innerHTML = finalResultStr.slice(0, -2);
    document.querySelector(".all-results-nature").innerHTML = allResultsNatureStr;
    document.querySelector(".all-results-value").innerHTML = allResultsValueStr;
}