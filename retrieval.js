
    //taking data from another page
    const name =localStorage.getItem('name');
    const lastName =  localStorage.getItem('lastName');
    const email =  localStorage.getItem('email');

    //writing them
    document.getElementById('name').textContent = name;
    document.getElementById('lastName').textContent = lastName;
    document.getElementById('email').textContent = email;
