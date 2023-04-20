import { extendTheme } from "@chakra-ui/react";

// Iclude custom option in hero, like colors, fonts...
const customTheme = {
    components : {
        Text: {
            variants: {
                subtitle: {
                    color: 'gray.500',
                    fontWeight: 'semibold',
                    fontSize: '14px',
                }
            }
        }
    }
};

const theme = extendTheme(customTheme);

export default theme;