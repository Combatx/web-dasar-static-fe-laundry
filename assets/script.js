const collapse = document.querySelector('#check');
const trigger = document.querySelector('ul');
const closecollapse = document.querySelectorAll('ul li a');

collapse.addEventListener('click', function (event) {
    if (collapse.checked == true){
        trigger.style.left = '0';
      } else {
        trigger.style.left = '-100%';
      }
});

for(item of closecollapse) {
    item.addEventListener('click', function (event) {
        collapse.click();
    });
}

