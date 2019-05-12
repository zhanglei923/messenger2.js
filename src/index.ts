

if (window.addEventListener) {
    console.log(1,window);
    window.addEventListener("message", ()=>{console.log('222');});
} else if (window.attachEvent) {
    console.log(2,window);
    window.attachEvent("onmessage", ()=>{console.log(333);});
}