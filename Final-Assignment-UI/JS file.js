function CheckForm() {

    let name = document.forms.intForm.name.value;
    let email = document.forms.intForm.email.value;
    let dob = document.forms.intForm.dob.value;
    let interest = document.forms.intForm.interest.value;
    let individual = document.forms.intForm.individual.checked;
    let organization = document.forms.intForm.organization.checked;
    let about = document.forms.intForm.about.value;
    try {
        if (name=="" || typeof(name)!='string') {
        document.forms.intForm.name.focus();
        throw ("Name");
        }
        if (email==""){
            document.forms.intForm.email.focus();
            throw ("Email");
            }
        if (dob==""){
            document.forms.intForm.dob.focus();
            throw ("DOB");
            }
        if (interest==""){
            document.forms.intForm.interest.focus();
            throw ("Interest");
            }
        if (individual==false & organization==false){
            document.forms.intForm.organization.focus();
            throw ("Checkbox");
            }
        if (about==""){
            document.forms.intForm.about.focus();
            throw ("About");
            }
        
    } catch (error) {
        alert("Wrong " +error+ " Input!!!!!!");
        return false

    }
    alert ("Form Submitted")

    //  if (email=="") {
    //      atpos = email.indexOf("@");
    //      dotpos = email.lastIndexOf(".");

    //      if (atpos < 1 || ( dotpos - atpos < 2 )) {
    //         alert("Please enter correct email ID")
    //         document.forms.intForm.email.focus() ;
    //         return false;
    //      }
    //      return( true );

    // }
    // else if (dob=="") {
    //     alert("Wrong DOB Input");
    //     document.forms.intForm.dob.focus();
    //     return false;
    // }
    // else if (interest=="") {
    //     alert("Wrong Interest Input");
    //     document.forms.intForm.interest.focus();
    //     return false;
    // }
    // else if (individual==false & organization==false) {
    //     alert("Checkbox not checked");
    //     document.forms.intForm.organization.focus();
    //     return false;
    // }
    // else if (about=="") {
    //     alert("About is empty");
    //     document.forms.intForm.about.focus();
    //     return false;
    // }
    window.open("summary.html?name="+name+"email="+email+"dob="+dob+"interst="+interest+"indvidual="+individual+" organization="+organization+" about="+about);


}
function Home(){
    window.open("https://github.com/hamzatoor251")
}