document.addEventListener("DOMContentLoaded",function(){const e=document.querySelectorAll(".carousel-slide");let t=0;document.querySelectorAll(".control-btn").forEach(n=>{n.addEventListener("click",function(){!function(n){e[t].classList.remove("active"),t="next"===n?(t+1)%e.length:(t-1+e.length)%e.length,e[t].classList.add("active")}(this.getAttribute("data-dir"))})})}),document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector(".mainMenu"),t=document.querySelector(".closeMenu"),n=document.querySelector(".openMenu"),o=document.querySelectorAll("nav .mainMenu li a");function i(){e.style.top="-120%"}n.addEventListener("click",function(){e.style.display="flex",e.style.top="0",document.body.classList.add("no-scroll")}),t.addEventListener("click",i),o.forEach(e=>{e.addEventListener("click",function(){i()})});let c=0;const l=document.getElementById("sticky-section");function i(){e.style.top="-120%",document.body.classList.remove("no-scroll")}function s(){console.log("openPopup was called"),document.getElementById("inquiryPopup").style.display="block"}function d(){console.log("closePopup was called"),document.getElementById("inquiryPopup").style.display="none"}function s(){document.getElementById("inquiryPopup").style.display="block"}function d(){document.getElementById("inquiryPopup").style.display="none"}window.addEventListener("scroll",function(){const e=window.pageYOffset||document.documentElement.scrollTop;e>c&&e>0?l.classList.add("hide-header"):l.classList.remove("hide-header"),c=e<=0?0:e},!1),document.querySelectorAll(".inquiry-button").forEach(e=>{e.addEventListener("click",s)}),document.querySelector(".close-popup").addEventListener("click",d),window.addEventListener("click",function(e){const t=document.getElementById("inquiryPopup");e.target===t&&d()})}),document.addEventListener("DOMContentLoaded",function(){document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector(".arrow-link"),t=document.getElementById("yacht-listings");e.addEventListener("click",function(e){e.preventDefault();const n=t.getBoundingClientRect().top+window.pageYOffset-170;window.scroll({top:n,behavior:"smooth"})})})});let observer=new IntersectionObserver(function(e){e.forEach(e=>{e.isIntersecting?e.target.classList.add("active"):e.target.classList.remove("active")})},{threshold:[1]});observer.observe(document.querySelector(".title")),document.addEventListener("DOMContentLoaded",function(){let e=new IntersectionObserver(function(e){e.forEach(function(e){e.isIntersecting&&(e.target.style.animationPlayState="running")})});document.querySelectorAll(".new-title, .new-description").forEach(function(t){e.observe(t)})}),document.addEventListener("scroll",function(){document.querySelectorAll(".new-description").forEach(function(e,t){e.getBoundingClientRect().top<=.1*window.innerHeight&&setTimeout(function(){e.classList.add("active")},200*t)})});let lastScrollTop=0;function isInViewport(e){const t=e.getBoundingClientRect(),n=t.top<=(window.innerHeight||document.documentElement.clientHeight)&&t.bottom>=0;return console.log(`Element top: ${t.top}, bottom: ${t.bottom}, isInView: ${n}`),n}function handleScroll(){document.querySelectorAll(".image-block").forEach(e=>{if(isInViewport(e)){const t=e.querySelector(".text-container");console.log("Animating text container"),t.style.transform="translateY(0)"}})}function toggleGuide(e){const t=e.querySelector(".accordion-content");e.classList.contains("active")?(e.classList.remove("active"),t.style.maxHeight="0"):(document.querySelectorAll(".accordion-item").forEach(e=>{e.classList.remove("active"),e.querySelector(".accordion-content").style.maxHeight="0"}),e.classList.add("active"),t.style.maxHeight=t.scrollHeight+"px")}window.addEventListener("scroll",function(){let e=window.pageYOffset||document.documentElement.scrollTop;e>lastScrollTop&&e>0?document.getElementById("sticky-section").classList.add("hide-header"):document.getElementById("sticky-section").classList.remove("hide-header"),lastScrollTop=e}),window.addEventListener("scroll",handleScroll);let isDragging=!1,initialClickOffset=0;const customSlider=document.getElementById("custom-slider"),image1=document.getElementById("image1"),image2=document.getElementById("image2"),indicator=document.querySelector(".indicator");function updateSliderHeight(){const e=image1.offsetHeight;customSlider.style.height=`${e}px`,indicator.style.top=`${e/2}px`,document.querySelector(".image-slider-container").style.height=`${e}px`}function startDrag(e){const t=e.clientX||e.touches[0].clientX,n=customSlider.getBoundingClientRect();initialClickOffset=t-n.left,isDragging=!0}function drag(e){if(!isDragging)return;const t=e.clientX||e.touches[0].clientX,n=customSlider.parentElement.getBoundingClientRect();let o=(t-n.left-initialClickOffset)/n.width*100;o=Math.min(Math.max(o,0),100),customSlider.style.left=`${o}%`,image2.style.clipPath=`inset(0 ${100-o}% 0 0)`}function stopDrag(){isDragging=!1}function loadYachts(e){yachtGrid.innerHTML="",e.forEach(e=>{const t=document.createElement("div");t.innerHTML=`<h3>${e.name}</h3>`,yachtGrid.appendChild(t)})}function applyFilters(){const e=nameSearch.value.toLowerCase();document.querySelectorAll(".yacht-card").forEach(t=>{const n=t.querySelector(".yacht-name").textContent.toLowerCase(),o=""===e||n.includes(e);t.style.display=o?"":"none"})}function resetAllFilters(){priceFilter.value="all",lengthFilter.value="all",nameSearch.value="",applyFilters()}window.addEventListener("load",()=>{updateSliderHeight()}),window.addEventListener("resize",updateSliderHeight),customSlider.addEventListener("mousedown",startDrag),window.addEventListener("mousemove",drag),window.addEventListener("mouseup",stopDrag),customSlider.addEventListener("touchstart",startDrag,{passive:!0}),window.addEventListener("touchmove",drag,{passive:!0}),window.addEventListener("touchend",stopDrag,{passive:!0}),document.addEventListener("DOMContentLoaded",function(){let e=document.querySelectorAll(".yacht-slide-in");const t=document.getElementById("yacht-listings");window.addEventListener("scroll",function(){window.scrollY+window.innerHeight>t.offsetTop&&e.forEach((e,t)=>{setTimeout(()=>{e.classList.add("slide-up")},150*t)})})}),document.addEventListener("DOMContentLoaded",e=>{const t=new IntersectionObserver(function(e,t){e.forEach(e=>{if(e.isIntersecting){e.target.classList.add("visible"),t.unobserve(e.target);const i=n[++o];i&&setTimeout(()=>{t.observe(i)},1e3)}})},{threshold:.5}),n=Array.from(document.querySelectorAll(".animate"));let o=0;t.observe(n[o])}),document.addEventListener("DOMContentLoaded",function(){window.addEventListener("scroll",function(){const e=document.getElementById("yachting-guide"),t=window.scrollY,n=window.innerHeight,o=e.offsetTop-n/2;e.style.opacity=t>=o?"1":"0"})}),window.addEventListener("scroll",function(){var e=window.pageYOffset,t=document.querySelector(".wrapper"),n=t.offsetTop+t.offsetHeight;e>t.offsetTop&&e<=n?t.style.backgroundPositionY=(e-t.offsetTop)/1.5+"px":t.style.backgroundPositionY="0"}),priceFilter.addEventListener("change",applyFilters),lengthFilter.addEventListener("change",applyFilters),nameSearch.addEventListener("input",applyFilters),resetFilters.addEventListener("click",resetAllFilters);









