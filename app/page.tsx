"use client";
import DynamicProvider from "@/components/dynamic/dynamic-provider";
import { Checkbox } from "@/components/ui/checkbox";
import Select from "react-select";
import { Label } from "@/components/ui/label";

export default function Home() {
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];
  return (
    <>
      <div className="flex items-center justify-center h-10 bg-slate-500 text-white">
        <h1 className="text-xl font-bold">Dynamic Render</h1>
      </div>
      <div className="flex flex-col items-center justify-center mt-10">
        <h1 className="text-center">Dynamic Render</h1>
        <DynamicProvider entity="user" selectedItem="personalData" />
        <hr className="w-1/3 mt-6 border-t border-gray-300" />
        <div className="flex gap-4 mt-4">
          <div className="flex flex-col items-center">
            <Label htmlFor="nome">Selecione um tipo</Label>
            <div className="flex justify-between gap-6 items-center mt-4">
              <div className="items-top flex space-x-2">
                <Checkbox id="user" />
                <div className="grid gap-1.5 leading-none">
                  <Label
                    htmlFor="user"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    User
                  </Label>
                </div>
              </div>
              <div className="items-top flex space-x-2">
                <Checkbox id="company" />
                <div className="grid gap-1.5 leading-none">
                  <Label
                    htmlFor="company"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Company
                  </Label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Select options={options} className="mt-8 w-[15%]" />
      </div>
    </>
  );
}
