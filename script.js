const taskarry = [];
function addtask() {
    const task = document.getElementById('yourtask')
    if (task.value.trim() !== '') {
        taskarry.push(task.value)
        localStorage.setItem('taskarray',JSON.stringify(taskarry))
        task.value = ''
    } else {
        console.log('Task cannot be empty')
    }
}
function displayoutput() {
    console.log(localStorage.getItem('taskarray'))
    const output=JSON.parse(localStorage.getItem("taskarray"))||[]
    const parent=document.getElementById('yourtodooutput')
    for(let i=0;i<=output.length-1;i++){
        const newdiv=document.createElement("div")
        newdiv.textContent=taskarry[i]
        parent.appendChild(newdiv)
    }
}