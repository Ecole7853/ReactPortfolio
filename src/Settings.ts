export const enum SizeType {
    /** Dimensions are fixed */
    /** Dimensions are calculated based on the parent element */
    STRETCH = 'stretch',
}

export interface FlipSetting {
    drawShadow: true;
    autoSize: true;
}