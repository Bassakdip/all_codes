let select=document.querySelector('button');
select.addEventListener('click',inputName)

function inputName(){
    let name=prompt('Enter Student Name');
    select.textContent('roll no 1'+ name);
}
