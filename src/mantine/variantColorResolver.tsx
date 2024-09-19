import {darken, defaultVariantColorsResolver, parseThemeColor, rgba, VariantColorsResolver,} from '@mantine/core';

export const variantColorResolver: VariantColorsResolver = (button) => {
    const defaultResolvedColors = defaultVariantColorsResolver(button);
    const parsedColor = parseThemeColor({
        color: button.color || button.theme.primaryColor,
        theme: button.theme,
    });
    if (button.variant === 'transparent') {
        return {
            background: rgba(parsedColor.value, 0),
            hover: rgba(parsedColor.value, 0.15),
            hoverColor: darken(parsedColor.value, 1),
            border: 'none',
            color: darken(parsedColor.value, 0.1),
        };
    }
    return defaultResolvedColors;
}