let totalBil=document.getElementById('bill');
 let tips=document.querySelector('#tips');
 let totalPerosn=document.getElementById('person');
 let calculate=document.getElementById('calculate');


 //tipsValue
 tips.addEventListener('click',function(){
    document.querySelector('#tipsValue').innerHTML=tips.value + '%';
 
 });


//
calculate.addEventListener('click',function(e){
    e.preventDefault();

    if(totalBil.value==''|| tips.value=='' || totalPerosn.value==''){
       alert('Put Your Valid Information')
    }
else{
   document.getElementById('showBill').value=parseFloat(totalBil.value)  + parseFloat(totalBil.value) / 100 * parseFloat(tips.value);

   document.getElementById('showTips').value=parseFloat(totalBil.value) / 100 * tips.value;

   
   document.getElementById('showPerson').value=parseFloat(totalBil.value) / parseFloat(totalPerosn.value);
}
   
})


