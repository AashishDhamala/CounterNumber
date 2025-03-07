let Incer=0;
document.getElementById('btn-I').addEventListener('click', function()
{  

    console.log('Increment by 1');
    Incer=Incer+1;
    document.getElementById('Counter').innerHTML=Incer;

})
document.getElementById('btn-R').addEventListener('click', function()
{
  console.log('Reset to 0');
 
  Incer=0;
  document.getElementById('Counter').innerHTML=Incer;

})
document.getElementById('btn-D').addEventListener('click', function()
{
    console.log('Increment by 1');
    Incer=Incer-1;
    document.getElementById('Counter').innerHTML=Incer;

})