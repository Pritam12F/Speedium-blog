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
