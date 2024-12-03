/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Select from "react-select";

export default function DynamicList({
  entity,
  handleSelectedForm,
  initialValues,
}: {
  entity: string;
  handleSelectedForm: (value: any) => void;
  initialValues: any;
}) {
  const listItens =
    entity === "user"
      ? [
          { label: "Dados cadastrais", value: "personalData" },
          { label: "Dados adicionais", value: "additionalData" },
          { label: "Jornada de trabalho", value: "workJourney" },
          { label: "Configurações REP-P", value: "repConfig" },
        ]
      : [
          { label: "Informações da empresa", value: "companyInfo" },
          { label: "Dados financeiros", value: "financialData" },
          { label: "Compliance", value: "compliance" },
          { label: "Documentos legais", value: "legalDocs" },
        ];

  return (
    <Select
      defaultValue={initialValues}
      options={listItens}
      className="mt-8 w-[15%]"
      onChange={(selectedOption) => handleSelectedForm(selectedOption)}
      isClearable
    />
  );
}
