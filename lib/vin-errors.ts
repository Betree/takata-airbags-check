// Mapped to the errors from https://github.com/mobito-tech-io/universal-vin-decoder/blob/main/src/vin.ts
const I18N_VIN_MESSAGES: Record<string, string> = {
  "VIN must be a string": "Format de VIN invalide",
  "VIN must be 17 characters long": "Le VIN doit contenir 17 caractères",
  "VIN contain only letters & numbers except from I, O and Q":
    "Le VIN ne peut contenir que des chiffres et des lettres (sauf I, O et Q).",
};

export const translateVinError = (message: string): string => {
  return I18N_VIN_MESSAGES[message] || message;
};
