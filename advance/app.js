// let promise = new promise((resolve, reject)=>{
//     console.log("i am a promise");
//     resolve("success");
// });
//-----------------------------------------------------------------

// const getPromise = () => {
//     return new Promise((resolve, reject)=>{
//         console.log("i am a promise");
//         resolve("success");
//     });
// };

// let promise = getPromise();
// promise.then((res)=>{
//     console.log("promise fulfilled", res);
// });

// promise.catch((err)=>{
//     console.log("promise rejected");
// })

//-----------------------------------------------------------------
// console.log("one");

// function hello(){
//     console.log("hello");
// }
// setTimeout(()=>{
//     console.log("hello");
// }, 2000);

// console.log("two");

//-----------------------------------------------------------------
// function getData(dataId, getNextData){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("data", dataId);
//             resolve("success");
//             if(getNextData){
//                 getNextData();
//             }
//         }, 5000);
//     })
// }
// //callback hell
// getData(1, ()=>{
//     getData(2, ()=>{
//         getData(3, ()=>{
//             getData(4);
//         });
//     });
// });
//--------------------------------------------------------------------

// function asyncFunc1(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             console.log("data1");
//             resolve("successsss");
//         }, 4000);
//     });
// };

// function asyncFunc2(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             console.log("data2");
//             resolve("successsss");
//         }, 4000);
//     });
// };

// console.log("fetching data1....");
// asyncFunc1().then((res)=>{
//     console.log(res);
//     console.log("fetching data2....");
//     asyncFunc2().then((res)=> {
//         console.log(res);
//     });
// });

//-------------------------------------------------------------------

// async function hello(){
//     console.log("hello");
// }

// hello();

// function api(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             console.log("weather data..");
//             resolve(200);
//         }, 2000);
//     });
// };

// async function getWeatherData(){
//     await api();  //1st
//     await api(); //2nd 
// }

//Aync Await

function getData(dataId){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("data", dataId);
            resolve("success");
        }, 2000);
    });
}

// async function getAllData(){
//     console.log("getting data1...");
//     await getData(1);
//     console.log("getting data2...");
//     await getData(2);
//     console.log("getting data3...");
//     await getData(3);
// }

(async function (){
    console.log("getting data1...");
    await getData(1);
    console.log("getting data2...");
    await getData(2);
    console.log("getting data3...");
    await getData(3);
})();