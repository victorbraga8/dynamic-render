/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Select from "react-select";

export default function DynamicList({
  entity,
  handleSelectedForm,
  selectedOption,
}: {
  entity: string;
  handleSelectedForm: (value: any) => void;
  selectedOption: any;
}) {
  const listItens =
    entity === "user"
      ? [{ label: "Dados cadastrais", value: "personalData" }]
      : [{ label: "Informações da empresa", value: "companyInfo" }];

  return (
    <Select
      placeholder="Selecione"
      value={selectedOption}
      options={listItens}
      onChange={(selectedOption) => handleSelectedForm(selectedOption)}
    />
  );
}
