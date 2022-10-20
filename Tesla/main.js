// This changes the image when an option is clicked

jQuery(document).ready(function(){
    jQuery(".motor-options .option-s").on("click", function(){
        jQuery(".motor-images .motor-s-img").removeClass("element-hidden")
        jQuery(".motor-images .motor-s-plaid-img").addClass("element-hidden")
        jQuery(".option-s").addClass("selected")
        jQuery(".option-plaid").removeClass("selected")

    });
    
    jQuery(".motor-options .option-plaid").on("click", function(){
        jQuery(".motor-images .motor-s-plaid-img").removeClass("element-hidden")
        jQuery(".motor-images .motor-s-img").addClass("element-hidden")
        jQuery(".option-s").removeClass("selected")
        jQuery(".option-plaid").addClass("selected")
    });
});

