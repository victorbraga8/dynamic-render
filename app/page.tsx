/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import DynamicProvider from "@/components/dynamic/dynamic-provider";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useState, useCallback, useMemo } from "react";
import DynamicList from "@/components/dynamic/dynamic-list";
import { Button } from "@/components/ui/button";
import { FormProvider, useForm } from "react-hook-form";

export default function Home() {
  const [selectedEntity, setSelectedEntity] = useState<
    "user" | "company" | null
  >("user");

  const [selectedForm, setSelectedForm] = useState<string | any>(
    "personalData"
  );

  const [selectedOption, setSelectedOption] = useState({
    label: "Selecione",
    value: "",
  });

  const methods = useForm({
    mode: "onSubmit",
  });

  const {
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = methods;

  const handleCheckboxChange = useCallback((value: "user" | "company") => {
    setSelectedOption({ label: "Selecione", value: "" });
    setSelectedEntity((prev) => (prev === value ? null : value));
  }, []);

  const handleSelectedForm = useCallback(
    (value: any) => {
      setSelectedOption({ label: value.label, value: value.value });
      setSelectedForm(value.value);
      reset();
    },
    [reset]
  );

  const memoizedEntity = useMemo(
    () => selectedEntity || "user",
    [selectedEntity]
  );

  const onSubmit = async (data: any) => {
    console.log("Enviando dados...");
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log("Dados enviados:", data);
  };

  return (
    <>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex items-center justify-center h-10 bg-slate-500 text-white"></div>
          <div className="flex flex-col items-center justify-center h-[80vh]">
            <h1 className="text-center text-xl font-semibold mb-4">
              Dynamic Render
            </h1>
            <div className="h-[50px] items-center">
              <DynamicProvider
                entity={memoizedEntity}
                selectedItem={selectedForm}
              />
            </div>
            <hr className="w-1/3 mt-10 border-t border-gray-300" />
            <div className="flex gap-4 mt-4">
              <div className="flex flex-col items-center mt-2">
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
            <div className="mt-8 flex flex-col w-[15%]">
              <Label className="text-center mb-4">Grupo do Formulário</Label>
              <DynamicList
                entity={memoizedEntity}
                handleSelectedForm={handleSelectedForm}
                selectedOption={selectedOption}
              />
            </div>
            <hr className="w-1/3 mt-6 border-t border-gray-300" />
            <Button
              variant="default"
              className="mt-6 w-[15%]"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Enviando..." : "Enviar"}
            </Button>
          </div>
        </form>
      </FormProvider>
    </>
  );
}
