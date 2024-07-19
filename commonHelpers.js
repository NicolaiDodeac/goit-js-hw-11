import{S as c,i as l}from"./assets/vendor-8c59ed88.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();function u(s,r){r.innerHTML="";const o=s.map(f).join("");r.insertAdjacentHTML("beforeend",o)}function f({webformatURL:s,largeImageURL:r,tags:o,likes:n,views:e,comments:t,downloads:i}){return`
    <li class="photo-card">
      <a class="gallery-link" href="${r}">
        <img
          src="${s}"
          alt="${o}"
          loading="lazy"
        />
      </a>
      <div class="wrapper">
        <div class="info">
          <b class="student-info">Likes: ${n}</b>
          <b class="student-info">Views: ${e}</b>
          <b class="student-info">Comments: ${t}</b>
          <b class="student-info">Downloads: ${i}</b>
        </div>
      </div>
    </li>
  `}const d="44985278-910018cc950880488ff0b70a1";function h(s){const r=`https://pixabay.com/api/?key=${d}&q=${s}&image_type=photo&orientation=horizontal&safesearch=true`;return fetch(r).then(o=>{if(!o.ok)throw new Error("Network response was not ok");return o.json()})}const a={searchFormRef:document.querySelector(".searchForm"),galleryEl:document.querySelector(".gallery"),loader:document.querySelector(".loader")};a.searchFormRef.addEventListener("submit",m);function m(s){s.preventDefault();const r=s.target.elements.search.value.trim();r!==""&&(a.loader.style.display="block",h(r).then(o=>{o.hits.length>0?(u(o.hits,a.galleryEl),a.searchFormRef.reset(),new c(".gallery a",{captionsData:"alt"}).refresh()):l.error({title:"",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",color:"red"})}).catch(o=>{l.error({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight",color:"red"})}).finally(()=>{a.loader.style.display="none"}))}
//# sourceMappingURL=commonHelpers.js.map
