var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},a={},n=e.parcelRequire3e8b;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in a){var n=a[e];delete a[e];var i={id:e,exports:{}};return t[e]=i,n.call(i.exports,i,i.exports),i.exports}var o=Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){a[e]=t},e.parcelRequire3e8b=n);var i=n("10vDQ");// КОНСТАНТЫ
// Статус просмотра фильма. Просмотрен - checked , не просмотрен - unchecked
const o={viewed:"checked",not_viewed:"unchecked"},s=document.querySelector("#movieInput"),d=document.querySelector("#newMovieButton"),c=document.querySelector("#movieList"),r=document.querySelector("#errorOutput");// Массив объектов фильмов 
let l=[];const u=(e,t)=>({id:e,name:t.name,date:t.date,status:t.status}),v=()=>{f()&&(m(),(0,i.add)(h())// функция из firebase
,g(l),w(),y())},f=()=>!!s.value.trim()||(L("Неправильно заполненное поле"),!1),m=()=>{let e=h();l.unshift(e)},h=()=>new p(s.value,(0,i.getDate)(),o.not_viewed),g=e=>{let t="";e.forEach((e,a)=>{if(!e){L("Йоооооу");return}t+=`    
		<div class="movie" >
			<div>
				<input data-check="${a}" type="checkbox" id="check_${a}" class="check-btn" name="check_${a}" ${e.status}>
				<label data-check="${a}" class="movie-label" for="check_${a}">${e.name}</label>
			</div>
			<button" class="movie-delete-btn">
				<img data-movie="${a}" src="./deleteMovieBtnImage.svg" alt="кнопка удаления фильма">
			</button>
		</div>`}),0==e.length?c.innerHTML="Фильмов нет, так что иди работай...":c.innerHTML=t};// Конструктор объекта Movie
function p(e,t,a){this.name=e,this.date=t,this.status=a}// Удаление фильма
const b=e=>{(0,i.deleteDocument)(l[e].id),l.splice(e,1),g(l)},k=e=>{// Смена статуса фильма в массиве
l[e].status===o.viewed?l[e].status=o.not_viewed:l[e].status=o.viewed,// Смена статуса фильма в firebase
(0,i.updateCheckData)(l[e].id,l[e].status),// Рендер списка
g(l)},w=()=>s.value="",y=()=>s.focus(),L=e=>{r.innerText=`${e}`,r.classList.toggle("visible"),w(),y()};(0,i.get)().then(e=>{e&&e.forEach(e=>{l.unshift(u(e.id,e.data()))}),g(l)}),// ОТРАБОТЧИК 
d.addEventListener("click",v),s.addEventListener("keypress",function(e){13==e.keyCode&&v()}),c.addEventListener("click",function(e){"IMG"===e.target.tagName&&b(e.target.dataset.movie),("INPUT"===e.target.tagName||"LABEL"===e.target.tagName)&&k(e.target.dataset.check)});// 
