import { LightningElement } from 'lwc';
export default class RichTextExample extends LightningElement {

    myVal = '<strong></strong>';

    handleChange(event) {
        this.myVal = event.target.value;
    }
}