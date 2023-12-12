export interface Release {
  id: number;
  title: string;
  value: number;
  payday?: Date;
  type: "in" | "out";
  transferType?: string;
}

export interface VariableRelease extends Release {
  status: 'pago' | 'pendente' | 'cancelado';
}

export interface VariableReleaseMonth {
  id: number;
  month: string;
  year: number;
}