function validation(step, data) {
  const {
    profileFor,
    fName,
    lName,
    gender,
    religion,
    community,
    email,
    phoneNumber,
    DOB,
    livingIn,
    marital,
    diet,
    height,
    hobbies,
    mostLikes,
    pet,
  } = data;
  let errors = {};
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$/;
  const phonePattern = /^\d{10}$/;
  const DateOfBirth = new Date(DOB);
  const today = new Date();
  let years = Math.abs(today.getFullYear() - DateOfBirth.getFullYear());
  
  switch (step) {
    case 1:
      if (profileFor === "") {
        errors.profileFor = "Select Profile Type.";
      }
      if (fName === "") {
        errors.fName = "First name required.";
      }
      if (lName === "") {
        errors.lName = "Last name required.";
      }
      if (gender === "") {
        errors.gender = "Select gender.";
      }
      if (religion === "") {
        errors.religion = "Select religion.";
      }
      if (community === "") {
        errors.community = "Enter community.";
      }
      break;
    case 2:
      if (email === "") {
        errors.email = "Email ID required.";
      } else if (!emailPattern.test(email)) {
        errors.email = "Valid email required.";
      }
      if (phoneNumber === "") {
        errors.phoneNumber = "Phone number required .";
      } else if (!phonePattern.test(phoneNumber)) {
        errors.phoneNumber = "Valid phone number required.";
      }
      if (DOB === "") {
        errors.DOB = "Date of Birth required.";
      }
      if (years <= 20){
        errors.DOB = 'You must be at least 20 years old.';
      }
      if (years >= 50){
        errors.DOB = 'You must be younger than 50 years old.';
      }
      if (livingIn === "") {
        errors.livingIn = "Please enter the city you currently live in.";
      }
      break;
    case 3:
      if (marital === "") {
        errors.marital = "Please select your marital status.";
      }
      if (diet === "") {
        errors.diet = "Select diet preference.";
      }
      if (height === "") {
        errors.height = "Please enter a valid height.";
      }
      if(hobbies === ""){
        errors.hobbies = "Please select at least one hobby form the list.";
      }
      if(mostLikes === ""){
        errors.mostLikes = "Choose one preferred activity.";
      }
      if(pet === ""){
        errors.pet = "Select your pet.";
      }
    break;
    case 4:
      
      break;
    default:
      break;
  }
  return errors;
}

export default validation;
