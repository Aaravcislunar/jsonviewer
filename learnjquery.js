$(document).ready(function () {
console.log("We are using Jquery");
    $('p').click(function () {
        console.log('CLicked', this);
        // $(this).hide();
    })
    // $('p').dblclick(function () {
    //     console.log('Double Clicked', this);
    //     // $(this).hide();
    // })
    // $('p').mouseenter(function () {
    //     console.log('You Entered:', this);
    //     // $(this).hide();
    // })
    // $('p').hover(function () {
    //     console.log('You Entered:', this);
    //     // $(this).hide();
    // }, function(){
    //     console.log('Thanks for coming');
    // })
    // $('#second').click();
    // $('.odd').click();
    $('p').on({
        click: function () {
            console.log('Thanks for Clicking', this);
        },
        mouseleave: function () {
            console.log('mouseleft');
        }
    })
    // $('#temp').hide(1000,  function(){             //callback function
    //     console.log('Hidden');
    // });

    // $('#btn1').on('click', function(){
    //     $('#temp').hide(1000,  function(){             //callback function
    //         console.log('Hidden');
    //     });
    // })
    // $('#btn2').on('click', function(){
    //     $('#temp').show(1000,  function(){             //callback function
    //         console.log('show');
    //      });
    // })
    // fade methods animation in JQuery
    // $('#btn1').click(function(){
    //     $('#temp').fadeTo( "slow" , 0.5);
    //     console.log('toggled');
    // })
    // slide methods in JQuery
    // $('#btn1').click(function(){
    //     $('#temp').slideToggle(1000);
    // })

    // $('#temp').animate({
    //     opacity: 0.5,
    //     width: '500px',
    //     height:  '650px'
    // }, "slow")
    $('#btn1').click(function(){
        $('#temp').text("This is Aarav");
        console.log('changed text');
    })
    // $('#temp').addClass('WIKI');
    // $('#temp').addClass('WIKI2');    
    // $('#temp').removeClass('WIKI');
    // $('#temp').removeClass('WIKI2');
    $('#temp').css(
    'background-color', 'red');
    $('#temp').css('background-color');


    });