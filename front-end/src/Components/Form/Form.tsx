import React from "react";
import styled from "styled-components";

interface FormProps {
  width?: string;
}

export const Form: React.FC<FormProps> = ({ width, children }) => {
  return (
    <div>
      <Formulario style={{ width: `${width || "50%"}`, margin: "0 auto" }}>
        {children}
      </Formulario>
    </div>
  );
};

const Formulario = styled.form``;
