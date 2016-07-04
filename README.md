# HNValidatorJS #
A tiny JavaScript Validation Library

## Avaliable options include ##
 - _min(5)_     : mininum lenght of string is 5
 - _max(5)_     : maxinum length of string is 5
 - _size(5)_    : valid size of length is 5
 - _between(4,6)_: valid length of string between 4 and 6
 - _required_   : field is required, must not be empty
 - _email_      : string must be an email form (a@b.c)
 - _regex_      : string must follow the regex format
 ..* _regex_     : "/pattern/"
 - _match_      : matching value
 ..* _matchValue_ : value will be compare/matching
 - _condition_  : a custom condition (for example, a callback with true/false value)
 ..* _condition_ : true/false statement

## How to use ##
Just simply include the library as below, please change src value to its actual location
```html
<script type="text/javascript" src="HNValidator.js"></script>
```
## Example: ##
```javascript
    var values = [
        {
            name: 'Email',
            value: 'nc.hieu@liveer.com',
            rules: 'email,required'
        },
        {
            name: 'Username',
            value: 'me',
            rules: 'min(4),max(22),required'
        },
        {
            name: 'Phone',
            value: '0000000000',
            rules: 'size(10),required'
        },
        {
            name: 'PostCode Regex',
            value: '22022',
            rules: 'regex',
            regex: '/^[0-9]{4}$/'
        },
        {
            name: 'PostCode Area',
            value: '2202',
            rules: 'condition',
            condition: (this.value == 2202)
        }
    ]
    
    var validate = HNValidatorJS(values)
    
// Result
// 0: "Email must be a valid email"
// 1: "Username must be more than 4 characters"
// 2: "PostCode Regex must follow regex pattern"
```
