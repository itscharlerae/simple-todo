

window.addEventListener("DOMContentLoaded", (event) => {
    // create new items
    function newItem() {
        const item = document.getElementById("input").value;
        const ul = document.getElementById("list");
        const li = document.createElement("li");
    
        li.appendChild(document.createTextNode(item));
        ul.appendChild(li);
        document.getElementById("input").value = "";
        li.onclick = removeItem;
    }

    // check keyword
    document.body.onkeyup = function(e) {
        if (e.keyCode == 13) {
            newItem();
        }
    }

    // remove items
    function removeItem(e) {
        e.target.parentElement.removeChild(e.target);
    }
} )

