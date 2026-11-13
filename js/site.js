(function(){var t=document.getElementById('menutoggle'),d=document.getElementById('drawer');if(!t||!d){return;}
function setOpen(o){d.classList.toggle('open',o);t.setAttribute('aria-expanded',o?'true':'false');t.textContent=o?'Close':'Menu';document.documentElement.style.overflow=o?'hidden':'';}
t.addEventListener('click',function(){setOpen(!d.classList.contains('open'));});
d.addEventListener('click',function(e){if(e.target.closest('a')){setOpen(false);}});
window.addEventListener('resize',function(){if(window.innerWidth>900){setOpen(false);}});
document.addEventListener('keydown',function(e){if(e.key==='Escape'){setOpen(false);}});
})();
