import * as React from "react";

const customStyles = {
  color: "#004085", backgroundColor: "#cce5ff",borderColor: "#b8daff", padding: ".75rem 1.25rem", marginBottom: "1rem"};

type ConfirmationProps = {
  message: string;
};

const Confirmation = ({ message }: ConfirmationProps) => {
  return <div style={customStyles}>{message}</div>;
};

export default Confirmation;
