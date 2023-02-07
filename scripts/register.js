const username = document.querySelector('.register-field');
const password = document.querySelector('.password-filed-register');
const email = document.querySelector('.email-field')
const RegisterBtn = document.querySelector('.wrapper-btn-register');
const Userkey = "MyUsers";


RegisterBtn.addEventListener('click', (event) => {
    event.preventDefault();
    if(username.value.length > 0){
        if(email.value.length > 0){
            if(password.value.length > 0){
                let myData = localStorage.getItem(Userkey);
                let parsedData = JSON.parse(myData);
                if(parsedData == null) {
                    parsedData = [];
                    parsedData.push({
                        username: username.value,
                        password: btoa(password.value),
                        email: email.value
                    });
                    localStorage.setItem(Userkey, JSON.stringify(parsedData));

                    /**CREATING USER FAVORITES PANE */
                    let myDatafav = localStorage.getItem(favorite);
                    let parsedDatafav = JSON.parse(myDatafav);
                    if(parsedDatafav == null) {
                        parsedDatafav = [];
                        parsedDatafav.push({
                            email: email.value,
                            favorite: []
                        });
                        localStorage.setItem(favorite, JSON.stringify(parsedDatafav));
                    }

                    else {
                        parsedDatafav.push({
                            email: email.value,
                            favorite: []
                        });
                        localStorage.setItem(favorite, JSON.stringify(parsedDatafav));
                    }



                    // alert('user successfully created.');
                    localStorage.setItem(email.value, JSON.stringify([]));
                    welcomeMessage.querySelector('span').textContent = 'user successfully created.';
                    welcomeMessage.classList.add('active');
                    setTimeout(() => {welcomeMessage.classList.remove('active');}, 1000)
                    username.value = "";
                    password.value = "";
                    email.value = "";

                    return
                }

                for(i=0; i<parsedData.length;i++){
                    if(email.value == parsedData[i].email){
                        alert('email already exists');
                        return
                    }
                }


                localStorage.setItem(email.value, JSON.stringify([]));


                /**CREATING USER FAVORITES PANE */
                let myDatafav = localStorage.getItem(favorite);
                let parsedDatafav = JSON.parse(myDatafav);
                
                
                parsedDatafav.push({
                    email: email.value,
                    favorite: []
                });
                localStorage.setItem(favorite, JSON.stringify(parsedDatafav));
                

                
                console.log(parsedData);
                
                parsedData.push({
                    username: username.value,
                    password: btoa(password.value),
                    email: email.value
                });

                localStorage.setItem(Userkey, JSON.stringify(parsedData));
                // alert('user successfully created.');
                welcomeMessage.querySelector('span').textContent = 'user successfully created.';
                welcomeMessage.classList.add('active');
                setTimeout(() => {welcomeMessage.classList.remove('active');}, 1000)
                username.value = "";
                password.value = "";
                email.value = "";
    
                
                console.log(parsedData);
    
            }
            else {
                alert('password required')
            }

        }

        else {
            alert('email required');
        }

    }
    else {
        alert('username required')
    }
    
})