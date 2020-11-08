export interface ISmartSliderOptions {
    textOptions?: {
        textPosition?: 'centered-top' | 'centered-bottom' | 'centered' | 'bottom-right ' | 'top-right' | 'top-left' | 'bottom-left';
        textColor?: string;
        textFontSize?: number;
    };
    itemOptions?: {
        itemPadding?: number;
        itemWidth?: number;
    };
    arrows?: {
        position?: 'left' | 'right' | 'center' | 'top' | 'bottom';
        size?: number;
    };
    mapper?: {
        idMap?: string;
        textMap?: string;
        imageMap?: string;
        altMap?: string;
    };
    height?: number;
    width?: number;
    padding?: number;
    overflow?: 'hidden';
    selectedColor?: string;
    hoverColor?: string;
}
export interface ISmartSliderOptionsInternal {
    textOptions?: {
        textPosition?: 'centered-top' | 'centered-bottom' | 'centered' | 'bottom-right ' | 'top-right' | 'top-left' | 'bottom-left';
        textColor?: string;
        textFontSize?: number;
    };
    itemOptions?: {
        itemPadding?: number;
        itemWidth?: string;
    };
    arrows?: {
        position?: 'left' | 'right' | 'center' | 'top' | 'bottom';
        size?: number;
    };
    mapper?: {
        idMap?: string;
        textMap?: string;
        imageMap?: string;
        altMap?: string;
    };
    height?: string;
    width?: string;
    padding?: number;
    overflow?: 'hidden';
    selectedColor?: string;
    hoverColor?: string;
}
