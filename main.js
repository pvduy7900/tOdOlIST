let itemList = [];

let addItem = () => {
    let todo = {
        contents: document.getElementById("itemInput").value,
        isDone: false

    }
    itemList.push(todo)
    showList(itemList)
    document.getElementById("itemInput").value = '';
}

let showList = (list) => {
    let message = list.map((item, index) => {
        if (item.isDone) {
            return `<li> <input onchange= 'complete(${index})' type="checkbox"  checked=true /> ${item.contents} 
    <button onclick='remove(${index})'>X</button>  </li>`.strike()
        }
        else {
            return `<li> <input onchange= 'complete(${index})' type="checkbox"  /> ${item.contents} 
            <button onclick='remove(${index})'>X</button>  </li>`
        }
    }).join('')
    console.log(itemList);
    document.getElementById("resultArea").innerHTML = message
}

let remove = (index) => {
    itemList.splice(index, 1)
    showList(itemList)
}

let complete = (index) => {
    itemList[index].isDone = !itemList[index].isDone
    showList(itemList);
}

