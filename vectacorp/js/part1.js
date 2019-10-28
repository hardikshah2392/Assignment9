$(document).ready(function () {
    $("section>h2, aside>h2").css({
        "color": "#CC1C0D",
        "border": "1px solid black",
        "padding": "3px 0px 3px 20px",
        "border-radius": "0px 5px 0px 5px",
        "background-color": "#DFE3E6"
    });

    $("nav ul li a").addClass("navigation")
            $(".navigation").css({
                "border": "1px solid #929CA4",
                "color": "#CC1C0D",
                "padding": "3px 0px 3px 20px",
                "background-color": "#DFE3E6"
            });

    $("main > section > p").removeAttr("class")
    $("main > aside > p:first-of-type").wrapInner("<q></q>")
    $("main > aside > p:nth-of-type(2)").append("<br/>Chevy Dealers Association")
    


});