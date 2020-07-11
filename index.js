
let options={
    title:'Про Греку',
    closable:true,
    content: '<span><p>Ехал грека через реку, видит Грека - в реке рак.</span>'
            +'<span><p>Сунул Грека руку в реку, рак за руку Греку цап (этот Грека был чудак)</span>',
    width: document.getElementById('txWidth').value+'px'
}

const modal=$.modal(options)

modal.onOpen=function(){alert('\n\nсобытие onOpen')}

modal.beforeClose=(action) => {
    if(action=='Ok'){
        if(!confirm('\n\nсобытие beforeClose: Вы действительно хотите закрыть окно?'))
            return false
    }
    return true
}

modal.onClose=function(){alert('\n\nсобытие onClose')}

document.getElementById('modal').onclick=()=>modal.open()

