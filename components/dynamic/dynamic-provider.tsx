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
  const entityMap: EntityMapProps = {
    user: {
      personalData: <UserForm />,
    },
    company: {
      companyInfo: <div>Em breve...</div>,
    },
  };

  const currentForm = (entity in entityMap
    ? entityMap[entity as keyof typeof entityMap]
    : {})[selectedItem] || <div>Formulário não encontrado</div>;

  return currentForm;
}
