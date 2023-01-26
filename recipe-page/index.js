// First up, let's create a new list item and store it in a variable.
var newListItem = document.createElement('li');

// Now let's update the text content of that list item.
newListItem.textContent = '1 tsp paprika';

// And finally, let's add that list item as a child of the ul.
document.querySelector('ul').appendChild(newListItem);

//fetch back to myDiv
const myDiv = document.getElementById("myDiv");
console.log(myDiv);

//creating checkbox element
const checkbox = document.createElement("input")

//assigning attributes 
checkbox.type = "checkbox";
checkbox.name = "name";
checkbox.value = "value";
checkbox.id = "id";

//creating label for checkbox
var label = document.createElement("label");

//assocciate lable using for html, links back to line 21
label.htmlFor ="id";

//appending
label.appendChild(
    document.createTextNode("This creates label for checkbox.")
);

//appending the checkbox
// and label to div
myDiv.appendChild(checkbox);
myDiv.appendChild(label);

//add event listener to label
label.addEventListener("click",(event)=>{
    event.target.classList.toggle("checked")
});
