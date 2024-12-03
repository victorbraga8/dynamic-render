import DynamicProvider from "@/components/dynamic/dynamic-provider";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Home() {
  return (
    <>
      <div className="flex items-center justify-center h-10 bg-slate-500 text-white">
        <h1 className="text-xl font-bold">Dynamic Render</h1>
      </div>
      <div className="flex flex-col items-center justify-center mt-10">
        <h1 className="text-center">Dynamic Render</h1>
        <DynamicProvider entity="collaborator" selectedItem="personalData" />
        <hr className="w-1/3 mt-6 border-t border-gray-300" />
        <div className="flex gap-4 mt-4">
          <div className="flex flex-col items-center">
            <Label htmlFor="nome">Informe um tipo</Label>
            <Input
              id="entity"
              className="text-center"
              placeholder="Digite o seu nome"
            />
          </div>
        </div>
      </div>
    </>
  );
}
