//your code here!
function addListItem() {
    let li = document.createElement("li");
    li.textContent = 'Item ' + (document.querySelectorAll('#infi-list li').length + 1);
    document.getElementById("infi-list").appendChild(li);
}

for(let i=0; i<10; i++) {
    addListItem();
}
window.addEventListener('scroll', function() {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        // User has reached the end of the page, add two more items
        addListItem();
        addListItem();
    }
});
