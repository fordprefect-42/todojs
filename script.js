let btnAdd = $('#btnAdd')
let btnReset = $('#btnReset')
let btnDelete = $('#btnDelete')
let btnSort = $('#btnSort')
let newTask = $('#newTask')
let inpNewTasks = $('#inpNewTasks')

function addTask() {
    let listItem = $('<li>')
        .addClass('list-group-item')
        .text(newTask.val())

    listItem.click(() => {
        listItem.toggleClass('done')
    })


    inpNewTasks.append(listItem)
    newTask.val('')
    toggleInputButtons()
}
function remove()
{
    $('#inpNewTasks .done').remove()
    toggleInputButtons()
}
function sort()
{
    $('#inpNewTasks .done').appendTo($("#inpNewTasks"))
    toggleInputButtons()
}
function toggleInputButtons()
{
        btnReset.prop('disabled',newTask.val()=='')
        btnAdd.prop('disabled',newTask.val()=='')
        btnSort.prop('disabled',inpNewTasks.children().length < 1)
        btnDelete.prop('disabled',inpNewTasks.children().length < 1)

}
btnAdd.click(()=>
{
    addTask()
})
newTask.on('input',()=>
{
 toggleInputButtons()   
})
newTask.keypress(function (e) {
    if (e.which == 13) {
        e.preventDefault()
        addTask()
        
    }
   
});

btnReset.click(() => {
    newTask.val('')
    toggleInputButtons()
})
btnDelete.click(remove)
btnSort.click(sort)