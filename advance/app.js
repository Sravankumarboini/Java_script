console.log("one");

function hello(){
    console.log("hello");
}
setTimeout(()=>{
    console.log("hello");
}, 2000);

console.log("two");


function getData(dataId, getNextData){
    setTimeout(()=>{
    console.log("data", dataId);
    if(getNextData){
         getNextData();
    }
}, 2000);
}

getData(1, ()=>{
    getData(2, ()=>{
        getData(3);
    });
});