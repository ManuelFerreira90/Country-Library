import { MouseEvent, ChangeEvent } from 'react';

export interface inputInterface {
    value: string;
    className: string;
    background: string;
    onClick: (event: MouseEvent) => void;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}