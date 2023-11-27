export interface Release {
  id: number;
  title: string;
  value: number;
  type: "in" | "out";
  payday?: Date;
  status: 'pago' | 'pendente' | 'cancelado';
}

export interface VariableRelease {
  id: number;
  month: string;
  year: number;
}