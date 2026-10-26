const dialog=document.querySelector('#figure-dialog');
document.querySelectorAll('[data-image]').forEach(button=>button.addEventListener('click',()=>{const img=document.querySelector('#dialog-image');img.src=button.dataset.image;img.alt=button.querySelector('img').alt;dialog.showModal()}));
document.querySelector('#close-dialog').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',event=>{if(event.target===dialog)dialog.close()});
