import { messages } from "./i18n/messages";

declare global {
  namespace FormatjsIntl {
    interface Message {
      ids: keyof (typeof messages)["fr"];
    }
  }
}

declare module "*.json" {
  const value: any;
  export default value;
}
