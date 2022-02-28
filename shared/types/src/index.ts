export interface Example {
    field: string;
}

export const CONSTANT = {
    PI: 3.14
} as const;

export const PI = CONSTANT.PI;
