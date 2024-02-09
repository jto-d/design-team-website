import { css } from 'styled-components'


import MontserratBold from '../fonts/Montserrat-Bold.ttf'
import MontserratRegular from '../fonts/Montserrat-Regular.ttf'
import MontserratSemiBold from '../fonts/Montserrat-SemiBold.ttf'
import MontserratMedium from '../fonts/Montserrat-Medium.ttf'


const montserratNormalWeights = {
    400: MontserratRegular,
    500: MontserratMedium,
    600: MontserratSemiBold,
    700: MontserratBold
}

const montserrat = {
    name: 'Montserrat',
    normal: montserratNormalWeights
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

const fonts = css`
    ${montserratNormal}
`

export default fonts