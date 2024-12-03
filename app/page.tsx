/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import DynamicProvider from "@/components/dynamic/dynamic-provider";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useState, useCallback, useMemo } from "react";
import DynamicList from "@/components/dynamic/dynamic-list";

export default function Home() {
  const [selectedEntity, setSelectedEntity] = useState<
    "user" | "company" | null
  >(null);
  const [selectedForm, setSelectedForm] = useState<string | null>(null);
  const [initialValues, setInitialValues] = useState({ label: "", value: "" });

  const clearSelect = () => {
    setInitialValues({ label: "", value: "" });
  };

  const handleCheckboxChange = useCallback((value: "user" | "company") => {
    clearSelect();
    setSelectedEntity((prev) => (prev === value ? null : value));
  }, []);

  const handleSelectedForm = useCallback((value: any) => {
    setSelectedForm(value.value);
    console.log("Valor selecionado:", value.value);
  }, []);

  const memoizedEntity = useMemo(
    () => selectedEntity || "user",
    [selectedEntity]
  );

  return (
    <>
      <div className="flex items-center justify-center h-10 bg-slate-500 text-white">
        <h1 className="text-xl font-bold">Dynamic Render</h1>
      </div>
      <div className="flex flex-col items-center justify-center mt-10">
        <h1 className="text-center">Dynamic Render</h1>
        <DynamicProvider entity={memoizedEntity} selectedItem="personalData" />
        <hr className="w-1/3 mt-6 border-t border-gray-300" />
        <div className="flex gap-4 mt-4">
          <div className="flex flex-col items-center">
            <Label htmlFor="nome">Selecione um tipo</Label>
            <div className="flex justify-between gap-6 items-center mt-4">
              <div className="items-top flex space-x-2">
                <Checkbox
                  id="user"
                  checked={selectedEntity === "user"}
                  onCheckedChange={() => handleCheckboxChange("user")}
                />
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
                <Checkbox
                  id="company"
                  checked={selectedEntity === "company"}
                  onCheckedChange={() => handleCheckboxChange("company")}
                />
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
        <DynamicList
          entity={memoizedEntity}
          handleSelectedForm={handleSelectedForm}
          initialValues={initialValues}
        />
      </div>
    </>
  );
}
