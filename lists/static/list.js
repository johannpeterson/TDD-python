jQuery(document).ready(function($) {
    jQuery("*").on('keypress', ':input', function() {
            jQuery('.has-error').hide();
            console.log('keypress!');
        }
    );

    jQuery("*").on('click', ':input', function() {
            jQuery('.has-error').hide();
            console.log('click!');
        }
    );

})
