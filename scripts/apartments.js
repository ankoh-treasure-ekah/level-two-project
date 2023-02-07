const listItem = document.querySelectorAll('.list-item');
const apartmentSec = document.querySelector('.blurMe');

console.log(listItem);

listItem.forEach(item => {
    item.addEventListener('mouseenter', event => {
        // event.preventDefault();
        item.classList.add('active');

        listItem.forEach(element => {
            element.style.zIndex = 1;
        })

        item.style.zIndex = 4;

        apartmentSec.style.background = 'rgba(52, 54, 66, 0.8)';
        console.log('reue');
    })

    item.addEventListener('mouseleave', event => {
        // event.preventDefault();
        item.classList.remove('active');

        listItem.forEach(element => {
            element.style.zIndex = 4;
        })

        apartmentSec.style.background = 'none';

        console.log('reue');
    })
})



// listItem.addEventListener('blur', event => {
//     event.preventDefault();
//     listItem.classList.remove('active');
// })



/**HANDLE FAVORITE CHECKING */

const icons = document.querySelectorAll('p.icons');
icons.forEach(item => {
    item.querySelector('.fa-star').addEventListener('click',event => {
        event.preventDefault();
        console.log(event.target.parentNode.parentNode.parentNode.parentNode.parentNode);

        let myData = localStorage.getItem(favorite);
        let parsedData = JSON.parse(myData);

        // let mainUser = localStorage.getItem();

        let myDataUser = localStorage.getItem(loginBool);
        let parsedDataUser = JSON.parse(myDataUser);

        let userHere = parsedDataUser.email;

        let arrayList = localStorage.getItem(userHere);
        let parsedArrayList = JSON.parse(arrayList);
        
        parsedArrayList.push(event.target.parentNode.parentNode.parentNode.parentNode.parentNode.outerHTML);
        localStorage.setItem(userHere, JSON.stringify(parsedArrayList));


        console.log(parsedData);
        // if(parsedData == null) {
        //     parsedData = [];
        //     parsedData.push({
        //         email: email.value,
        //         favorite: []
        //     });
        //     localStorage.setItem(Userkey, JSON.stringify(parsedData));
        // }
        console.log(parsedDataUser.email);

        /**CHECKING FOR THE CURRENTLY LOGGED USER WHO WE WILL USE
         * FOR FAVORITE APPENDING
        */



        // for(i=0; i<parsedData.length;i++) {
        //     if(parsedData[i].email == parsedDataUser.email) {
        //         console.log('user found');
        //         console.log(parsedData[i].favorite);

        //         // let mainUser = localStorage.getItem(parsedData[i].email);
        //         // console.log(typeof(mainUser));

        //         // parsedData[i].favorite.push(event.target.parentNode.parentNode.parentNode.parentNode.parentNode);
        //         console.log(parsedData[i]);

        //         let mainUser = localStorage.getItem(parsedData[i].email);
        //         let mainUserParsed = JSON.parse(mainUser);
        //         mainUserParsed.push(event.target.parentNode.parentNode.parentNode.parentNode.parentNode.outerHTML);
        //         console.log(mainUserParsed[0]);

        //         localStorage.setItem(parsedData[i].email, JSON.stringify(mainUserParsed));


        //         // let mainUsertry = localStorage.getItem(parsedData[i].email);
        //         // // let mainUserParsedtry = JSON.parse(mainUsertry);

        //         // console.log(mainUsertry);

        //     }
        // }



        // localStorage.setItem(favorite, JSON.stringify(parsedData));


    })
})






