//select first popup-box, popup-overlay, plus button
var popupoverlay=document.querySelector(".popup-overlay");
var popupbox=document.querySelector(".popup-box");
var addpopupbutton=document.getElementById("add-popup-button");

addpopupbutton.addEventListener("click",function(){
    popupoverlay.style.display="block";
    popupbox.style.display="block";
})

var cancelpopup = document.getElementById("cancel-popup");
cancelpopup.addEventListener("click",function(event){
    event.preventDefault();
    popupoverlay.style.display="none";
    popupbox.style.display="none";
})
popupoverlay.addEventListener("click",function(){
    popupoverlay.style.display="none";
    popupbox.style.display="none";
})
document.addEventListener("keydown", function(event) {
    if (event.key == "Escape" && popupbox.style.display == "block") {
        popupoverlay.style.display = "none";
        popupbox.style.display = "none";
    }
});


//select container,add-book,book-title-input,book-author-input,book-description-input
var container=document.querySelector(".container");
var addbook=document.getElementById("add-book");
var booktitleinput=document.getElementById("book-title-input");
var bookauthorinput=document.getElementById("book-author-input");
var bookdescriptioninput=document.getElementById("book-description-input");

addbook.addEventListener("click",function(event){
    event.preventDefault();
    if ((booktitleinput.value.trim()=="")||(bookauthorinput.value.trim()=="")||(bookdescriptioninput.value.trim()=="")){
        alert("Please fill all the fields.");
        return;
    }
    var div=document.createElement("div");
    div.setAttribute("class","book-container");
    div.innerHTML=`<h2>${booktitleinput.value}</h2>
            <h5>${bookauthorinput.value}</h5>
            <p>${bookdescriptioninput.value}</p>
            <button onclick="deletebook(event)">Delete</button>`;
    container.append(div);
    var successMessage=document.getElementById("success-message");
    successMessage.style.display = "block";
    setTimeout(function(){
        successMessage.style.display = "none";
    }, 2000);

    popupoverlay.style.display="none";
    popupbox.style.display="none";

    booktitleinput.value = "";
    bookauthorinput.value = "";
    bookdescriptioninput.value = "";
    updateBookCount();

    
})

function deletebook(event){
    var conf=confirm("Are you sure you want to delete?");
    if (conf){
        event.target.parentElement.remove();
    }
    updateBookCount();
    
}

function updateBookCount(){
    
    var bookcontainercount=document.querySelectorAll(".book-container").length;
    var heading=document.getElementById("book-count");
    if (bookcontainercount==1){
        heading.textContent=`📚 BookSky (${bookcontainercount} Book)`;
    }
    else{
        heading.textContent=`📚 BookSky (${bookcontainercount} Books)`;
    }
    var divempty=document.querySelector("#empty-message");
    if (bookcontainercount==0){
        divempty.style.display="block";
    }
    else{
        divempty.style.display="none";
    }
    
}
