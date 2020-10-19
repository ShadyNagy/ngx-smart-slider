export interface ISmartSliderOptions {
    textOptions?: {
        textPosition?: 'centered-top' | 'centered-bottom' | 'centered' | 'bottom-right ' | 'top-right' | 'top-left' | 'bottom-left';
        textColor?: string;
        textFontSize?: number;
    },
    itemOptions?: {
        itemPadding?: number;
        itemWidth?: number;
    }    
    arrows?: {
        position?: 'left' | 'right'  | 'center' | 'top' | 'bottom'
    }
    height?: number;
    width?: number;
    padding?: number;
    overflow?: 'hidden';
}

export interface ISmartSliderOptionsInternal {
    textOptions?: {
        textPosition?: 'centered-top' | 'centered-bottom' | 'centered' | 'bottom-right ' | 'top-right' | 'top-left' | 'bottom-left';
        textColor?: string;
        textFontSize?: number;
    },
    itemOptions?: {
        itemPadding?: number;
        itemWidth?: string;
    }    
    arrows?: {
        position?: 'left' | 'right'  | 'center' | 'top' | 'bottom'
    }
    height?: string;
    width?: string;
    padding?: number;
    overflow?: 'hidden';
}