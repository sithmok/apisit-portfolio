let text = document.getElementById("text1");
let btn = document.getElementById("btn");
let i = 0;

// window.onload = postFunction;
function postFunction()
{
    x = text.value;

    if(x == "")
    {
        alert("type something");
    }

    else if(i == 0 && x != "")
    {
        // topic1 = document.getElementById("topic1").innerHTML = 555;
        // document.getElementById("topic1").value = text;
        // text = document.getElementById("text1").value;
        document.getElementById('topic1').innerHTML = x;
        document.getElementById("text1").value = "";
        console.log(x);
        i++
        
    }

    else if(i == 1 && x != "")
    {
        // comment1 = document.getElementById("comment1").innerHTML = 666;
        // console.log(comment1);
        // text = document.getElementById("text1").value;
        document.getElementById("comment1").innerHTML = x;
        document.getElementById("text1").value = "";
        console.log(x);
        i++

    }
    
    else if(i == 2 && x != "")
    {
        // comment2 = document.getElementById("comment2").innerHTML = text;
        // console.log(comment2);
        // text = document.getElementById("text1").value;
        document.getElementById("comment2").innerHTML = x;
        document.getElementById("text1").value = "";
        btn.disabled = true;
        console.log(x);
        i++
    
    }
    console.log(i);
}

function clearFunction()
{
    document.getElementById("topic1").innerHTML = "";
    document.getElementById("comment1").innerHTML = "";
    document.getElementById("comment2").innerHTML = "";
    document.getElementById("text1").value = "";
    btn.disabled = false;
    i=0;
    console.log(i);
}