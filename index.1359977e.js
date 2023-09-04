// КОНСТАНТЫ
// Ключь списка фильмов в Local Storage
const e="movies",t={viewed:"checked",not_viewed:"unchecked"},n=document.querySelector("#movieInput"),c=document.querySelector("#newMovieButton"),a=document.querySelector("#movieList"),i=localStorage.getItem(e),r=JSON.parse(i),o=document.querySelector("#errorOutput");// Массив объектов фильмов 
let s=[];Array.isArray(r)&&(s=r);const u=()=>{l()&&(d(),m(s),g(s),b(),f())},l=()=>!!n.value.trim()||(S("Неправильно заполненное поле"),!1),d=()=>{let e=v();s.unshift(e)};// Сохранение массива фильмов в Local Storage
function m(t){let n=JSON.stringify(t);localStorage.setItem(e,n)}// Получение фильма из поля ввода, сразу возвращается объект фильма
const v=()=>new h(n.value,k(),t.not_viewed),g=e=>{let t="";e.forEach((e,n)=>{if(!e){S("Йоооооу");return}t+=`    
		<div class="movie" >
			<div>
				<input data-check="${n}" type="checkbox" id="check_${n}" class="check-btn" name="check_${n}" ${e.status}>
				<label data-check="${n}" class="movie-label" for="check_${n}">${e.name}</label>
			</div>
			<button" class="movie-delete-btn">
				<img data-movie="${n}" src="resources/delete-movie-btn-image.svg" alt="кнопка удаления фильма">
			</button>
		</div>`}),0==e.length?a.innerHTML="Фильмов нет, так что иди работай...":a.innerHTML=t};// Конструктор объекта Movie
function h(e,t,n){this.name=e,this.date=t,this.status=n}// Генерация текущей даты
const k=()=>{let e=new Date;return e.toLocaleString("ru-RU",{day:"numeric",month:"numeric",year:"numeric"})+" "+e.toLocaleString("ru-RU",{hour:"numeric",minute:"numeric",second:"numeric"})},y=e=>{s.splice(e,1),m(s),g(s)},L=e=>{s[e].status===t.viewed?s[e].status=t.not_viewed:s[e].status=t.viewed,m(s),g(s)},b=()=>n.value="",f=()=>n.focus(),S=e=>{o.innerText=`${e}`,o.classList.toggle("visible"),b(),f()};g(s),// ОТРАБОТЧИК 
c.addEventListener("click",u),n.addEventListener("keypress",function(e){13==e.keyCode&&u()}),a.addEventListener("click",function(e){"IMG"===e.target.tagName&&y(e.target.dataset.movie),("INPUT"===e.target.tagName||"LABEL"===e.target.tagName)&&L(e.target.dataset.check)});// 
