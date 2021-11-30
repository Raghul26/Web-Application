function formvalidate() {
    var box1 = document.getElementById("username");
    var box2 = document.getElementById("number");
    var box3 = document.getElementById("email");
    var box4 = document.getElementById("password");
    if (box1.value == "") {
        document.getElementById("p1").innerHTML = "User name can not be blank*";
        p1.focus();
        box1.style.border = "2px solid #e74c3c";
        p1.style.color = "#e74c3c";
        return false;
    }
    else (box1.value == "")
    {
        document.getElementById("p1").innerHTML = "";
        box1.style.border = "2px solid #0BC501";
    }
    if (box1.value.length > 15) {
        document.getElementById("p1").innerHTML = "Contain only 15 charecter*";
        p1.focus();
        box1.style.border = "2px solid #e74c3c";
        p1.style.color = "#e74c3c";
        return false;
    }
    else if (box1.value.length < 4) {
        document.getElementById("p1").innerHTML = "Above 4 charecter*";
        p1.focus();
        box1.style.border = "2px solid #e74c3c";
        p1.style.color = "#e74c3c";
        return false;
    }

    //number


    if (box2.value == "") {
        document.getElementById("p2").innerHTML = "Number can not be blank*";
        p2.focus();
        box2.style.border = "2px solid #e74c3c";
        p2.style.color = "#e74c3c";
        return false;
    }
    if (box2.value.length > 10 || box2.value.length < 10) {
        document.getElementById("p2").innerHTML = "It's Invalid*";
        p2.focus();
        box2.style.border = "2px solid #e74c3c";
        p2.style.color = "#e74c3c";
        return false;
    }
    // else if(box2.value.length=="a-zA-Z/^\w+([\.-,''\"]?\w+)*@\w+([\.-]?\w+)*$/")
    // {
    //     document.getElementById('p2').innerHTML="Contains only a number*";
    //     p2.focus();
    //     box2.style.border="2px solid #e74c3c";
    //     p2.style.color="#e74c3c";
    //     return false;
    // }
    else (box2.value.length == "")
    {
        document.getElementById("p2").innerHTML = "";
        box2.style.border = "2px solid #0BC501";
    }

    //gmail

    if (box3.value == "") {
        document.getElementById("p3").innerHTML = "Gmail can not be blank*";
        p3.focus();
        box3.style.border = "2px solid #e74c3c";
        p3.style.color = "#e74c3c";
        return false;
    }
    else (box3.value.length == "")
    {
        document.getElementById("p3").innerHTML = "";
        box3.style.border = "2px solid #0BC501";
    }


    //password

    if (box4.value == "") {
        document.getElementById("p4").innerHTML = "Password can not be blank*";
        p4.focus();
        box4.style.border = "2px solid #e74c3c";
        p4.style.color = "#e74c3c";
        return false;
    }
    else if (box4.value.length <= 5) {
        document.getElementById("p4").innerHTML = "Please give strong password*";
        p4.focus();
        box4.style.border = "2px solid #e74c3c";
        p4.style.color = "#e74c3c";
        return false;
    }
    else (box4.value == "")
    {
        document.getElementById("p4").innerHTML = "";
        box4.style.border = "2px solid #0BC501";
    }
}