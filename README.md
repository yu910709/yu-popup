## Introduce  

this script is a simple popup and fit for mobile

## Quick to start:

install:     
`npm install --save yu-popup `    
import:  
`import popup from 'yu-popup' `

## Example

>You can use `npm run dev` to check the example file in node package

    popup({
            type:'success',
            iconType:0,
            title:'hey!',
            desc:['you got this message','beautiful,isn't it?'],
            width:80,
            timing:1500,
            mounted(){
                console.log('popup will be create')
            },
            callback(){
               console.log('popup has been destroyed')
            }
        })
        
## JSDoc

 * @param {object[]} option
 * @param {string} [option[].type = ''] - type of popup,accept 'success' 'error' 'info' 'loading' & ''(no image)
 * @param {number|string} [option[].iconType = 0] - type of icon,through 1 to 5
 * @param {string} [option[].title] - title of popup
 * @param {(string|string[])} [option[].desc] - description of popup ,if it be array,the description will show in multi line
 * @param {number} [option[].width = 80] - width of popup,the min width is 80,don't less than it
 * @param {number} [option[].timing = 1500] - auto close time,if popup's type is 'loading' or '',timing will be useless
 * @param {callback} [option[].mounted] - run before popup join in dom
 * @param {callback} [option[].callback] -run after popup destroyed

## Links

##### github  
see https://github.com/watanabeyu0709/yu-popup
##### npm  
see https://www.npmjs.com/package/yu-popup
