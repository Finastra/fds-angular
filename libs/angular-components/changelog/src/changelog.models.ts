export type ChangeLog = ChangeLog.Release[];
export namespace ChangeLog {
  export interface Release {
    version?: string;
    date?: string;
    changes: Change[];
    categories: Category[];
  }

  export interface Category {
    label: string;
    link?: string;
  }

  export interface Change {
    category: string;
    description: string;
    type: 'New' | 'Bugfix' | 'Deprecated' | 'Update';
  }
}
