export declare type StateTree = Record<string | number | symbol, any>

export type _Method = (...args: any[]) => any

export type _ActionsTree = Record<string, _Method>

export type PersistStore = Persist | Persist[] | null

interface Persist {
  key: string;
  storage?: Storage;
  paths?: string[];
  isAll?: false
  isDefault?: boolean;
}