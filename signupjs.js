$(document).ready(function() {
  $("#signupform").validate({
    rules: {
      email: {
        required: true,
        email: true,

      },
      password: {
        required: true,
        number: true,
      },

    },
    messages : {

      email: {
        required: "Your email adderess is required ",
        email: "Your email adress is invalid"
      },
      password: {
        required: "Password is required",
        number: "The name should not contain numbers or symbols andmust be larger than 5 characters.Standard Email validation.Password must contain at least one capital case, onesimple case, one
number, one symbol and should be exactly 8 characterslong"
      }
    }
  });
});

console.log("hihvhvmhvjhvjhvuv");
