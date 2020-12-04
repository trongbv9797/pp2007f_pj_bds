+ function($, window) {

    $("#form-validation").validate({
        ignore: ':hidden:not(:checkbox)',
        errorElement: 'label',
        errorClass: 'error',
        rules: {
            inputRequired: {
                required: true
            },
            appearance: {
                required: true
            },

            acreage: {
                digits: true
            },

            price: {
                digits: true
            },

            floors: {
                digits: true
            },

            bedrooms: {
                digits: true
            },

            inputMinLength: {
                required: true,
                minlength: 6
            },
            inputMaxLength: {
                required: true,
                minlength: 8
            },

            content: {
                required: true,
                maxlength: 3000
            },

            furniture: {
                maxlength: 2000
            },

            legalInformation: {
                maxlength: 1000
            },


            inputUrl: {
                required: true,
                url: true
            },
            inputRangeLength: {
                required: true,
                rangelength: [2, 6]
            },
            title: {
                required: true,
                rangelength: [30, 100]
            },
            inputMinValue: {
                required: true,
                min: 8
            },
            inputMaxValue: {
                required: true,
                max: 6
            },

            inputRangeValue: {
                required: true,
                max: 6,
                range: [6, 12]
            },
            inputEmail: {
                required: true,
                email: true
            },
            inputPassword: {
                required: true
            },
            inputPasswordConfirm: {
                required: true,
                equalTo: '#password'
            },
            inputDigit: {
                required: true,
                digits: true
            },
            inputValidCheckbox: {
                required: true
            }
        }
    });

    var formValidation = {};

    formValidation.init = function() {

    };
    window.formValidation = formValidation;

}(jQuery, window);

// initialize app
+

function($) {
    formValidation.init();
}(jQuery);