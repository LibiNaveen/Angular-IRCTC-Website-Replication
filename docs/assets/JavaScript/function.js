let captcha;
function capGenerate(){
    captcha=document.getElementById("captcha");
    let uniqueCaptcha=" ";
    let character="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwx1234567890";

    for(let i=0;i<=5;i++){
        uniqueCaptcha += character.charAt(Math.random() * character.length)
    }

    captcha.innerHTML = uniqueCaptcha;
}

function validateCaptcha(){
    let userInput= document.getElementById("textBox").value;

    if(userInput===captcha.innerHTML)
    {
        document.getElementById("key").innerHTML = "Matched"
        capGenerate();
    }
    else{
        document.getElementById("key").innerHTML = "Not Matched"
        capGenerate();
    }
};

// #avail_coaches
$(document).ready(function(){
    $("#aval-coaches-1").click(function(){
        $("#aval-coaches-1").css("border", "1px solid #FB792B")
    })
});

// $(document).ready(function(){
//     $("#aval-coaches-2").click(function(){
//         $("#aval-coaches-1").css("border", "0")
//         $("#aval-coaches-2").css("border", "1px solid #FB792B")
//     })
// });
