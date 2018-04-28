"use strict";
        var clicked = false;

        $(document).ready(function() {

            //http://www.w3schools.com/jquery/css_offset.asp
            //$(selector).offset({top:value,left:value})
            //$("#moveimage").offset({top: 500, left: 500});

            $(document).mousemove(function(ev) {
                if (clicked == false) { //function for false clicks
                    clicked = false;


                    // or using variables
                } else {
                    clicked = true;

                    $("#moveimage").offset({ //moves image with mouse
                        top: ev.pageY,
                        left: ev.pageX

                    });

                }
            });

            $("html").click(function() { //tells if ture or false click
                if (clicked) {
                    clicked = false;
                    $("#clickstatus").text("Follow mouse=" + clicked);


                } else {
                    clicked = true;
                    $("#clickstatus").text("Follow mouse=" + clicked);
                }
            });

            $(document).on("mousemove", function(event) {
                $("#log").html("clientX=" + event.pageX + "<br/>" + "<br/>" + "clientY=" + event.pageY); //output for plot coordinates

            });

        });
