import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface Info {
  usaPhoneNumber: number | undefined;
  cubaPhoneNumber: number | undefined;
  locationName: string | undefined;
  locationPrice: number | undefined;
  address: string | undefined;
  name: string | undefined;
}

interface SendInformationZustandProps {
  info: Info;
  setInfo: (info: Info) => void;
  clearInfo: () => void;
}

const initialInfo: Info = {
  usaPhoneNumber: undefined,
  cubaPhoneNumber: undefined,
  locationName: undefined,
  locationPrice: undefined,
  address: undefined,
  name: undefined,
};

const sendInfoContext = create<SendInformationZustandProps>()(
  persist<SendInformationZustandProps>(
    (set): SendInformationZustandProps => ({
      info: { ...initialInfo },
      setInfo: (info: Info) => set({ info }),
      clearInfo: () => set({ info: { ...initialInfo } }),
    }),
    {
      name: "sendInfo",
    },
  ),
);

export default sendInfoContext;
