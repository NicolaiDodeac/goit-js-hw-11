import{i as a}from"./assets/vendor-ad859c2f.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const l=document.querySelector(".searchForm"),c=document.querySelector(".gallery");l.addEventListener("submit",u);function u(o){o.preventDefault();const r=o.target.elements.search.value.trim();if(r==="")return;const s=`https://pixabay.com/api/?key=44985278-910018cc950880488ff0b70a1&q=${r}&image_type=photo&orientation=horizontal&safesearch=true`;fetch(s).then(e=>{if(!e.ok)throw new Error("Network response was not ok");return e.json()}).then(e=>{e.hits.length>0?f(e.hits):a.error({title:"",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",color:"red"})}).catch(e=>{a.error({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight",color:"red"})})}function f(o){c.innerHTML="",l.reset();const r=o.map(d).join("");c.insertAdjacentHTML("beforeend",r)}function d({webformatURL:o,largeImageURL:r,tags:i,likes:s,views:e,comments:t,downloads:n}){return`
    <li class="photo-card">
      <a class="gallery-link" href="${r}">
        <img
          src="${o}"
          alt="${i}"
          loading="lazy"
        />
      </a>
      <div class="wrapper">
        <div class="info">
          <b class="student-info">Likes: ${s}</b>
          <b class="student-info">Views: ${e}</b>
          <b class="student-info">Comments: ${t}</b>
          <b class="student-info">Downloads: ${n}</b>
        </div>
      </div>
    </li>
  `}
//# sourceMappingURL=commonHelpers.js.map
