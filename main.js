async function getapi(){
    const resp = await fetch('https://api.alquran.cloud/v1/quran/quran-uthmani');
    const data = await resp.json();
    let surahs = data.data.surahs;
  let se =  document.getElementById('se')
  let i =1;
       se.innerHTML =`
       
       <div  id='big' >
                 ${
       
      surahs.map(sorah=>`<div id=${i++}  onclick = "getaya(this.id),l()" > ${sorah.name}</div>`)
      
            }</div>`
}
getapi()
let btn1 =document.getElementById('open')
let btn2=document.getElementById('closd')
let sel=document.getElementById('se')
let aud =document.getElementById('aud')

btn1.onclick=function(){
  btn1.classList.add('hidden');
  btn2.classList.remove('hidden');
  sel.classList.remove('hidden');
  aud.classList.add('hidden');
  p.classList.add('hidden')
  titlediv.classList.add('hidden')
  btnaud.classList.add('hidden');
  btnx.classList.add('hidden');
}

btn2.onclick=function (){
  btn1.classList.remove('hidden');
  btn2.classList.add('hidden');
  sel.classList.add('hidden');
  aud.classList.add('hidden');
  titlediv.classList.add('hidden')
  scroll({
    top:0
   })
}

btnaud.onclick=function (){
  aud.classList.remove('hidden');
  btnx.classList.remove('hidden');
  btnaud.classList.add('hidden');
  scroll({
    top:0,
   })
}

btnx.onclick=function (){
  aud.classList.add('hidden');
  btnx.classList.add('hidden');
  btnaud.classList.remove('hidden');
}

//get the ayah of surah----+--------------------------------------------------

let p = document.getElementById('sur')
let titlediv = document.getElementById('title')
async function getaya( i){
let j =1;
let numberaya =1;
const responc= await fetch('https://api.alquran.cloud/v1/surah/'+i+'/ar.alafasy ')
const page =await  responc.json()
let ayahs=page.data.ayahs;
let title =page.data;
p.innerHTML =`  <div id='aya'> ${
  ayahs.map(m =>`<P>${m.text}</p> <h2>  ${j++}</h2>` )
} </div> `;

//title----------------------------------------
titlediv.innerHTML=`${title.name} `
//audio inner------------------------------------------------
ss.innerHTML=`
${
ayahs.map(z =>`<div>
          <p>الاستماع للآية<h3>${numberaya++}</h3></p><audio controls src="${z.audio}"  > </audio>
</div>` )
}
`
}

let ss =document.getElementById('aud')
function l (){
  p.classList.remove('hidden')
  btnaud.classList.remove('hidden');
  btn1.classList.remove('hidden');
  btn2.classList.add('hidden');
  sel.classList.add('hidden');
  titlediv.classList.remove('hidden')
 window.scroll({
    top:1,
    left:1000,
   })
}
