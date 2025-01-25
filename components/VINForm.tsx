"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { validateVINI18n } from "@/lib/vin";
import { VINLocationGuide } from "@/components/VINLocationGuide";
import { Search } from "lucide-react";

const formSchema = z.object({
  vin: z
    .string()
    .min(17, "Le VIN doit contenir 17 caractères")
    .max(17, "Le VIN doit contenir 17 caractères")
    .refine(validateVINI18n, "Format de VIN invalide"),
});

type VINFormProps = {
  onSubmit: (vin: string) => void;
};

export function VINForm({ onSubmit }: VINFormProps) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      vin: "",
    },
  });

  const handleSubmit = async (values: z.infer<typeof formSchema>) => {
    onSubmit(values.vin);
    form.reset({ vin: values.vin });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="vin"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-lg mb-4 flex justify-between sm:flex-row flex-col gap-2">
                Numéro d'Identification du Véhicule (VIN)
                <VINLocationGuide />
              </FormLabel>
              <FormControl>
                <Input
                  {...field}
                  placeholder="Entrez votre VIN de 17 caractères"
                  maxLength={17}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full">
          <Search size={16} className="mr-2" />
          Vérifier le véhicule
        </Button>
      </form>
    </Form>
  );
}
