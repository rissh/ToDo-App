
// Function to add input to list 
function addItem(event){
    event.preventDefault();
    let text = document.getElementById("todo-input");

    db.collection("todo-items").add({
        text: text.value,
        status: "active"
    })
    text.value = "";
    
}
// Function to get data from database
function getItems(){
    db.collection("todo-items").onSnapshot((snapshot) =>{
         
         let items = [];
         snapshot.docs.forEach((doc) => {
            items.push({
                id: doc.id,
                ...doc.data()
            });
         })
         generatesItems(items);         // Function call
    })
}
// Function to print new task in list 
function generatesItems(items){

    let itemsHTML = "";
    items.forEach((item) => {
        itemsHTML += `
            <div class="todo-item">
                <div class="check">
                    <div data-id="${item.id}" class="check-mark ${item.status == "completed" ? "checked": ""}">
                        <img src="/assets/icon-check.svg">
                    </div>
                </div>
                <div class="todo-text ${item.status == "completed" ? "checked": ""}"> 
                    ${item.text}
                </div>
            </div>
        `        
    })

    document.querySelector(".todo-items").innerHTML = itemsHTML;
    createEventListeners();         // Function call
}
// Function to 
function createEventListeners(){
    let todoCheckMarks = document.querySelectorAll(".todo-item .check-mark");
    todoCheckMarks.forEach((checkMark) => {
        checkMark.addEventListener("click", function(){
            markCompleted(checkMark.dataset.id);        // Function call
        })
    })
}
// Function to check status of task in list 
function markCompleted(id){
    // from the database
    let item = db.collection("todo-items").doc(id);

    item.get().then(function(doc){
        if(doc.exists){
            let status = doc.data().status;
            if(status == "active"){
                item.update({
                    status: "completed"
                })
            } else if(status == "completed"){
                item.update({
                    status: "active"
                })
            }           
        }
    })
}

getItems();         // Function call