document.addEventListener('DOMContentLoaded', ()=>{
    showList()


    const form = document.getElementById('list-form')
    const input = document.getElementById('input-form')

    console.log('form: ', input)

    form.addEventListener('submit',(e)=>{
        e.preventDefault()
        console.log('esotu aqui')
        const taskText = input.value.trim()
        console.log('taskText: ', taskText)
        if(taskText){
            console.log('value: ',taskText)
            saveItens(taskText)
            input.value = ''
        }
    })
})

function getList(){
    return JSON.parse(localStorage.getItem('list')) || []
}

function saveItens(e){
    const itens = getList()
    itens.push(e)
    localStorage.setItem('list', JSON.stringify(itens))    
    showList()
}

function showList(){
    const itens = getList()
    const lista = document.getElementById('listas')
    lista.innerHTML = ''

    itens.forEach((item,index)=>{
        const li = document.createElement('li')
        li.textContent = item
        const removeButton = document.createElement('button')
        removeButton.textContent = 'Remover'
        removeButton.onclick = (e)=>{
            itens.splice(index,1)
            localStorage.setItem('list', JSON.stringify(itens));
            showList()
        }
        li.append(removeButton)
        lista.appendChild(li)
    })
}