$(document).ready(() => {
    // :::::::::::::::::::::::::::::::::::Javascript::::::::::::::::::::::::::::::: //
    
    // Regular Javascript Selector
    console.log(document.getElementById('secondary-button'));

    // Javascript with its css
    document.getElementById('secondary-button').style.background = "firebrick"
    document.getElementById('secondary-button').style.border = "none"
    document.getElementById('secondary-button').style.outline = "none"

    // :::::::::::::::::::::::::::::::::::::jQuery::::::::::::::::::::::::::::::::: //
    // Jquery Selector [Jquery Object Array]
    console.log($("#primary-button"));

    // Jquery with its css
    $("#primary-button").css({
        "background": "firebrick",
        "border": "none",
        "outline": "none"
    });

    // ::::::::::::::::::::::::::::::::::::Box-Shadow::::::::::::::::::::::::::::::::::: //
    
    // Adding Box-Shadow
    $(".col").css({boxShadow: "0 2px 5px 0 lightgrey"});
    
    // :::::::::::::::::::::::::::::::::::::Filters::::::::::::::::::::::::::::::::: //
    
    // First Page Link
    $(".pagination .page-link:first")
    .css({ 
        boxShadow: "0 2px 5px 0 lightgrey",
        color: "firebrick"
    });

    // Last Page Link
    $(".pagination .page-link:last")
    .css({
        boxShadow: "0 2px 5px 0 lightgrey",
        color: "firebrick"
    });

    // Even 0, 2, 4
    $(".btn-group [type='button']:even")
    .css({
        boxShadow: "0 2px 5px 0 lightgrey",
        background: "firebrick",
        outling: "none",
        border: "none"
    });

    // Odd 1, 3, 5
    $(".list-group .list-group-item:odd")
    .css({
        boxShadow: "0 2px 5px lightgrey",
        background: "pink",
        outline: "none",
        border: "none"
    });

    // Not
    $("[type*='button']:not('#primary-button') span").css({
        color: "lightgrey"
    });

    // Less Than
    $(".container .row .col div:lt(2)").css({
        boxShadow: "0 2px 5px 0 lightgrey"
    })

    // Greater Than
    $(".container .row .col div:gt(2)").css({
        boxShadow: "0 1px 1px 0 lightgrey"
    })

    // ::::::::::::::::::::::::::::::::Dom Traversal::::::::::::::::::::::::::::::::: //
    
    // Next Sibling
    console.log($("#primary-button").next()) // Secondary

    // Previous Sibling
    console.log($("#secondary-button").prev()) // Primary

    // Parent
    console.log($("#primary-button").parent()) // Col

    // Parents
    console.log($("#secondary-button").parents()) // Col, Row, Container, Body, Html

    // Children
    console.log($(".pagination").children())
    
    // Find [Computational Advantage]
    console.log($(".pagination").find('.two'))

    // Closest [Closest Parent]
    console.log($(".page-item").closest('.pagination'))

    // ::::::::::::::::::::::::::::::::Adding Content::::::::::::::::::::::::::::::::: //
    
    let bottomText = "<div> I am at the bottom </div>";
    let topText = "<div> I am at the top </div>";
    let replaceText = "<div> I am replacing the current div </div>";

    // Adds to the bottom
    $(".adding-content").append(bottomText);
    
    // Add to the top
    $(".adding-content").prepend(topText);

    // Add the element after the p tag
    $(".adding-content .first p").after(bottomText);
    
    // Add the element before the p tag
    $(".adding-content .second p").before(topText);
    
    // Replacing the p with div [Replace Element]
    $(".adding-content .third p").html(replaceText);

    // Replace the text
    $(".adding-content .second p").text("I am second bro!");

    // ::::::::::::::::::::::::::::::::Wrap and UnWrap::::::::::::::::::::::::::::::::: //
    
    // Individual Element gets a div tag
    $(".wrap-individual button").wrap("<div>");
    
    // Wraps the div tag with all the elements inside
    $(".wrap-all button").wrapAll("<div>");

    // Unwrap removes the div tag
    $(".unwrap p").unwrap();

    // ::::::::::::::::::::::::::::::::Remove Content::::::::::::::::::::::::::::::::: //
    
    // Empty [Inside the Div clears out]
    $(".empty").empty();
    
    // Remove [Removes Inside and removes the div element]
    $(".empty").remove();

    // :::::::::::::::::::::::::::::::: Attribute ::::::::::::::::::::::::::::::::: //
    
    // Remove Attribute
    $(".text-attribute").removeAttr('role');
    
    // Attribute
    $(".text-attribute").attr('role', 'superAdmin');
    
    // :::::::::::::::::::::::::::::::: CSS ::::::::::::::::::::::::::::::::: //
    
    // Check the property of the element
    console.log($(".list-group").css("position"));
    
    // Change the property of the element
    $(".list-group").css({
        display: "none"
    })

    // :::::::::::::::::::::::::::::::: Class ::::::::::::::::::::::::::::::::: //
    
    // Removes Class
    $("#primary-button").removeClass('btn-primary')
    
    // Has Class
    console.log($("#primary-button").hasClass('btn-primary'))
    
    // Add Class
    $("#primary-button").addClass('btn-secondary')
    
    // Has Class
    console.log($("#primary-button").hasClass('btn-secondary'))
    
    // Toggle Class
    $("#primary-button").toggleClass('toggle')

    // :::::::::::::::::::::::::::::::: Events ::::::::::::::::::::::::::::::::: //

    //  On/Off
    $(".text-click .test").on('click', function() {
        $(this).parent().children().css({
            backgroundColor: "white",
            color: "black",
        })
        $(this).css({
            backgroundColor: "firebrick",
            color: "white"
        }).off('click');
    });


    // ::::::::::::::::::::::::::::::: Event Helpers :::::::::::::::::::::::::::::: //
    
    //  Click
    $(".text-click-2 .test").click(function () {
        $(this).parent().children().css({
            backgroundColor: "white",
            color: "black",
        })
        $(this).css({
            backgroundColor: "firebrick",
            color: "white"
        }).off('click');
    });
    
    // Dbl Click
    $(".text-click-2 .test").dblclick(function (event) {
        console.log(event.target)
    });
    
    // ::::::::::::::::::::::::: Event Object :::::::::::::::::::::::::::::::::: //
    
    // Stop Propagation
    $("*").on('click', function(event) {
        event.stopPropagation()
        event.preventDefault()
        // console.log(event.target);
        // console.log(event.type)
        // console.log(event.pageX) 
        // console.log(event.pageY)
    })
    
    // ::::::::::::::::::::::::: Animation :::::::::::::::::::::::::::::::::: //

    // Animation only works on style components which has numeric values
    // Swing => ease-in-out, Linear => Linear
    $(".animation .btn").click(function() {
        $(this).animate({
            "width": "200px",
            "height": "200px"
        }, 250, 'linear', function() {
            alert("animation complete")
        })
    })

    // ::::::::::::::::::::::::: Fading Elements :::::::::::::::::::::::::::::::::: //
    
    // Fade In/OUt
    $(".where .btn").on('click' , function() {
        $(this).next().fadeOut().fadeIn();
    })
    
    // Fade To
    $(".blink .btn").on('click' , function() {
        $(this)
        .fadeTo(200, 0.2)
            .fadeTo(200, 0.8)
            .fadeTo(200, 0.2)
            .fadeTo(200, 0.8)
            .fadeTo(200, 0.2)
            .fadeTo(200, 0.8)
            .fadeTo(200, 0.2)
            .fadeTo(200, 0.8);
    })

    $(".slide .slide-up").click(function() {
        $(this).parent().children().last().slideUp();
    })

    $(".slide .slide-down").click(function() {
        $(this).parent().children().last().slideDown();
    })

    $(".slide .slide-toggle").click(function() {
        $(this).parent().children().last().slideToggle();
    })

    $(".hide-show .click-hide").click(function() {
        $(this).parent().children().last().hide();
    })

    $(".hide-show .click-show").click(function() {
        $(this).parent().children().last().show();
    })

    $(".hide-show .hide-show-toggle").click(function() {
        $(this).parent().children().last().toggle();
    })
});

// ::::::::::::::::::::::::::::::: Document Ready and Window Load ::::::::::::: //

// Waits for the html only 
// $(document).on('ready', function() {})
// $(document).ready(function(){})
// $(function(){})
// // Waits for the whole page to load (Image, HTML)
// $(window).on('load', function() {})
// $(window).load(function() {})
