let myTabs = []
const inputEl = document.getElementById("input-el")
const saveInputBtn = document.getElementById("save-input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const leadsFromLocalStorage = JSON.parse( localStorage.getItem("myTabs") )
const saveTabBtn = document.getElementById("save-tab-btn")
const copyTabBtn = document.getElementById("copy-tab-btn")
const copyAllBtn = document.getElementById("copy-all-btn")

if (leadsFromLocalStorage) {
    myTabs = leadsFromLocalStorage
    render(myTabs)
}

// Saving the current Tab in the list
saveTabBtn.addEventListener("click", function(){   
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        myTabs.push(tabs[0].url)
        localStorage.setItem("myTabs", JSON.stringify(myTabs) )
        render(myTabs)
    })
})

// Copying the address of current Tab to Clipboard
copyTabBtn.addEventListener("click", function(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        const link = tabs[0].url;
        let inputc = document.body.appendChild(document.createElement("input"));
        inputc.value = link;
        inputc.focus();
        inputc.select();
        document.execCommand('copy');
        inputc.parentNode.removeChild(inputc);
        /* Alert the copied text */
        alert("Copied the Link " + link);
    })
})

// Copying all the open Tabs links to Clipboard
copyAllBtn.addEventListener("click", function(){
    chrome.tabs.query({}, function(tabs){
        let link = "";
        for(let i=0; i<tabs.length; ++i) link += tabs[i].url + "\r\n";

        let inputc = document.body.appendChild(document.createElement("input"));
        inputc.value = link;
        inputc.focus();
        inputc.select();
        document.execCommand('copy');
        inputc.parentNode.removeChild(inputc);
        /* Alert the copied text */
        alert("Copied the Links\n" + link);
    })
})

// Deleting all the Links saved in the list
deleteBtn.addEventListener("dblclick", function() {
    localStorage.clear()
    myTabs = []
    render(myTabs)
})

// Adding the current Input to the List of Tabs
saveInputBtn.addEventListener("click", function() {
    myTabs.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myTabs", JSON.stringify(myTabs) )
    render(myTabs)
})

// Functions
function render(myTabs) {
    let listItems = ""
    for (let i = 0; i < myTabs.length; i++) {
        listItems += `
            <li>
                <a target='_blank' href='${myTabs[i]}'>
                    ${myTabs[i]}
                </a>
            </li>
        `
    }
    ulEl.innerHTML = listItems
}

// About US Modal
const aboutUsBtn = document.getElementById("about-us-btn");
const btnCloseModal = document.getElementById("close-modal");
const modalEl = document.getElementById("about-us-modal");

aboutUsBtn.addEventListener("click", function () {
  modalEl.classList.add("open");
});

btnCloseModal.addEventListener("click", function () {
  modalEl.classList.remove("open");
});
