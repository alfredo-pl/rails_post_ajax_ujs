document.addEventListener('turbolinks:load', function(){
    document.addEventListener('ajax-error', function(e){
        var errors = e.detail[0]
        errors_string = ''
        for(var prop in errors){
            errors_string = prop+": "+ errors[prop]
        }
        alert(errors_string)
    })

})