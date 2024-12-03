import { useFormContext } from "react-hook-form";
import CompanyForm from "./company-form";
import UserForm from "./user-form";

type DynamicProviderProps = {
  entity: string;
  selectedItem: string;
};

type EntityMapProps = {
  [key: string]: {
    [subKey: string]: JSX.Element;
  };
};

export default function DynamicProvider({
  entity,
  selectedItem,
}: DynamicProviderProps) {
  const { control } = useFormContext();

  const entityMap: EntityMapProps = {
    user: {
      personalData: <UserForm control={control} />,
    },
    company: {
      companyInfo: <CompanyForm control={control} />,
    },
  };

  const currentForm = (entity in entityMap
    ? entityMap[entity as keyof typeof entityMap]
    : {})[selectedItem] || (
    <div className="mt-4">Selecione o grupo do formulário</div>
  );

  return currentForm;
}
