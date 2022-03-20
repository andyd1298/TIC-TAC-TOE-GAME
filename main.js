var sign = "X"
var box1 = $("#box1")
var box2 = $("#box2")
var box3 = $("#box3")
var box4 = $("#box4")
var box5 = $("#box5")
var box6 = $("#box6")
var box7 = $("#box7")
var box8 = $("#box8")
var box9 = $("#box9")
var count = 0



function boxClicked(id) {
    count++;
    if ($("#" + id).text() == "") {
        if (sign == "X") {
            $("#" + id).text(sign);
            var result = checkStatus(sign)
            if (result == true) {
                setTimeout(function () {
                    sign = "X"
                    for (var i = 1; i <= 9; i++) {
                        $("#box" + i).text("");
                    }
                    alert("GAME OVER!")
                    return ""
                }, 200)
            }

            sign = "O"
        } else {
            $("#" + id).text(sign);
            var result = checkStatus(sign)
            if (result == true) {
                setTimeout(function () {
                    sign = "X"
                    for (var i = 1; i <= 9; i++) {
                        $("#box" + i).text("");
                    }
                    alert("GAME OVER!")
                    return ""
                }, 200)
            }
            sign = "X"
        }
    }
}

function checkStatus(sign) {
    console.log(sign)
    if (box1.text() == sign && box2.text() == sign && box3.text() == sign ||
        box4.text() == sign && box5.text() == sign && box6.text() == sign ||
        box7.text() == sign && box8.text() == sign && box9.text() == sign ||
        box1.text() == sign && box4.text() == sign && box7.text() == sign ||
        box2.text() == sign && box5.text() == sign && box8.text() == sign ||
        box3.text() == sign && box6.text() == sign && box9.text() == sign ||
        box1.text() == sign && box5.text() == sign && box9.text() == sign ||
        box3.text() == sign && box5.text() == sign && box7.text() == sign) {
        count = 0
        return true
    }
    if (count == 9) {
        alert("GAME TIED!")
        count = 0
        sign = "X"
        for (var i = 1; i <= 9; i++) {
            $("#box" + i).text("");
        }
    }
}