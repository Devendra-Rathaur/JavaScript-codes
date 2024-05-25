class RailwayForm{
    submitForm() {
        alert(this.name +" This form is submited with train no "+this.trainno)
    }
    cancelForm() {
        alert(this.name +" This form is canceled with train no "+this.trainno)
    }
    fillForm(givenname,trainno) {
        this.name = givenname;
        this.trainno = trainno;
 }
}
//creating the form
let harryForm = new RailwayForm();
//filling the form
harryForm.fillForm("Harry", 1378900);
//submitting the form
harryForm.submitForm();
//canceilng the form
harryForm.cancelForm();
let devForm = new RailwayForm();
let devForm2 = new RailwayForm();
devForm.fillForm("Devendra Singh",4594790);
devForm.submitForm();
devForm.cancelForm();
devForm2.fillForm("Devendra Singh",90583459);
devForm2.cancelForm();