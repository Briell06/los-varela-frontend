import { mountStoreDevtool } from "simple-zustand-devtools";
import { create } from "zustand";

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

const sendInfoContext = create<SendInformationZustandProps>((set) => ({
  info: {
    usaPhoneNumber: undefined,
    cubaPhoneNumber: undefined,
    locationName: undefined,
    locationPrice: undefined,
    address: undefined,
    name: undefined,
  },
  setInfo: (info: Info) => set({ info }),
  clearInfo: () =>
    set({
      info: {
        usaPhoneNumber: undefined,
        cubaPhoneNumber: undefined,
        locationPrice: undefined,
        locationName: undefined,
        address: undefined,
        name: undefined,
      },
    }),
}));

if (process.env.NODE_ENV === "development")
  mountStoreDevtool("Info Store", sendInfoContext);

export default sendInfoContext;
