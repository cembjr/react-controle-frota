import React, { useState, useEffect } from "react";

import { ServicosTable } from "./ServicosTable";
import { ServicosForm } from "./ServicosForm";

export const ServicosPage: React.FC = () => {
  

  return (
    <>
      <ServicosForm titulo="inclusão serviço"></ServicosForm>
      <ServicosTable></ServicosTable>
    </>
  );
};
