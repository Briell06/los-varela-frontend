import { create } from "zustand";
import { mountStoreDevtool } from "simple-zustand-devtools";

export interface Info {
  usaPhoneNumber: number | undefined;
  cubaPhoneNumber: number | undefined;
  locationName: string | undefined;
  locationPrice: number | undefined;
}

interface SendInformationZustandProps {
  info: Info;
  setInfo: (info: Info) => void;
  clearInfo: () => void;
}

const sendInfoContext = create<SendInformationZustandProps>((set) => ({
  info: {
    usaPhoneNumber: undefined,
    cubaPhoneNumber: undefined,
    locationName: undefined,
    locationPrice: undefined,
  },
  setInfo: (info: Info) => set({ info }),
  clearInfo: () =>
    set({
      info: {
        usaPhoneNumber: undefined,
        cubaPhoneNumber: undefined,
        locationPrice: undefined,
        locationName: undefined,
      },
    }),
}));

if (process.env.NODE_ENV === "development")
  mountStoreDevtool("Info Store", sendInfoContext);

export default sendInfoContext;
