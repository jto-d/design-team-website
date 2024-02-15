import { css } from 'styled-components'


import MontserratBold from '../fonts/Montserrat-Bold.ttf'
import MontserratRegular from '../fonts/Montserrat-Regular.ttf'
import MontserratSemiBold from '../fonts/Montserrat-SemiBold.ttf'
import MontserratMedium from '../fonts/Montserrat-Medium.ttf'

import ProximaNovaRegular from '../fonts/ProximaNova-Regular.otf'
import ProximaNovaSemiBold from '../fonts/ProximaNova-Semibold.otf'
import ProximaNovaBold from '../fonts/ProximaNova-Bold.otf'
import ProximaNovaMedium from '../fonts/ProximaNova-Medium.otf'


const montserratNormalWeights = {
    400: MontserratRegular,
    500: MontserratMedium,
    600: MontserratSemiBold,
    700: MontserratBold
}

const proximaNovaNormalWeights = {
    400: ProximaNovaRegular,
    500: ProximaNovaMedium,
    600: ProximaNovaSemiBold,
    700: ProximaNovaBold
}

const montserrat = {
    name: 'Montserrat',
    normal: montserratNormalWeights
}

const proximaNova = {
    name: 'Proxima Nova',
    normal: proximaNovaNormalWeights
}

const createFontFace = (family, style = 'normal') => {
    let styles = ''

    for (const [weight, file] of Object.entries(family[style])) {
        styles += `
            @font-face {
                font-family: '${family.name}';
                src: url(${file}) format('truetype');
                font-weight: ${weight};
                font-style: ${style};
                font-display: swap;
            }
        `
    } 

    return styles
}

const montserratNormal = createFontFace(montserrat)
const proximaNovaNormal = createFontFace(proximaNova)

const fonts = css`
    ${montserratNormal}
    ${proximaNovaNormal}
`

export default fonts