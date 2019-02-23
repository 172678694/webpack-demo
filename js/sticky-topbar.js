!function () {
    var view = document.querySelector("#topNavBar")
    var controller = {
        view: null,
        init: function (view) {
            this.view = view //this-->controller
            this.bindEvents()
            //this.bindEvents.call()
        },
        bindEvents: function () {
            var view = this.view //两次判断 bindEvent()和init()的调用
            window.addEventListener('scroll', (x) => {
                if (window.scrollY > 0) {
                    this.active()
                } else {
                    this.deactive()
                }
            })
        },
        active:function(){
            this.view.classList.add('sticky')
        },
        deactive:function(){
            this.view.classList.remove('sticky')
        },
    }
    controller.init(view)
    //controller.init.call(controller,view)
}.call()

