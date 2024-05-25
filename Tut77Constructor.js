class RailwayForm {
    constructor(givenname, trainno) {
        console.log("constructor called..."+givenname+" "+trainno)
        this.name = givenname;
        this.trainno = trainno;
    }
    submitForm() {
        alert(this.name + " This form is submited with train no " + this.trainno)
    }
    previewForm() {
        alert( "Person name "+this.name + " This form is previewed with all the details " + "train no is "+ this.trainno)
    }

    cancelForm() {
        alert(this.name + " This form is canceled with train no " + this.trainno)
        this.trainno = 0;
    }
   
}
let harryForm = new RailwayForm("harry", 12809038);
harryForm.previewForm();
harryForm.submitForm();
harryForm.cancelForm();
harryForm.previewForm();

let devForm = new RailwayForm("devendra", 689043994);
devForm.previewForm();
devForm.submitForm();
devForm.cancelForm();
devForm.previewForm();