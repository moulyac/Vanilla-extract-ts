import { globalStyle } from '@vanilla-extract/css';
import {space} from './App.css'

globalStyle(`${space} > *`, {
    color: 'pink'
});