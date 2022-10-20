//  This controls the page scrolls on the index page. Changes the opacity of text elements using the Math cosine function.

const totalPages = 6;
        checkOpacity();
        $(document).on("scroll", function () {
            checkOpacity();
        });
        function checkOpacity() {
            var pixels = $(document).scrollTop();
            // console.log(pixels);
            var pageHeight = $(window).height()
            // console.log(pageHeight);
            var pageNumber = pixels / pageHeight;
            console.log(pageNumber);

            for (let i = 0; i < totalPages; i++) {
                var opacity = 0.5 * Math.cos((pageNumber - i) * 6.28) + 0.5
                if(pageNumber >= i - 0.5 && pageNumber < i + 0.5){
                    jQuery(".background-" + (i + 1) + " .hero-text").css('opacity', opacity);
                    jQuery(".background-" + (i + 1) + " .hero-btns").css('opacity', opacity);
                    jQuery(".background-" + (i + 1) + " .next").css('opacity', opacity);
                    jQuery(".background-" + (i + 1) + " .footer").css('opacity', opacity);

                    jQuery(".background-" + (i + 1) + " .hero-text").css('visibility', 'visible');
                    jQuery(".background-" + (i + 1) + " .hero-btns").css('visibility', 'visible');
                    jQuery(".background-" + (i + 1) + " .next").css('visibility', 'visible');
                    jQuery(".background-" + (i + 1) + " .footer").css('visibility', 'visible');
                }
                else {
                    jQuery(".background-" + (i + 1) + " .hero-text").css('opacity', '0');
                    jQuery(".background-" + (i + 1) + " .hero-btns").css('opacity', '0');
                    jQuery(".background-" + (i + 1) + " .next").css('opacity', '0');
                    jQuery(".background-" + (i + 1) + " .footer").css('opacity', '0');

                    jQuery(".background-" + (i + 1) + " .hero-text").css('visibility', 'hidden');
                    jQuery(".background-" + (i + 1) + " .hero-btns").css('visibility', 'hidden');
                    jQuery(".background-" + (i + 1) + " .next").css('visibility', 'hidden');
                    jQuery(".background-" + (i + 1) + " .footer").css('visibility', 'hidden');
                }
            }
        }