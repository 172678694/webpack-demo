!function () {
    var model=Model('Message')
    var view = View('section.message')

    var controller = {
        view: null,
        messageList: null,
        init: function (view,model) {
            this.view = view
            this.model = model
            this.messageList = view.querySelector('#messageList')
            this.form = view.querySelector('#form')
            this.model.init()
            this.loadMessage()
            this.bindEvents()
        },

        loadMessage: function () { 
            this.model.fetch().then(
                (messages) => {
                    let array = messages.map((item) => item.attributes)
                    array.forEach((item) => {
                        let li = document.createElement('li')
                        li.innerText = `${item.name}:${item.words}`
                        this.messageList.appendChild(li)
                    })
                }
            )
        },
        bindEvents: function () {
            this.form.addEventListener('submit', (e) => {
                e.preventDefault()
                this.saveMessage()
            })
        },
        saveMessage: function(){
            let myForm = this.form
            let content = myForm.querySelector('input[name=content]').value
            let name = myForm.querySelector('input[name=name]').value
            
            this.model.save({
                words: content,
                name: name
            }).then(function (object) {
                console.log(object)
                let li = document.createElement('li')
                li.innerText = `${object.attributes.name}:${object.attributes.words}`
                messageList.appendChild(li)
                myForm.querySelector('input[name=content]').value = ''
                myForm.querySelector('input[name=name]').value = ''
            })
        },
    }
    controller.init(view,model)
}.call()
