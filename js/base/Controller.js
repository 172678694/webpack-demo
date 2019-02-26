window.Controller=function(options){
    var init=options.init
    this.bindEvents = options.bindEvents
    object = {
        view: null,
        model:null,
        init: function (view,model) {
            this.view = view 
            this.model = model
            this.model.init()
            this.bindEvents()
            //this.bindEvents.call()
            init.call(this,view,model)
        },
    }
    
    return object
}