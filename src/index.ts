import listener from './listener';
import requester from './requester';
if ((<any>window).addEventListener) {
    (<any>window).addEventListener("onmessage", ()=>{})
} else if ((<any>window).attachEvent) {
    (<any>window).attachEvent("onmessage", ()=>{})
}

listener.a()

// var a=1;


// if (window.addEventListener) {
//     console.log(1,window);
//     window.addEventListener("message", ()=>{
        
//         console.log('222');
    
//         interface Person {
//             firstName: string;
//             lastName: string;
//         }

//         function greeter(person: Person) {
//             return "Hello, " + person.firstName + " " + person.lastName;
//         }

//         let user = { firstName: "Jane", lastName: "User" };

//         document.body.innerHTML = greeter(user);
//     });
// } else if (window.attachEvent) {
//     console.log(2,window);
//     window.attachEvent("onmessage", ()=>{console.log(333);});
// }