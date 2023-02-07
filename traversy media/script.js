// Single element
// console.log(document.getElementById("myform"));
// console.log(document.querySelector(".container"));
// console.log(document.querySelector('h1'));

//Multiple Element
// console.log(document.querySelectorAll(".item"));
//recommend to use querySelectorAll bc other one are older
//console.log(document.getElementsByTagName("li")); // we can select element by using tag

// const items = document.querySelectorAll('.item');

// items.forEach((item) => console.log(item));


//manupilating or changing things in DOM (form)
// const ul = document.querySelector(".items");

// ul.remove();   the entire ul is removed
//ul.lastElementChild.remove();  // it will remove the last element from ul
// ul.firstElementChild.textContent = 'Hello';  // changes the text of first element in ul
// ul.children[1].innerText = 'Pranav';   // changes the second element text
// ul.lastElementChild.innerHTML  = '<h4>OG</h4>';

const btn = document.querySelector(".btn");

//btn.style.background = 'orange';  /// changes the color of button submit
// btn.addEventListener('click', (e) =>{ // here instead of click we can use mouseover / mouseout for new thoimgs like hover  *****imp
    // alert("Form is incomplete");
    // e.preventDefault(); // the click text in console will not stop blinking when we click and it will be used as text
    // console.log("click");
    //console.log(e.target.className);   // it will give the class name i.e btn
    // document.querySelector('#myform').style.background = 'white';
//})


// actual form working
const myformvalue = document.querySelector("#myform");
const namevalue = document.querySelector("#name");
const emailvalue = document.querySelector("#email");
const userlist = document.querySelector("#users");
const msg = document.querySelector(".message");

myformvalue.addEventListener('submit' , onSubmit);

function onSubmit(e){
e.preventDefault();

// console.log(namevalue.value);  it gives the name in console
if(namevalue.value === '' || emailvalue.value === '' ){
    // alert("Please enter your feilds");
    msg.classList.add("error");
    msg.innerHTML = 'Please enter all your feilds';
    setTimeout(()=> msg.remove(),3000);
}else{
    // console.log(namevalue.value);
    // console.log(emailvalue.value);
    const li =document.createElement('li');
    li.appendChild(document.createTextNode(`${namevalue.value} : ${emailvalue.value}`));

    userlist.appendChild(li);

    // clear feilds
    namevalue.value = '';
    emailvalue.value = '';
}
}
