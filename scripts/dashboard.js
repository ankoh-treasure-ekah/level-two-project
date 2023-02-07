const tabControl = document.querySelectorAll('.dash-tab');
const panelContents = document.querySelectorAll('.panel-content-tab');
const dashPanelContent = document.querySelector('.dash-panel-content');

tabControl.forEach(item => {
    item.addEventListener('click', event => {
        event.preventDefault();
        
        tabControl.forEach(element => {
            element.classList.remove('active');
        })

        panelContents.forEach(element => {
            element.classList.remove('active');
        })
        
        if(item.classList.contains('active')) {
            console.log(item.classList[item.classList.length - 2]);
            return
        }

        let itemToView = dashPanelContent.querySelector(item.classList[item.classList.length - 1]);
        let name = item.classList[item.classList.length - 1];

        dashPanelContent.querySelector(`.${name}`).classList.add('active');
        
        item.classList.add('active');
    })
})




/**
 * LOGIC FOR FAVORITE AND LIKES AND MANY
 * MORE USER ONLY FEATURES
 */

function createElementFromHTML(htmlString) {
    var div = document.createElement('div');
    div.innerHTML = htmlString.trim();
  
    // Change this to div.childNodes to support multiple top-level nodes.
    return div.firstChild;
}

const panelList = document.querySelector('.panel-lists');

console.log(panelList);

let myData = localStorage.getItem(loginBool);
let parsedData = JSON.parse(myData);

let userHere = parsedData.email;

let arrayList = localStorage.getItem(userHere);
let parsedArrayList = JSON.parse(arrayList);

console.log(parsedArrayList);

// let results = createElementFromHTML(parsedArrayList[0]);
// console.log(results);

parsedArrayList.forEach(item => {
    let results = createElementFromHTML(item);
    panelList.appendChild(results);
})





/**CHECK IF USER IS LOGGED IN BEFORE PROCEEDING WITH
 * USER FEATURES
 */







// const icons = document.querySelectorAll('p.icons');
// icons.forEach(item => {
//     item.querySelector('.fa-star').addEventListener('click',event => {
//         event.preventDefault();
//         console.log(event.target.parentNode.parentNode.parentNode.parentNode.parentNode);

//         let myData = localStorage.getItem(favorite);
//         let parsedData = JSON.parse(myData);

//         // let mainUser = localStorage.getItem();

//         let myDataUser = localStorage.getItem(loginBool);
//         let parsedDataUser = JSON.parse(myDataUser);

//         console.log(parsedData);
//         // if(parsedData == null) {
//         //     parsedData = [];
//         //     parsedData.push({
//         //         email: email.value,
//         //         favorite: []
//         //     });
//         //     localStorage.setItem(Userkey, JSON.stringify(parsedData));
//         // }
//         console.log(parsedDataUser.email);

//         /**CHECKING FOR THE CURRENTLY LOGGED USER WHO WE WILL USE
//          * FOR FAVORITE APPENDING
//         */

//         for(i=0; i<parsedData.length;i++) {
//             if(parsedData[i].email == parsedDataUser.email) {
//                 console.log('user found');
//                 console.log(parsedData[i].favorite);

//                 // let mainUser = localStorage.getItem(parsedData[i].email);
//                 // console.log(typeof(mainUser));

//                 // parsedData[i].favorite.push(event.target.parentNode.parentNode.parentNode.parentNode.parentNode);
//                 console.log(parsedData[i]);

//                 let mainUser = localStorage.getItem(parsedData[i].email);
//                 let mainUserParsed = JSON.parse(mainUser);
//                 mainUserParsed.push(event.target.parentNode.parentNode.parentNode.parentNode.parentNode.outerHTML);
//                 console.log(mainUserParsed[0]);

//                 localStorage.setItem(parsedData[i].email, JSON.stringify(mainUserParsed));


//                 // let mainUsertry = localStorage.getItem(parsedData[i].email);
//                 // // let mainUserParsedtry = JSON.parse(mainUsertry);

//                 // console.log(mainUsertry);

//             }
//         }



//         // localStorage.setItem(favorite, JSON.stringify(parsedData));


//         let arraynew = [];




        
//         // parsedData.favorites.push(event.target.parentNode.parentNode.parentNode.parentNode.parentNode);
//         // console.log(parsedData);
//         // // console.log(newData);
//         // arraynew.push(event.target.parentNode.parentNode.parentNode.parentNode.parentNode);
//         // // console.log(arraynew);
//         // console.log(JSON.stringify(parsedData));
//         // localStorage.setItem(loginBool, JSON.stringify(parsedData));

//     })
//     // console.log(item.querySelector('.fa-star').parentNode.parentNode.parentNode.parentNode.parentNode);
// })




