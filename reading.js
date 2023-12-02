//-------------------extRacting user data----------------->

    const form = document.getElementById("form");
    const name = document.getElementById("name");
    const lastName = document.getElementById("lastName");
    const email = document.getElementById("email");

    //listen when use select submit button
    form.addEventListener('submit', function(e){
            e.preventDefault();

//values of data & storing data

        localStorage.setItem('name', name.value);
        localStorage.setItem('lastName', lastName.value);
        localStorage.setItem('email', email.value);

        //send to next page
        window.location.href = "Profile.html";

    })