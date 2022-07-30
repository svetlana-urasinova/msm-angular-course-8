export enum Statuses {
  Stable = "stable",
  Offline = "offline",
  Critical = "critical",
}

export enum Types {
  Large = "large",
  Medium = "medium",
  Small = "small",
}

export type Status = Statuses.Stable | Statuses.Offline | Statuses.Critical;

export type Type = Types.Medium | Types.Small | Types.Large;

export interface Server {
  name: string;
  status: Status;
  instanceType: Type;
  started: Date;
}
