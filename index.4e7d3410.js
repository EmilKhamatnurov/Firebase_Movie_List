!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},a={},n=e.parcelRequire3e8b;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in a){var n=a[e];delete a[e];var i={id:e,exports:{}};return t[e]=i,n.call(i.exports,i,i.exports),i.exports}var d=Error("Cannot find module '"+e+"'");throw d.code="MODULE_NOT_FOUND",d}).register=function(e,t){a[e]=t},e.parcelRequire3e8b=n);var i=n("aaO3d");// КОНСТАНТЫ
// Статус просмотра фильма. Просмотрен - checked , не просмотрен - unchecked
let d={viewed:"checked",not_viewed:"unchecked"},o=document.querySelector("#movieInput"),s=document.querySelector("#newMovieButton"),r=document.querySelector("#movieList"),c=document.querySelector("#errorOutput"),l=[],u=(e,t)=>({id:e,name:t.name,date:t.date,status:t.status}),v=()=>{f()&&(m(),(0,i.add)(h())// функция из firebase
,g(l),w(),y())},f=()=>!!o.value.trim()||(L("Неправильно заполненное поле"),!1),m=()=>{let e=h();l.unshift(e)},h=()=>new p(o.value,(0,i.getDate)(),d.not_viewed),g=e=>{let t="";e.forEach((e,a)=>{if(!e){L("Йоооооу");return}t+=`    
		<div class="movie" >
			<div>
				<input data-check="${a}" type="checkbox" id="check_${a}" class="check-btn" name="check_${a}" ${e.status}>
				<label data-check="${a}" class="movie-label" for="check_${a}">${e.name}</label>
			</div>
			<button" class="movie-delete-btn">
				<img data-movie="${a}" src="./resources/deleteMovieBtnImage.svg" alt="кнопка удаления фильма">
			</button>
		</div>`}),0==e.length?r.innerHTML="Фильмов нет, так что иди работай...":r.innerHTML=t};// Конструктор объекта Movie
function p(e,t,a){this.name=e,this.date=t,this.status=a}// Удаление фильма
let b=e=>{(0,i.deleteDocument)(l[e].id),l.splice(e,1),g(l)},k=e=>{// Смена статуса фильма в массиве
l[e].status===d.viewed?l[e].status=d.not_viewed:l[e].status=d.viewed,// Смена статуса фильма в firebase
(0,i.updateCheckData)(l[e].id,l[e].status),// Рендер списка
g(l)},w=()=>o.value="",y=()=>o.focus(),L=e=>{c.innerText=`${e}`,c.classList.toggle("visible"),w(),y()};(0,i.get)().then(e=>{e&&e.forEach(e=>{l.unshift(u(e.id,e.data()))}),g(l)}),// ОТРАБОТЧИК 
s.addEventListener("click",v),o.addEventListener("keypress",function(e){13==e.keyCode&&v()}),r.addEventListener("click",function(e){"IMG"===e.target.tagName&&b(e.target.dataset.movie),("INPUT"===e.target.tagName||"LABEL"===e.target.tagName)&&k(e.target.dataset.check)})}();