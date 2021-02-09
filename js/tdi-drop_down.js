const dIList = document.querySelectorAll('.item-title');

document.addEventListener("DOMContentLoaded", () => {
    console.log(dIList);
    dIList.forEach(el=>{
        el.addEventListener('click',()=>{
            el.closest('.drop-down__item').querySelector('.item-content').classList.toggle('active');
        })
    })
});