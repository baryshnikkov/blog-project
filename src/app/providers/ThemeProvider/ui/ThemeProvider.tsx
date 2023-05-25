import { ReactNode, useEffect, useMemo, useState } from 'react';
import { ThemeContext } from '../../../../shared/lib/context/ThemeContext/ThemeContext';
import { Theme } from '@/shared/const/theme';
import { useJsonSettings } from '@/entities/User';

interface ThemeProviderProps {
    initialTheme?: Theme;
    children: ReactNode;
}

export const ThemeProvider = (props: ThemeProviderProps) => {
    const { initialTheme, children } = props;
    const { theme: defaultTheme = Theme.LIGHT } = useJsonSettings();
    const [isThemeInited, setThemeInited] = useState(false);

    const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme);

    useEffect(() => {
        if (!isThemeInited) {
            setTheme(defaultTheme);
            setThemeInited(true);
        }
    }, [defaultTheme, isThemeInited]);

    const defaultProps = useMemo(
        () => ({
            theme,
            setTheme,
        }),
        [theme],
    );

    return (
        <div>
            <ThemeContext.Provider value={defaultProps}>
                {children}
            </ThemeContext.Provider>
        </div>
    );
};
