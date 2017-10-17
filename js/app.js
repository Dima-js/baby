$(document).ready(function() {
    $('.pupup_rules_akcia').magnificPopup(
        {
            type:'inline',
            midClick: true,
            showCloseBtn: false,
            mainClass: 'animated slideInDown'
        }
    );
    $('.btn-close').click(function() {
        $.magnificPopup.close({
                mainClass: 'animated slideOutDown'
        }
        );
    });
function sum() {
    var suma;
    suma = parseInt($('.quantity input').val()) * 67;
    $('.sum_product').val(suma);
}
    sum();

    $('.header-btn1 a:first-child').click(function() {

    });
});

jQuery(function($) {
    $(".val").mask("+38(999) 999-9999");
    $(".sicret-code").mask("99-99-99");
});
function sum() {
    var suma;
    suma = parseInt($('.quantity input').val()) * 67;
    $('.sum_product').val(suma);
}
$('.sel').each(function() {
    $(this).children('select').css('display', 'none');

    var $current = $(this);

    $(this).find('option').each(function(i) {
        if (i == 0) {
            $current.prepend($('<div>', {
                class: $current.attr('class').replace(/sel/g, 'sel__box')
            }));

            var placeholder = $(this).text();
            $current.prepend($('<span>', {
                class: $current.attr('class').replace(/sel/g, 'sel__placeholder'),
                text: placeholder,
                'data-placeholder': placeholder
            }));

            return;
        }

        $current.children('div').append($('<span>', {
            class: $current.attr('class').replace(/sel/g, 'sel__box__options'),
            text: $(this).text()
        }));
    });
});

// Toggling the `.active` state on the `.sel`.
$('.sel').click(function() {
    $(this).toggleClass('active');
});

// Toggling the `.selected` state on the options.
$('.sel__box__options').click(function() {
    var txt = $(this).text();
    var index = $(this).index();

    $(this).siblings('.sel__box__options').removeClass('selected');
    $(this).addClass('selected');

    var $currentSel = $(this).closest('.sel');
    $currentSel.children('.sel__placeholder').text(txt);
    $currentSel.children('select').prop('selectedIndex', index + 1);
});


jQuery('<div class="quantity-nav">' +
    '<div class="quantity-wrap">' +
    '<div class="quantity-button quantity-up"></div>' +
    '<div class="quantity-button quantity-down"></div>' +
    '</div>' +
    '</div>').insertAfter('.quantity input');
jQuery('.quantity').each(function() {
    var spinner = jQuery(this),
        input = spinner.find('input[type="number"]'),
        btnUp = spinner.find('.quantity-up'),
        btnDown = spinner.find('.quantity-down'),
        min = input.attr('min'),
        max = input.attr('max');

    btnUp.click(function() {
        var oldValue = parseFloat(input.val());
        if (oldValue >= max) {
            var newVal = oldValue;
        } else {
            var newVal = oldValue + 1;
        }
        spinner.find("input").val(newVal);
        spinner.find("input").trigger("change");
    });

    btnDown.click(function() {
        var oldValue = parseFloat(input.val());
        if (oldValue <= min) {
            var newVal = oldValue;
        } else {
            var newVal = oldValue - 1;
        }
        spinner.find("input").val(newVal);
        spinner.find("input").trigger("change");
    });

});