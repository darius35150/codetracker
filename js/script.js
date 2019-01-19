/************************************************************************
 * Functions are for the open and close side navigations on other pages.*
 * **********************************************************************
 */ 
function openNav(){
    document.getElementById("sideNav").style.width = "250px";
}

function closeNav(){
document.getElementById("sideNav").style.width = "0";
}


function modalScreen(){
var addModal = document.getElementById("addModal");
var addBtn = document.getElementById("add");
var addSpan = document.getElementsByClassName("addClose")[0];

var deleteModal = document.getElementById("deleteModal");
var deleteBtn = document.getElementById("delete");
var deleteSpan = document.getElementsByClassName("deleteClose")[0];

var searchModal = document.getElementById("searchModal");
var searchBtn = document.getElementById("search");
var searchSpan = document.getElementsByClassName("searchClose")[0];

addBtn.onclick = function(){
addModal.style.display = "block";
}

addSpan.onclick = function(){
addModal.style.display = "none";
}

deleteBtn.onclick = function(){
deleteModal.style.display = "block";
}

deleteSpan.onclick = function(){
deleteModal.style.display = "none";
}

searchBtn.onclick = function(){
searchModal.style.display = "block";
}

searchSpan.onclick = function(){
searchModal.style.display = "none";
}

window.onclick = function(event){
    if(event.target == addModal){
        addModal.style.display = "none";
    }else if(event.target == deleteModal){
        deleteModal.style.display = "none";
    }else if(event.target == searchModal){
        searchModal.style.display = "none";
    }
    }
}
