// validate contact form
    $(function() {
        $('#home_booking').validate({
            rules: {
                full_name: {
                    required: true,
                    minlength: 2
                },
                email: {
                    required: true,
                    email: true
                },
                destinations : {
                    required: true

                },
                ship : {
                    required: true
                }
                
            },
            messages: {
                full_name:{
                    required: "come on, you have a name don't you?",
    
                },
                email: {
                    required: "come on, you have an email don't you?",
                    minlength: "your name must consist of at least 5 characters"
                },
                destinations : {
                    required: "Please select a destination, it will helpful for us",
                    minlength: "Please select a destination"

                },
                ship: {
                    required: "Please select a Cruise Ship. It will hep us to quote you well"
                }
                
                
            },
            submitHandler: function(form) {
                $(form).ajaxSubmit({
                    type:"POST",
                    data: $(form).serialize(),
                    url:"home-booking-mailer.php",
                    success: function() {
                        $('#home_booking :input').attr('disabled', 'disabled');
                        $('#home_booking').fadeTo( "slow", 0.15, function() {
                            $(this).find(':input').attr('disabled', 'disabled');
                            $(this).find('label').css('cursor','default');
                            $('#success').fadeIn();
                            setTimeout(function(){
                                $('#success').fadeOut();
                                $('#home_booking').fadeTo( "slow", 1.5);
                                var form = document.getElementById("home_booking");
                                form.reset();
                                $('#home_booking :input').attr('disabled', false);
                            },3000);
                        });
                    },
                    error: function() {
                        $('#home_booking').fadeTo( "slow", 0.15, function() {
                            $('#error').fadeIn();
                        });
                    }
                });
            }
        });
    });