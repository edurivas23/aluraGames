const $addProduct = document.querySelector('#add_btn');
const $modalAdd = document.querySelector('#modal_add');
const $close = document.querySelector('.close');



$addProduct.onclick = function(){
    $modalAdd.style.display = "flex";
}
$close.onclick = function(){
    $modalAdd.style.display = "none";
}
