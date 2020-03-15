import { LightningElement,api, track,wire} from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { createRecord } from 'lightning/uiRecordApi';
//import { reduceErrors } from 'c/ldsUtils';
import olaobject from '@salesforce/schema/olacabpractice__c';
import cartype from '@salesforce/schema/olacabpractice__c.CabType__c';
import customername from '@salesforce/schema/olacabpractice__c.CustomerName__c';
import droplocation from '@salesforce/schema/olacabpractice__c.DropLocation__c';
import pickuplocation from '@salesforce/schema/olacabpractice__c.PickUpLocation__c';
import phone from '@salesforce/schema/olacabpractice__c.Phone__c';
import olabookname from '@salesforce/schema/olacabpractice__c.Ola_Booking_Name__c';
import { getRecord } from 'lightning/uiRecordApi';

const FIELDS = [
    'olacabpractice__c.CustomerName',
    'olacabpractice__c.PickUpLocation',
    'olacabpractice__c.Phone',
    'olacabpractice__c.DropLocation',
];


export default class Olacabform extends LightningElement {
    @api recordId;

    @wire(getRecord, { recordId: '$recordId', fields: FIELDS })
    book;




   @track namefield;
   @track phonefield;
   @track pickupfield;
   @track dropfield;
   @track olabooknamefield;
   bid;
   createfield(){
        const fields = {};
        fields[customername.fieldApiName] = this.namefield;
        fields[phone.fieldApiName] =this.phonefield;
        fields[pickuplocation.fieldApiName] =this.pickupfield;
        fields[droplocation.fieldApiName] =this.dropfield;
        fields[olabookname.fieldApiName] =this.olabooknamefield;
        const recordInput = { apiName: olaobject.objectApiName, fields };
        createRecord(recordInput)
            .then(olacabpractice=> {
                this.bid = olacabpractice.id;
                this.dispatchEvent(
                    new ShowToastEvent({
                        title: 'Success',
                        message: 'Record created',
                        variant: 'success'
                    })
                );
            })
            .catch(error => {
                this.dispatchEvent(
                    new ShowToastEvent({
                        title: 'Error creating record',
                        message: error.body.message,
                        variant: 'error'
                    })
                );
            });
         alert("sjsj");
   };
    updatename(event){
         this.namefield=event.target.value;
    }
    updatephone(event){
        this.phonefield=event.target.value;
    }
    updatepickup(event){
        this.pickupfield=event.target.value; 
    }
    updatedrop(event){
        this.dropfield=event.target.value;
    }
    updateolabookname(event){
        this.olabooknamefield=event.target.value;
    }
    ///////////////////////////////////////////////////

    get customernamefunc() {
        alert("in");
        return this.book.data.fields.CustomerName.value;
    }
    get pickuplocationfunc() {
        return this.book.data.fields.PickUpLocation.value;
    }
    get droplocationfunc() {
        return this.book.data.fields.DropLocation.value;
    }
    

   
}