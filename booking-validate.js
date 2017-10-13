// validate contact form
    $(function() {
        $('#book_cruise').validate({
            rules: {
                book_full_name: {
                    required: true,
                    minlength: 2
                },
                book_email: {
                    required: true,
                    email: true
                },
                book_tel: {
                    required: true
                },
                destinations : {
                    required: true

                },
                book_ship : {
                    required: true
                }
                
            },
            messages: {
                book_full_name:{
                    required: "come on, you have a name don't you?",
    
                },
                book_email: {
                    required: "come on, you have an email don't you?",
                    minlength: "your name must consist of at least 5 characters"
                },
                book_tel: {
                    required: "Enter your mobile number"
                },
                destinations : {
                    required: "Please select a destination, it will helpful for us",
                    minlength: "Please select a destination"

                },
                book_ship: {
                    required: "Please select a Cruise Ship. It will hep us to quote you well"
                }
                
                
            },
            submitHandler: function(form) {
                $(form).ajaxSubmit({
                    type:"POST",
                    data: $(form).serialize(),
                    url:"booking-mailer.php",
                    success: function() {
                        $('#book_cruise :input').attr('disabled', 'disabled');
                        $('#book_cruise').fadeTo( "slow", 0.15, function() {
                            $(this).find(':input').attr('disabled', 'disabled');
                            $(this).find('label').css('cursor','default');
                            $('#success').fadeIn();
                            setTimeout(function(){
                                $('#success').fadeOut();
                                $('#book_cruise').fadeTo( "slow", 1.5);
                                var form = document.getElementById("book_cruise");
                                form.reset();
                                $('#book_cruise :input').attr('disabled', false);
                            },3000);
                        });
                    },
                    error: function() {
                        $('#book_cruise').fadeTo( "slow", 0.15, function() {
                            $('#error').fadeIn();
                        });
                    }
                });
            }
        });
    });