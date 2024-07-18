function validation(step, check) {
  const { profileFor, fName, lName, gender, religion, community,email } = check;
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

    default:
      break;
  }

  return errors;
}

export default validation;
