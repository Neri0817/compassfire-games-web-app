export const validation = (fieldName, value) => {
  let error = "";

  switch (fieldName) {
    case "email":
      if (!value) {
        error = "Email is required!";
      } else if (!/\S+@\S+\.\S+/.test(value)) {
        error = "Email is invalid";
      }
      break;
    case "password":
      if (!value) {
        error = "Password is required";
      } else if (value.length < 6) {
        error = "Password must be at least 6 characters";
      }
      break;

    default:
      break;
  }

  return error;
};
