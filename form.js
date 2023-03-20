$(document).ready(function () {
    $("form").submit(function (event) {
        var formData = {
            name: $("#name").val(),
            surname: $("#surname").val(),
            email: $("#email").val(),
            password: $("#password").val(),
            repeatPassword: $("#repeat-password").val(),
        };

        $.ajax({
            type: "POST",
            url: "process.php",
            data: formData,
            dataType: "json",
            encode: true,
        }).done(function (data) {
            console.log(data);

        if (!data.success) {

            if (data.errors.name) {
                $("#error-block").addClass("has-error").append(
                    '<div class="help-block alert alert-danger">' + data.errors.name + "</div>"
                );
                    return;
            }

            if (data.errors.surname) {
                $("#error-block").addClass("has-error").append(
                    '<div class="help-block alert alert-danger">' + data.errors.surname + "</div>"
                );
                return;

            }

            if (data.errors.email) {
                $("#error-block").addClass("has-error").append(
                    '<div class="help-block alert alert-danger">' + data.errors.email + "</div>"
                );
                return;

            }

            if (data.errors.password) {
                $("#error-block").addClass("has-error").append(
                    '<div class="help-block alert alert-danger">' + data.errors.password + "</div>"
                );
                return;

            }

            if (data.errors.repeatPassword) {
                $("#error-block").addClass("has-error").append(
                    '<div class="help-block alert alert-danger">' + data.errors.repeatPassword + "</div>"
                );


            }

        } else {
            $("form").html(
                '<div class="alert alert-success">' + data.message + "</div>"
            );
        }

    });
    $(".error-block").removeClass("has-error");
    $(".help-block").remove();
    event.preventDefault();
    });
});