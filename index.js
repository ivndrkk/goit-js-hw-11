import{S as u,i as l}from"./assets/vendor-5ObWk2rO.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();let f="";function m(n){f=n}function p(){return`https://pixabay.com/api/?key=47095824-8bdea46d531b71ca6f863e2d0&q=${encodeURIComponent(f)}&image_type=photo&orientation=horizontal&safesearch=true`}let a=null;function d(n){const t=document.querySelector(".gallery-container");t.innerHTML="",n.slice(0,9).forEach(i=>{const e=document.createElement("li");e.classList.add("image-item"),e.innerHTML=`
            <a href="${i.largeImageURL}" class="gallery-link">
                <img src="${i.webformatURL}" alt="${i.tags}" class="image-view" >
            </a>
            <div class="image-info-container">
                <ul class="image-info-list">
                    <li class="image-info-item">
                        <h2>Likes</h2>
                        <p>${i.likes}</p>
                    </li>
                    <li class="image-info-item">
                        <h2>Views</h2>
                        <p>${i.views}</p>
                    </li>
                    <li class="image-info-item">
                        <h2>Comments</h2>
                        <p>${i.comments}</p>
                    </li>
                    <li class="image-info-item">
                        <h2>Downloads</h2>
                        <p>${i.downloads}</p>
                    </li>
                </ul>
            </div>
        `,t.appendChild(e)}),a?a.refresh():a=new u(".gallery-container a",{captions:!0,captionsData:"alt",captionDelay:2e3})}const h=document.querySelector("#searchInput"),g=document.querySelector(".input-form"),c=document.querySelector(".loader");function y(n){n.preventDefault();const t=h.value.trim();return t?(m(t),b(),!0):(l.show({message:"Field cannot be empty",position:"topRight",backgroundColor:"#ef4040",messageColor:"#fafafb"}),!1)}function b(n){c.style.display="block";const t=p();fetch(t).then(r=>{if(!r.ok)throw new Error("Network response was not ok");return r.json()}).then(r=>{r.hits.length===0?l.show({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"#ef4040",messageColor:"#fafafb"}):d(r.hits)}).catch(r=>{console.error("Error fetching images:",r),l.show({message:"An error occurred while fetching images. Please try again later.",position:"topRight",backgroundColor:"#ef4040",messageColor:"#fafafb"})}).finally(()=>{c.style.display="none"})}g.addEventListener("submit",y);
//# sourceMappingURL=index.js.map
