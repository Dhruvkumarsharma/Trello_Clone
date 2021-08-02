let db;
let dbrequest = indexedDB.open("tododb",2);




dbrequest.onsuccess = function(e){
    db = e.target.result;
}

dbrequest.onupgradeneeded = function(e){
    db = e.target.result;
    db.createObjectStore("todos", {keyPath: "mid"});

}

savetodo(type, );
function savetodo(){
    let txn = db.transaction("todos", "readwrite");
    let mediaStore = txn.objectStore("todos");

    let todoObj = {
        mid:Date.now(),
        type,
        heading,
        color,
        desc
    }

    mediaStore.add(todoObj);
}


