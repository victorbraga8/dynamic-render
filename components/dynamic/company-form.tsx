/* eslint-disable @typescript-eslint/no-explicit-any */
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
export default function CompanyForm({ control }: { control: any }) {
  return (
    <>
      <div className="flex gap-4 mt-4">
        <div className="flex flex-col">
          <Label
            htmlFor="razaoSocial"
            className="font-semibold text-gray-600 text-center mb-2"
          >
            Razão Social
          </Label>
          <Input
            id="razaoSocial"
            placeholder="Digite a Razão Social"
            {...control.register("razaoSocial")}
          />
        </div>
        <div className="flex flex-col">
          <Label
            htmlFor="classificacao"
            className="font-semibold text-gray-600 text-center mb-2"
          >
            Classificação
          </Label>
          <Input
            id="classificacao"
            placeholder="Digite a Classificação"
            {...control.register("classificacao")}
          />
        </div>
      </div>
    </>
  );
}
