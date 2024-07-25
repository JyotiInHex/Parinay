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
    qualifications,
    collegeName,
    workWith,
    jobRole,
    additionalJobRole,
    annualIncome,
    profileImg,
    aboutSelf,
    familyType,
    familySocialStatus,
    livingInWithFamily,
    fatherStatus,
    motherStatus,
    siblingsType,
    siblingsNum,
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
      if (qualifications === "") {
        errors.qualifications = "Enter highest qualification.";
      }
      if (collegeName === "" && qualifications != "preferred not to say") {
        errors.collegeName = "Enter college name";
      }
      if (workWith === "") {
        errors.workWith = "Specify employment type.";
      }
      if(jobRole === ""){
        errors.jobRole = "Please select a valid job role form the list"
      }
      if(additionalJobRole === "" && jobRole === "other" || additionalJobRole === "" && jobRole === ""){
        errors.additionalJobRole = "This field cannot be empty if not specified."
      }
      if (annualIncome === "") {
        errors.annualIncome = "Enter annual income.";
      }
      break;
    case 5:
      if (profileImg === "") {
        errors.profileImg = "Please upload your profile picture for batter matches."
      }
      if (aboutSelf === "") {
        errors.aboutSelf = "Please write something about your self."
      }
      if (aboutSelf !== "" && aboutSelf.length < 700) {
        errors.aboutSelf  = "We Recommend to write at least 10 lines of about yourself!"
      }
      break;
    case 6:
      if (familyType === "") {
        errors.familyType = "Family type is required!";
      }
      if (familySocialStatus === "") {
        errors.familySocialStatus = "Please select family social status.";
      }
      if (livingInWithFamily === "") {
        errors.livingInWithFamily = "This field is required!";
      }
      if (fatherStatus === "") {
        errors.fatherStatus = "Please select your father status.";
      }
      if (motherStatus === "") {
        errors.motherStatus = "Please select your mother status.";
      }
      if (siblingsType === "") {
        errors.siblingsType = "Please specify if any.";
      }
      if (siblingsType !== "" && siblingsType !== "No Siblings" && siblingsNum === "") {
        errors.siblingsNum = "Please select how many?";
      }
      break;
    default:
      break;
  }
  return errors;
}

export default validation;
