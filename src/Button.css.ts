import { style, styleVariants } from "@vanilla-extract/css";
import { globalStyle } from '@vanilla-extract/css';


const base = style({
    width: 'auto'
})

export const border = styleVariants({
    normal : [base,{
        border: '2px solid red'
    }],
    none : {
        border: 'none'
    }
})

export const margin = styleVariants({
    small: {
        margin : 5
    },
    medium: {
        margin : 15
    },
    large: {
        margin : 25
    },
    none: {
        margin : 0
    }
})

export const padding = styleVariants({
    small: {
        padding : 5
    },
    medium: {
        padding : 15
    },
    large: {
        padding : 25
    },
    none: {
        padding : 0
    }
})