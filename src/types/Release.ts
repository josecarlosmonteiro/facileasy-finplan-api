export interface Release {
  id: number;
  title: string;
  value: number;
  type: "in" | "out";
  idTransferType: number;
  idCategories: number[];
  idUser: number;
}