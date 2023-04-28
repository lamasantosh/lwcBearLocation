import { LightningElement, api } from 'lwc';

export default class DataBinding extends LightningElement {
    firstName = '';
    lastName = '';
    _uppercaseItemName;

    @api
    get itemName() {
        return this._uppercaseItemName;
    }
    set itemName(value){
        this._uppercaseItemName = value.toUpperCase();
    }
    handleClick(event){
        var inputValue =  this.template.querySelectorAll('lightning-input');
        inputValue.forEach(inputAll => {
            if(inputAll.name === 'fname'){
                this.firstName = inputAll.value;
            }else if(inputAll.name === 'lname'){
                this.lastName = inputAll.value;
            }
        })
    }

}