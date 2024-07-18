function validation(step, data) {
  const { profileFor, fName, lName, gender, religion, community, email} = data;
  let errors = {};
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordPattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$/;

  switch (step) {
    case 1:
      if (profileFor === "") {
        errors.profileFor = "This profile is for?";
      }
      if (fName === "") {
        errors.fName = "Enter first name.";
      }
      if (lName === "") {
        errors.lName = "Enter last name.";
      }
      if (gender === "") {
        errors.gender = "Select gender.";
      }
      if (religion === "") {
        errors.religion = "Enter religion.";
      }
      if (community === "") {
        errors.community = "Enter community.";
      }
      break;
    case 2:
      if (email === ""){
        errors.email = 'Enter Email ID'
      }
      break;
    default:
      break;
  }

  return errors;
}

export default validation;
