$(document).ready(function() {

    var alertFunction = function () {
        window.alert("Button Clicked");
    };
       

    $("body").append('<input type="button" id="button1" value="Click Function">');
    $("body").append('<input type="button" id="button2" value="Bind Function">');
    $("body").append('<input type="button" id="button3" value="On Function"></input>');
    $("body").append('<input type="button" id="button4" value="Multi-On Function"></input>');
    $("body").append('<input type="button" id="button5" value="Multi-On Function">');

    $("#button1").click(alertFunction);
    $("#button2").bind("click",alertFunction);
    $("#button3").on("click",alertFunction);
    $("#button4,#button5").on("click",alertFunction);
    
    // var new_div = window.document.createElement("div");
    // new_div.setAttribute("id","div_event");
    $("body").append("<div id='div_event'></div>","<br>");

    $("#div_event").css("width","400px")
            .css("height","400px")
            .css("background-color","gray")
            .css('margin','10px');
    
    $("#div_event").on({
                mouseenter : function () {
                    window.alert("Mouse Entered the section");
                },
                mouseleave : function () {
                    window.alert("Mouse left the section");
                },
                click: function () {
                    window.alert("Clicked the section");
                }
            });

    $('body').append("<span></span>","<br><br>");
    $("#div_event").on({
        mouseenter : function () {
            //window.alert("Mouse Entered the section");
            $("span").text("Mouse Entered!!")
        },
        mouseleave : function () {
            // window.alert("Mouse left the section");
            $("span").text("Mouse Left!!")
        },
        click: function () {
            // window.alert("Clicked the section");
            $("span").text("Mouse Clicked!!")
        }
    });

    $('body').append("<a href='modulemedia.com'>Module Media</a>","<br><br>");
    $('a').on("click", function (event) {
        event.preventDefault();
        window.alert('"' + event.target.nodeName + '" tag triggered the event');
        })
        .css("color","red");

    $('body').append("<div id='div_size'></div>","<br><br>");
    $(window).resize(function () {
        var win_width = $(window).width();
        var win_height = $(window).height()
        $('#div_size').text("Width: " + win_width + " Height : " + win_height);
    });

    $('body').append("<input type='text' id='focus_check'>","<br><br>");
    $('#focus_check').focus(function() {
        $('#focus_check').css('background-color','lightgray');
    });

    $('#focus_check').blur(function() {
        $('#focus_check').removeAttr('style');
    });

    $("body").append("<form id=test_form></form>");
    $("form").append("Name:<br><input type='text' id='name'>","<br>");
    $("form").append("Email:<br><input type='text' id='email'>","<br><br>");
    $("form").append("<input type='submit' id='submit'>");

    

    $("#test_form").submit(function () {
        var email = $("#email").val();
        var name = $("#name").val();
        var isValid = true;
        if (name ==='') {
            window.alert("Fields are required!!");
            $("#name").css('border','1px solid red');
            isValid = false;
        } else if (email ==='') {
            window.alert("Fields are required!!");
            $("#name").css('border','1px solid green');
            $("#email").css('border','1px solid red');
            isValid = false;
        }else {
            $("#name","#email").css('border','1px solid green');
        }

        if (isValid == false) {
            event.preventDefault();
        }else if(isvalid == true) {
            $("#name","#email").css('border','1px solid green');
        };
    });

});