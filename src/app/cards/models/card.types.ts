export enum ECardTypes {
    Plain = 'Plain',
    Primary = 'Primary'
}
export interface ICard {
    type: ECardTypes;
    header?: string;
    title?: string;
    text?: string;
    smallText?: string;
}

export interface ICardTemplateContext {
   $implicit: ICard
}
