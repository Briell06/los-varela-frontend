import { create } from "zustand";

export interface Info {
  name: string;
  province: string;
}

interface SendInformationZustandProps {
  info: Info;
  setInfo: (info: Info) => void;
  clearInfo: () => void;
}

const sendInfoContext = create<SendInformationZustandProps>((set) => ({
  info: {
    name: "",
    province: "",
  },
  setInfo: (info: Info) => set({ info }),
  clearInfo: () => set({ info: { name: "", province: "" } }),
}));

export default sendInfoContext;
