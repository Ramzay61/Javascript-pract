function _createModal(){
    const modal=document.createElement('div')
    modal.classList.add('vmodal')
    modal.insertAdjacentHTML("afterbegin",`

    <div class="modal-overlay">
        <div class="modal-window">
            <div class="modal-header">
                <span id="spanTitle" class="modal-title">Заголовок окна</span>
                <span id="btnTimes" class="modal-close">&times;</span>
            </div>
            <div id="divBody" class="modal-body">
                <p>Lorem ipsum dolor sit.</p>
                <p>Lorem ipsum dolor sit.</p>
            </div>
            <div class="modal-footer">
                <input id="inHtml" value="Тест"/>
                <button id='btnHtml'>Установить</button>
                <button id="btnOk"   >Ok</button>
                <button id="btnClose">Отмена</button>
            </div>
        </div>
    </div>
    `)
    document.body.appendChild(modal)
    return modal
}


$.modal=function(options){
    $modal=_createModal();

    let modalWin={
        /* Инициализация */        
        init(options){
            this.closable=options.closable
            spanTitle.innerHTML=title=options.title
            document.getElementById('divBody').innerHTML=content=options.content
            document.getElementsByClassName('modal-window')[0].style.width=options.width
            
            btnHtml.onclick=()=>this.setContent()
            btnOk.onclick=()=>this.close('Ok')
            btnClose.onclick=()=>this.close('Cancel')
            btnTimes.onclick=()=>this.close('Cancel')
        },
        /* определение событий */
        onOpen:(data)=>{if(data!=null)data()},
        
        beforeClose:(data,action)=>data(action),
        
        onClose:(data)=>{if(data!=null)data()},
        /*  Открытие окна */
        open(){
            if($modal==null) {
                $modal=_createModal();
                this.init(options)
            }
            if(this.onOpen!=null) this.onOpen();
            $modal.classList.add('open') // В список классов эл-та div class="vmodal" добавляем класс "open" 
        },
        /* Закрытие окна */
        close(action){
            if(!this.closable){
                alert('Окно незакрываемое, скажите спасибо разработчику.'
                     +' Вам придется перегрузить страницу, потому что на закрытие окна'
                     +' по клику в затененной области он положил...'
                     +'\n\n'
                     +'Если вы хотите, что бы окно нормально закрывалось, вам нужно '
                     +'установить в файле index.js в объекте options.closable = true ')
                return
            }
            
            if(this.beforeClose!=null) 
                if(!this.beforeClose(action))
                    return
            
            $modal.classList.remove('open') // из списка классов эл-та div class="vmodal" удаляем класс "open" 
            
            if(this.onClose!=null) this.onClose();
            this.destroy()
        },
        /* Уничтожение окна */
        destroy(){
            $modal.remove()
            $modal=null
        },
        
        /* Установка Htlm в окне */
        setContent(html){
            lastContent=document.getElementById('divBody').innerHTML
            document.getElementById('divBody').innerHTML=inHtml.value
            inHtml.value=lastContent
        }
        
    }
    modalWin.init(options)
    return modalWin
}