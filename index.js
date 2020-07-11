
let options={
    title:'Заголовок, определенный в options',
    closable:true,
    content: '<span>Некий контекст, определенный в options</span>',
    width: '600px'
}

const modal=$.modal(options)

modal.onOpen=function(){
    this.closable=document.getElementById('cbClosable').checked
    spanTitle.innerHTML=document.getElementById('txTitle').value
    document.getElementById('divBody').innerHTML='<span><p>Ехал грека через реку, видит Грека - в реке рак.</span>'
                                                +'<span><p>Сунул Грека руку в реку, рак за руку Греку цап (этот Грека был чудак)</span>'
    document.getElementsByClassName('modal-window')[0].style.width=document.getElementById('txWidth').value+'px' // options.width
    alert('\n\nсобытие onOpen')}

modal.beforeClose=(action) => {
    if(action=='Ok'){
        if(!confirm('\n\nсобытие beforeClose: Вы действительно хотите закрыть окно?'))
            return false
    }
    return true
}

modal.onClose=function(){alert('\n\nсобытие onClose')}

document.getElementById('modal').onclick=()=>modal.open()

