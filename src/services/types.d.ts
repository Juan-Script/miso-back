export type Wood = 'Arce' | 'Haya' | 'Roble' | 'Nogal' | 'Pino' ;
export type Size = '60' | '65' | '70' | '80' | '100' ;

export interface ProductEntry {
        name: string,
        wood: string,
        price: number,
        size: number,
        assembly: string,
}