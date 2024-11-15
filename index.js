import{S as u,i as l}from"./assets/vendor-5ObWk2rO.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();let f="";function m(n){f=n}function p(){return`https://pixabay.com/api/?key=47095824-8bdea46d531b71ca6f863e2d0&q=${encodeURIComponent(f)}&image_type=photo&orientation=horizontal&safesearch=true`}let a=null;function d(n){const o=document.querySelector(".gallery-container");n.slice(0,9).forEach(i=>{const e=document.createElement("li");e.classList.add("image-item"),e.innerHTML=`
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
        `,o.appendChild(e)}),a?a.refresh():a=new u(".gallery-container a",{captions:!0,captionsData:"alt",captionDelay:2e3})}const h=document.querySelector("#searchInput"),g=document.querySelector(".input-form"),c=document.querySelector(".loader");function y(n){n.preventDefault();const o=h.value.trim();return o?(m(o),b(),!0):(l.show({message:"Field cannot be empty",position:"topRight",backgroundColor:"#ef4040",messageColor:"#fafafb"}),!1)}function b(n){galleryContainer.innerHTML="",c.style.display="block";const o=p();fetch(o).then(r=>{if(!r.ok)throw new Error("Network response was not ok");return r.json()}).then(r=>{r.hits.length===0?l.show({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"#ef4040",messageColor:"#fafafb"}):d(r.hits)}).catch(r=>{console.error("Error fetching images:",r),l.show({message:"An error occurred while fetching images. Please try again later.",position:"topRight",backgroundColor:"#ef4040",messageColor:"#fafafb"})}).finally(()=>{c.style.display="none"})}g.addEventListener("submit",y);
//# sourceMappingURL=index.js.map
