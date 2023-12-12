export interface CreateFixedReleaseDTO {
  title: string;
  value: number;
  payday?: Date;
  type?: string;
  transferType?: string;
}