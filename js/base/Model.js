window.Model=function(resourceName){
    return model={
        init:function () {
            var APP_ID = 'MpNoRd9qLIS7TDGH1ON2DCdi-gzGzoHsz'
            var APP_KEY = 'DmnIPO4yPPMg9WdlqCjAN3Kc'
            AV.init({ appId: APP_ID, appKey: APP_KEY })
        },
        fetch:function(){
            var query = new AV.Query(resourceName)
            return query.find() //Promise对象
        },
        save:function (object){
            var X = AV.Object.extend(resourceName)
            var x = new X()
            return x.save(object)
        }
    }
}