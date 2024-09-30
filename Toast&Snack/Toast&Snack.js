let toastBox = document.getElementById("toastBox");
let successMsg = 'Successfully submitted';
let errorMsg = 'Please fix the error!';
let invalidMsg = 'Invalid input , check again';

function showToast(msg){
   let toast = document.createElement('div');
   toast.classList.add('toast');
   toast.innerHTML =  msg;
   toastBox.appendChild(toast);

   if(msg.includes('error')){
    toast.classList.add('error');
   }
   if(msg.includes('Invalid')){
    toast.classList.add('invalid');
   }

   setTimeout(()=>{
    toast.remove();
   },6000);
}