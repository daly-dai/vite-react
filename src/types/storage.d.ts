export declare type StateTree = Record<string | number | symbol, any>

// interface PersistOptions {
//   strategies?: PersistStrategy[];
// }
export type _Method = (...args: any[]) => any

export type _ActionsTree = Record<string, _Method>

interface PersistStrategy {
  isBase?: boolean;
  key?: string;
  storage?: Storage;
  paths?: string[];
  isDefault?: boolean;
}

// interface storeNameSpace {
//   name: string
//   state: StateTree;
//   reducer: unknown;
//   persist?: PersistOptions
// }