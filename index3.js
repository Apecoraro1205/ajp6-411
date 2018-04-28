"use strict";

        $(document).ready(function() {

            $(".image").css({
                opacity: 1.0
            });

            $(".image").mouseenter(function() {
                $(this).stop().animate({
                    opacity: 0.05
                }, 2000);
            });

            $(".image").mouseleave(function() {
                $(this).stop().animate({
                    opacity: 1.0
                }, 2000);
            });

            $(".image").mouseenter(function() {
                // Get a reference to the old large image.
                var old_large_image = $("#largeimage img");
                // Create an image element and have large_image refer to it.
                var large_image = $("<img src=\"" + this.src + "\">");
                // Set the display attribute of the new large image so
                // that it is hidden.
                large_image.hide();
                large_image.prop("width", this.width * 2);
                large_image.prop("height", this.height * 2);
                old_large_image.fadeOut(
                    2000,
                    // When the old large image has completely faded,
                    // remove it from the DOM.
                    function() { // callback function
                        $(this).remove();
                    }
                );
                // Place the new large image into the DOM as a
                $("#largeimage").append(large_image);
                // Start fading in the new large image.
                large_image.fadeIn(3000);

            });

            $("#gallery img:last").click();

        });
