import { style, styleVariants } from "@vanilla-extract/css";
import { globalStyle } from '@vanilla-extract/css';

const base = style({
    display:'flex'
})



export const align = styleVariants({
    start : [base, {
        alignContent: "start",
        justifyContent: "start",
    }],
    end:[base, {
        alignContent: "end",
        justifyContent: "end",
    }],
    center:[base, {
        alignContent: "center",
        justifyContent: "center",
    }]
})

export const direction = styleVariants({
    row:[base, {
        flexDirection : "row",
    }],
    col:[base, {
        flexDirection: "column",

    }]
})

export const wrap = styleVariants({
    wrap:[base,{
        flexWrap: "wrap",
    }],
    nowrap:[base, {
        flexWrap:'nowrap',
    }]
})

export const gap = styleVariants({
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


globalStyle(`${base} > *`, {
//    marginRight: 20,
    margin:15,
});

globalStyle(`${base} > *:last-child`,{
    // marginRight:0
})


