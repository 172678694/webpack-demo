!function () {
    var view = document.querySelector('section.message')
    var controller = {
        view: null,
        messageList: null,
        init: function (view) {
            this.view = view
            this.messageList = view.querySelector('#messageList')
            this.form = view.querySelector('#form')
            this.initAV()
            this.loadMessage()
            this.bindEvents()
        },
        initAV: function () {
            var APP_ID = 'MpNoRd9qLIS7TDGH1ON2DCdi-gzGzoHsz'
            var APP_KEY = 'DmnIPO4yPPMg9WdlqCjAN3Kc'
            AV.init({ appId: APP_ID, appKey: APP_KEY });
        },
        loadMessage: function () {
            var query = new AV.Query('Message');
            query.find()
                .then(
                    (messages) => {
                        let array = messages.map((item) => item.attributes)
                        array.forEach((item) => {
                            let li = document.createElement('li')
                            li.innerText = `${item.name}:${item.words}`
                            this.messageList.appendChild(li)
                        })
                    })
        },
        bindEvents: function () {
            let myForm = this.form
            myForm.addEventListener('submit', function (e) {
                e.preventDefault()
                let content = myForm.querySelector('input[name=content]').value
                let name = myForm.querySelector('input[name=name]').value
                var Message = AV.Object.extend('Message');
                var message = new Message();
                message.save({
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
            })
        },

    }
    controller.init(view)
}.call()
