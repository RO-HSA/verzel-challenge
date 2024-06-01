import { Cars } from "@/types/cars";
import { atom } from "jotai";

export interface ModalType extends Cars {
  year: string;
  mileage: string;
  price: string;
  photo: FileList | null;
}

export const initialModalContent: ModalType = {
  id: "",
  name: "",
  brand: "",
  model: "",
  year: "",
  mileage: "",
  price: "",
  transmission: "Automático",
  photo: null,
};

export const modalContentAtom = atom(initialModalContent);

export const modalIsVisibleAtom = atom(false);

export const modalAddMode = atom(false);
