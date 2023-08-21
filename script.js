let currdate=new Date();
let day=currdate.getDate();
let month=currdate.getMonth()+1;
let year=currdate.getFullYear();

var dd,dm,dy;
let button =document.getElementsByTagName('button')[0];
button.onclick=(event)=>{
  let v1=true,v2=true,v3=true;
    event.preventDefault();
    let d=document.getElementById('day').value;
   let m=document.getElementById('month').value;
   let y=document.getElementById('year').value;
if(isNaN(d)||d<1||d>31)
{
  v1=false
  document.getElementsByClassName('day-error')[0].style.visibility='visible';
  document.getElementById('day').style.borderColor='red'
}
else{
v1=true;
  document.getElementsByClassName('day-error')[0].style.visibility='hidden';
  document.getElementById('day').style.borderColor=' var(--Light-grey)'  
}
if(isNaN(m)||m<1||m>12)
{
  v2=false;
  document.getElementsByClassName('month-error')[0].style.visibility='visible';
  document.getElementById('month').style.borderColor='red'

}
else{
v2=true;
  document.getElementsByClassName('month-error')[0].style.visibility='hidden';
  document.getElementById('month').style.borderColor=' var(--Light-grey)'  
}
if(isNaN(y)||y>year||y<1)
{
  v3=false;
  document.getElementsByClassName('year-error')[0].style.visibility='visible'
  document.getElementById('year').style.borderColor='red'

}
else{
v3=true
  document.getElementsByClassName('year-error')[0].style.visibility='hidden';
  document.getElementById('year').style.borderColor=' var(--Light-grey)'  
}

dd=day-d;
 dm=month-m;
 dy=year-y;
 
   if(dd<0){
    dm--;
    dd+=30;
}
if(dm<0){
    dy--;
    dm+=12;
}
if(dy<0){
  v3=false
  document.getElementsByClassName('year-error')[0].style.visibility='visible'
  document.getElementById('year').style.borderColor='red'

}
   if(v1&&v2&&v3){
 
const days = [21, 20, 21, 21, 22, 22, 23, 24, 24, 24, 23, 22];
const signs = ["Aquarius", "Pisces", "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn"];

let zm=m-1
let zd=d

if(zm == 0 && zd <= 20){
        
  zm = 11;         
}else if(zd < days[month]){
  
  zm--;
};

let zodiac=document.getElementById('zod');
let zodimg=document.getElementById('zodImg')

let spanYear=document.getElementById("sy");
let spanMonth=document.getElementById("sm");
let spanDay=document.getElementById("sd");
spanYear.innerHTML=dy;
spanMonth.innerHTML=dm;
spanDay.innerHTML=dd;
zodiac.innerHTML=signs[zm]
zodimg.setAttribute('src',`assets/images/${signs[zm]}.jpg`)
}

}
