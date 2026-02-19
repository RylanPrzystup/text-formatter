
function uppercase(){
    let output=document.getElementById('output')
    let input=document.getElementById('textbox')
    let finalUpper=input.value.toUpperCase()
    let f1display=`${finalUpper}`
    output.innerHTML=f1display

}

function lowercase(){
    let output=document.getElementById('output')
    let input=document.getElementById('textbox')
    let finalUpper=input.value.toLowerCase()
    let f1display=`${finalUpper}`
    output.innerHTML=f1display

}

function capitalizeWords(){
    let output=document.getElementById('output')
    let input=document.getElementById('textbox')
    let inputArray = input.value.split("")
    for (let i = 0; i < inputArray.length; i++) {
        if (i == 0 || input.value.charAt(i-1) == " ") {
            inputArray[i] = inputArray[i].toUpperCase();
        }
    }
    let f1display=`${inputArray.join("")}`
    output.innerHTML=f1display

}

function removeExtraSpaces(){
    let value=document.getElementById("textbox").value
    let newValue= value.trim()
    document.getElementById("output").innerHTML = newValue
}

function replaceWord(){
    let output=document.getElementById('output')
    let input=document.getElementById('textbox')
    let replacement = prompt("What do you want to replace with?")
    let choice= prompt("What do you want to replace")
    
    output.innerHTML=input.value.replace(replacement, choice)

}

function countCharaters(){
    let output=document.getElementById('output')
    let input=document.getElementById('textbox')
    console.log(input.value.length)
    output.innerHTML=`The charater count is ${input.value.length} `
}