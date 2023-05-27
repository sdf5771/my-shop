import styled,{css} from 'styled-components';

const Div = styled.div<React.CSSProperties & {
    hoverBackgroundColor?: string,
    hoverBorder?: string,

    mediaDisplay?: string,
    mediaFlexDirection? :string,
    mediaWidth? :string,
    mediaMinWidth? :string,
    mediaHeight?:string,
    mediaMinHeight?: string,
    mediaPosition?:string,
    mediaTop?: string,
    mediaBottom?: string,
    mediaLeft?: string,
    mediaRight?:string,
    mediaBackgroundColor?: string,
    mediaPadding?: string,
    mediaMargin?: string,
    mediaJustifyContent?: string,
    mediaAlignItems?: string,
    mediaGap?: string,

    gridTemplateColumns?: string,
}
>`
    ${({display}) => display && `display : ${display}`};

    position: ${({position}) => position};
    top: ${({top}) => top};
    left: ${({left}) => left};
    right: ${({right}) => right};
    bottom: ${({bottom}) => bottom};

    flex-direction: ${({flexDirection}) => flexDirection};
    justify-content: ${({justifyContent}) => justifyContent};
    align-items: ${({alignItems}) => alignItems};
    flex: ${({flex}) => flex};
    flexGrow: ${({flexGrow}) => flexGrow};
    ${({ flexWrap }) => flexWrap && `flex-wrap : ${flexWrap}`};
    ${({ flexShrink }) => flexShrink && `flex-shrink : ${flexShrink}`};
    ${({ alignItems }) => alignItems && `align-items : ${alignItems}`};

    vertical-align: ${({ verticalAlign }) => verticalAlign};
    text-align: ${({ textAlign }) => textAlign};

    margin: ${({ margin }) => margin};
    ${({ marginTop }) => marginTop && `margin-top : ${marginTop}`};
    ${({ marginRight }) => marginRight && `margin-right : ${marginRight}`};
    ${({ marginBottom }) => marginBottom && `margin-bottom : ${marginBottom}`};
    ${({ marginLeft }) => marginLeft && `margin-left : ${marginLeft}`};
    padding: ${({ padding }) => {
        return padding;
    }};
    ${({ paddingTop }) => paddingTop && `padding-top : ${paddingTop}`};
    ${({ paddingRight }) => paddingRight && `padding-right : ${paddingRight}`};
    ${({ paddingBottom }) =>
        paddingBottom && `padding-bottom : ${paddingBottom}`};
    ${({ paddingLeft }) => paddingLeft && `padding-left : ${paddingLeft}`};

    ${({ height }) => height && `height : ${height}`};
    ${({ maxHeight }) => maxHeight && `max-height : ${maxHeight}`};
    ${({ minHeight }) => minHeight && `min-height : ${minHeight}`};
    ${({ width }) => width && `width : ${width}`};
    ${({ minWidth }) => minWidth && `min-width : ${minWidth}`};
    ${({ maxWidth }) => maxWidth && `max-width : ${maxWidth}`};

    background: ${({ background }) => background};
    background-color: ${({backgroundColor}) => backgroundColor};
    background-image: ${({ backgroundImage }) => backgroundImage};
    background-repeat: ${({ backgroundRepeat }) => backgroundRepeat};
    color: ${({ color }) => color};
    border: ${({ border }) => border};
    border-right: ${({ borderRight }) => borderRight};
    border-bottom: ${({ borderBottom }) => borderBottom};
    border-radius: ${({ borderRadius }) => borderRadius};
    box-sizing: ${({ boxSizing }) => boxSizing};

    font-size: ${({ fontSize }) => fontSize};
    font-weight: ${({ fontWeight }) => fontWeight};
    letter-spacing: ${({ letterSpacing }) => letterSpacing};
    line-height: ${({ lineHeight }) => lineHeight};
    box-shadow: ${({ boxShadow }) => boxShadow};

    overflow: ${({ overflow }) => overflow};
    cursor: ${({ cursor }) => cursor};
    z-index: ${({ zIndex }) => zIndex};
    animation: ${({ animation }) => animation};
    transform: ${({ transform }) => transform};
    transition: ${({transition}) => transition};
    gap: ${({gap}) => gap};

    opacity: ${({opacity}) => opacity};

    ${({gridTemplateColumns}) => gridTemplateColumns && `grid-template-columns: ${gridTemplateColumns}`};

    :hover {
        background-color: ${({hoverBackgroundColor}) => hoverBackgroundColor};
        border : ${({hoverBorder}) => hoverBorder};
    }

    @media screen and (max-width: 1023px){
        display: ${({mediaDisplay}) => mediaDisplay};
        flex-direction: ${({mediaFlexDirection}) => mediaFlexDirection};

        width: ${({mediaWidth}) => mediaWidth};
        height: ${({mediaHeight}) => mediaHeight};

        position: ${({mediaPosition}) => mediaPosition};
        top: ${({mediaTop}) => mediaTop};
        bottom: ${({mediaBottom}) => mediaBottom};
        left: ${({mediaLeft}) => mediaLeft};
        right: ${({mediaRight}) => mediaRight};

        background-color: ${({mediaBackgroundColor}) => mediaBackgroundColor};
        padding: ${({mediaPadding}) => mediaPadding};
        margin: ${({mediaMargin}) => mediaMargin};

        justify-content: ${({mediaJustifyContent}) => mediaJustifyContent};
        align-items: ${({mediaAlignItems}) => mediaAlignItems};
        gap: ${({mediaGap}) => mediaGap};

        min-width: ${({mediaMinWidth}) => mediaMinWidth};
        min-height: ${({mediaMinHeight}) => mediaMinHeight};
    }
`

export default Div;