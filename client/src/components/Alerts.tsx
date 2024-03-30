import { Alert, AlertIcon } from "@chakra-ui/react";

export const ErrorSignup = () => {
  return (
    <Alert status="error" width="100%" borderRadius="5px">
      <AlertIcon />
      There was an error signing up
    </Alert>
  );
};

export const ErrorSignin = () => {
  return (
    <Alert status="error" width="100%" borderRadius="5px">
      <AlertIcon />
      There was an error signin in
    </Alert>
  );
};

export const ErrorCrorUp = ({ label }: { label: "Create" | "Update" }) => {
  return (
    <Alert status="error" width="100%" borderRadius="5px" marginTop="15px">
      <AlertIcon />
      {label == "Create"
        ? "There was an error creating post"
        : "There was an error updating post"}
    </Alert>
  );
};

export const SuccessCrorUp = ({ label }: { label: "Create" | "Update" }) => {
  return (
    <Alert status="success" width="100%" borderRadius="5px" marginTop="15px">
      <AlertIcon />
      {label == "Create"
        ? "Post was successfully created"
        : "Post was successfully updated"}
    </Alert>
  );
};
