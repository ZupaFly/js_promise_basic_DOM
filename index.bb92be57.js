// Promise 1 and 2 created
var e=new Promise(function(e,t){document.querySelector(".logo").addEventListener("click",function(){e()})}),t=new Promise(function(e,t){setTimeout(function(){t(Error("Promise was rejected"))},3e3)}),n=function(){var e=document.createElement("div");e.className="message",e.textContent="Promise was resolved!",document.body.appendChild(e)},o=function(){var e=document.createElement("div");e.className="message error-message",e.textContent="Promise was rejected!",document.body.appendChild(e)};// Attach handlers to promises
e.then(n).catch(o),t.then(n).catch(o);//# sourceMappingURL=index.bb92be57.js.map

//# sourceMappingURL=index.bb92be57.js.map
