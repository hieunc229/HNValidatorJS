/* =======================================================
// Javascript Object Validation 
// Created by Hieu Nguyen
// Website: http://hieunc.me
==========================================================
// Avaliable options include
// -------------------------------------------------------
// min(5) : mininum lenght of string is 5
// max(5) : maxinum length of string is 5
// size(5) : valid size of length is 5
// between(4,6): valid length of string between 4 and 6
// required : field is required, must not be empty
// email : string must be an email form (a@b.c)
// regex: string must follow the regex format
//  --> regex : '<pattern>';
// ==========================================================
    Example:
    var values = [
        {
            name: 'Email',
            value: 'nc.hieu@live.com',
            rules: 'email,required'
        },
        {
            name: 'Username',
            value: 'me',
            rules: 'min(4),max(22),required'
        },
        {
            name: 'Phone',
            value: '0468947043',
            rules: 'size(10),required'
        },
        {
            name: 'PostCode Regex',
            value: '22022',
            rules: 'regex',
            regex: '/^[0-9]{4}$/'
        }
    ]
    
    var validate = HNValidatorJS(values)
*/

var HNValidatorJS = HNValidatorJS || {}

HNValidatorJS = function(values) {
    var errors = []
    
    for (var i = 0; i < values.length; i++) {
        var v = values[i]
        
        var rules = v.rules.split(',')
        
        for (var y = 0; y < rules.length; y++) {
            var r = rules[y]
            switch (true) {
                    
                case (r == 'required'):
                    if (v.value === undefined || v.value == '') {
                        errors.push(name + ' is required')
                    }
                    break;
                case (r.indexOf("min") > -1): 
                    var min = parseInt(r.substring(4, r.length - 1))
                    if (v.value.length < min) {
                        errors.push(v.name + ' must be more than ' + min + ' characters')
                    }
                    break;
                case (r.indexOf("max") > -1):
                    var max = parseInt(r.substring(4, r.length - 1))
                    if (v.value.length > max) {
                        errors.push(v.name + ' must be less than ' + max + ' characters')
                    }
                    break;
                case (r.indexOf("between") > -1):
                    var min = parseInt(r.substring(8, 9))
                    var max = parseInt(r.substring(10, 11))
                    var length = v.value.length
                    if ( length < min || length > max) {
                        errors.push(v.name + ' must be between ' + min + ' and ' + max + ' characters')
                    }
                    break;
                case (r.indexOf("size") > -1):
                    var size = parseInt(r.substring(5, r.length - 1))
                    if (v.value.length != size) {
                        errors.push(v.name + ' must be ' + size + ' characters')
                    }
                    break;
                case (r == 'email'):
                    var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                    if (!regex.test(v.value)) {
                        errors.push(v.name + ' must be a valid email')
                    }
                    break;
                case (r == 'regex'):
                    var regex = new RegExp(v.regex)
                    if (!regex.test(v.value)) {
                        errors.push(v.name + ' must follow regex pattern')
                    }
                    break;
                case (r == 'match'):
                    if (v.value != v.matchValue) {
                        errors.push(v.name + ' does not match')
                    }
                    break;
            }
        }
    }
    
    return errors;
}