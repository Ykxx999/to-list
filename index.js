let inputF = document.getElementById('inputF')
let list1 = document.getElementById('list1')


function Addwork(){
    if(inputF.value === ""){
    alert("enter some work of your day")
}
    else{
        const li1 = document.createElement("li")
        li1.textContent = inputF.value
        list1.appendChild(li1)
        let img = document.createElement('img');
        img.src = "trash.png";
        img.id = "trashimg"
        li1.appendChild(img)
    }
    inputF.value = ''
    saveData()
}

list1.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle('checked');
        saveData()
    }
    else if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
        saveData()
    }
});


function saveData(){
    localStorage.setItem('data', list1.innerHTML)
}

function getData(){
    list1.innerHTML = localStorage.getItem('data')
}
getData()