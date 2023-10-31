import React from 'react'
import { SvgXml } from 'react-native-svg'

const WarningIcon = () => {
    const icon = () => {
        const xml = `<svg xmlns="http://www.w3.org/2000/svg" width="10" height="9" viewBox="0 0 10 9" fill="none">
        <path d="M5.11523 5.85C5.24273 5.85 5.34968 5.8068 5.43608 5.7204C5.52248 5.634 5.56553 5.5272 5.56523 5.4C5.56523 5.2725 5.52203 5.16555 5.43563 5.07915C5.34923 4.99275 5.24243 4.9497 5.11523 4.95C4.98773 4.95 4.88078 4.9932 4.79438 5.0796C4.70798 5.166 4.66493 5.2728 4.66523 5.4C4.66523 5.5275 4.70843 5.63445 4.79483 5.72085C4.88123 5.80725 4.98803 5.8503 5.11523 5.85ZM4.66523 4.05H5.56523V1.35H4.66523V4.05ZM0.615234 9V0.900001C0.615234 0.652501 0.703434 0.440551 0.879834 0.264151C1.05623 0.0877507 1.26803 -0.000299236 1.51523 7.64007e-07H8.71523C8.96273 7.64007e-07 9.17468 0.0882008 9.35108 0.264601C9.52748 0.441001 9.61553 0.652801 9.61523 0.900001V6.3C9.61523 6.5475 9.52703 6.75945 9.35063 6.93585C9.17423 7.11225 8.96243 7.2003 8.71523 7.2H2.41523L0.615234 9Z" fill="#F09825"/>
      </svg>`
        return xml;
    }
    return (
        <SvgXml xml={icon()} />
    )
}

export default WarningIcon