document.addEventListener("click",function(t){var e=document.querySelector(".spider"),i=document.querySelector(".wall");if(t.target===i){var n=i.clientWidth,c=i.clientHeight,l=e.clientWidth,a=e.clientHeight,o=t.offsetX-l/2,r=t.offsetY-a/2;o=Math.max(0,Math.min(o,n-l)),r=Math.max(0,Math.min(r,c-a)),e.style.left=o+"px",e.style.top=r+"px"}});
//# sourceMappingURL=index.d339d1db.js.map
