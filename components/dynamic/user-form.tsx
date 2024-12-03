import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
export default function UserForm() {
  return (
    <>
      <div className="flex gap-4 mt-4">
        <div className="flex flex-col">
          <Label htmlFor="nome">Informe um nome</Label>
          <Input id="nome" placeholder="Digite o seu nome" />
        </div>
        <div className="flex flex-col">
          <Label htmlFor="sobrenome">Informe um sobrenome</Label>
          <Input id="sobrenome" placeholder="Digite o seu sobrenome" />
        </div>
      </div>
    </>
  );
}
