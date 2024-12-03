/* eslint-disable @typescript-eslint/no-explicit-any */
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
export default function UserForm({ control }: { control: any }) {
  return (
    <>
      <div className="flex gap-4 mt-4">
        <div className="flex flex-col">
          <Label
            htmlFor="nome"
            className="font-semibold text-gray-600 text-center mb-2"
          >
            Nome
          </Label>
          <Input
            id="nome"
            placeholder="Digite o seu nome"
            {...control.register("nome")}
          />
        </div>
        <div className="flex flex-col">
          <Label
            htmlFor="sobrenome"
            className="font-semibold text-gray-600 text-center mb-2"
          >
            Sobrenome
          </Label>
          <Input
            id="sobrenome"
            placeholder="Digite o seu sobrenome"
            {...control.register("sobrenome")}
          />
        </div>
      </div>
    </>
  );
}
