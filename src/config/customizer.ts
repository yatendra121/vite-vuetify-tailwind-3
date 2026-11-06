import type { VuetifyOptions } from 'vuetify'

// Everything the customizer can change. Each list holds only values the
// installed Vuetify accepts, and `sanitizeSettings` checks stored values
// against these same lists.

export const THEME_MODES = ['light', 'dark', 'system'] as const
export const VARIANTS = [
    'elevated',
    'flat',
    'tonal',
    'outlined',
    'text',
    'plain'
] as const
export const FIELD_VARIANTS = [
    'outlined',
    'filled',
    'underlined',
    'solo',
    'solo-filled',
    'plain'
] as const
export const NAV_LAYOUTS = ['vertical', 'horizontal'] as const
export const SIDEBAR_MODES = ['expanded', 'collapsed', 'mini', 'hover'] as const
export const SIDEBAR_POSITIONS = ['left', 'right'] as const
export const SIDEBAR_STYLES = ['ink', 'surface'] as const
export const HEADER_MODES = ['fixed', 'static'] as const
export const CONTENT_WIDTHS = ['fluid', 'boxed'] as const
export const DENSITIES = ['comfortable', 'compact'] as const
export const SPACINGS = ['compact', 'default', 'spacious'] as const
export const HEADING_FONTS = ['Sora', 'DM Sans'] as const
export const SELECTION_COLORS = [
    'primary',
    'secondary',
    'accent',
    'success',
    'info'
] as const
export const TABLE_STRIPES = ['none', 'even', 'odd'] as const
export const THEME_COLORS = [
    'primary',
    'secondary',
    'accent',
    'success',
    'info',
    'warning',
    'error'
] as const

export type ThemeMode = (typeof THEME_MODES)[number]
export type ThemeName = 'light' | 'dark'
export type ThemeColor = (typeof THEME_COLORS)[number]
export type ColorOverrides = Partial<Record<ThemeColor, string>>

type ThemePalette = {
    primary: string
    secondary: string
    accent: string
    ink: string
}

export const COLOR_PRESETS: {
    id: string
    name: string
    light: ThemePalette
    dark: ThemePalette
}[] = [
    {
        id: 'forest',
        name: 'Forest',
        light: {
            primary: '#14633F',
            secondary: '#4B5563',
            accent: '#C8F13A',
            ink: '#101512'
        },
        dark: {
            primary: '#C8F13A',
            secondary: '#A3AC9F',
            accent: '#C8F13A',
            ink: '#101512'
        }
    },
    {
        id: 'ocean',
        name: 'Ocean',
        light: {
            primary: '#0B5CAD',
            secondary: '#475569',
            accent: '#38BDF8',
            ink: '#0B1B2E'
        },
        dark: {
            primary: '#60A5FA',
            secondary: '#94A3B8',
            accent: '#38BDF8',
            ink: '#0B1B2E'
        }
    },
    {
        id: 'royal',
        name: 'Royal',
        light: {
            primary: '#5B3FD6',
            secondary: '#57534E',
            accent: '#F0ABFC',
            ink: '#17122B'
        },
        dark: {
            primary: '#A78BFA',
            secondary: '#A8A29E',
            accent: '#F0ABFC',
            ink: '#17122B'
        }
    },
    {
        id: 'ember',
        name: 'Ember',
        light: {
            primary: '#B4400F',
            secondary: '#57534E',
            accent: '#FCD34D',
            ink: '#1F130C'
        },
        dark: {
            primary: '#FB923C',
            secondary: '#A8A29E',
            accent: '#FCD34D',
            ink: '#1F130C'
        }
    },
    {
        id: 'graphite',
        name: 'Graphite',
        light: {
            primary: '#1F2937',
            secondary: '#6B7280',
            accent: '#A3E635',
            ink: '#111827'
        },
        dark: {
            primary: '#E5E7EB',
            secondary: '#9CA3AF',
            accent: '#A3E635',
            ink: '#111827'
        }
    }
]

export const RADIUS_LEVELS = 5 // 0 (square) to 4 (the default, most rounded)
export const FONT_SIZES = [14, 15, 16, 17, 18] as const

export const DEFAULT_SETTINGS = {
    mode: 'light' as ThemeMode,
    preset: 'forest',
    colors: { light: {} as ColorOverrides, dark: {} as ColorOverrides },

    navLayout: 'vertical' as (typeof NAV_LAYOUTS)[number],
    sidebarMode: 'expanded' as (typeof SIDEBAR_MODES)[number],
    sidebarPosition: 'left' as (typeof SIDEBAR_POSITIONS)[number],
    sidebarStyle: 'ink' as (typeof SIDEBAR_STYLES)[number],
    sidebarFloating: false,
    header: 'fixed' as (typeof HEADER_MODES)[number],
    contentWidth: 'fluid' as (typeof CONTENT_WIDTHS)[number],

    buttonVariant: 'flat' as (typeof VARIANTS)[number],
    cardVariant: 'elevated' as (typeof VARIANTS)[number],
    fieldVariant: 'outlined' as (typeof FIELD_VARIANTS)[number],
    // `inherit` means selects and autocompletes follow the text field variant.
    selectVariant: 'inherit' as (typeof FIELD_VARIANTS)[number] | 'inherit',
    chipVariant: 'tonal' as (typeof VARIANTS)[number],
    alertVariant: 'tonal' as (typeof VARIANTS)[number],

    selectionColor: 'primary' as (typeof SELECTION_COLORS)[number],
    switchInset: true,
    badgeBordered: false,
    listDensity: 'compact' as (typeof DENSITIES)[number],
    tableDensity: 'comfortable' as (typeof DENSITIES)[number],
    tableStripes: 'none' as (typeof TABLE_STRIPES)[number],
    tableHover: true,
    menuAnimated: true,
    dialogScrim: true,

    radius: 4,
    elevation: 1,
    density: 'comfortable' as (typeof DENSITIES)[number],
    fontSize: 16 as (typeof FONT_SIZES)[number],
    headingFont: 'Sora' as (typeof HEADING_FONTS)[number],
    spacing: 'default' as (typeof SPACINGS)[number],
    cardBorder: true
}

export type CustomizerSettings = typeof DEFAULT_SETTINGS

export const cloneDefaults = (): CustomizerSettings => ({
    ...DEFAULT_SETTINGS,
    colors: { light: {}, dark: {} }
})

const isHex = (value: unknown): value is string =>
    typeof value === 'string' && /^#[0-9a-f]{6}$/i.test(value)

const sanitizeColors = (value: unknown): ColorOverrides => {
    const result: ColorOverrides = {}
    if (!value || typeof value !== 'object') return result
    for (const name of THEME_COLORS) {
        const color = (value as Record<string, unknown>)[name]
        if (isHex(color)) result[name] = color
    }
    return result
}

const CHOICES: Partial<Record<keyof CustomizerSettings, readonly unknown[]>> = {
    mode: THEME_MODES,
    preset: COLOR_PRESETS.map(({ id }) => id),
    navLayout: NAV_LAYOUTS,
    sidebarMode: SIDEBAR_MODES,
    sidebarPosition: SIDEBAR_POSITIONS,
    sidebarStyle: SIDEBAR_STYLES,
    header: HEADER_MODES,
    contentWidth: CONTENT_WIDTHS,
    buttonVariant: VARIANTS,
    cardVariant: VARIANTS,
    fieldVariant: FIELD_VARIANTS,
    selectVariant: ['inherit', ...FIELD_VARIANTS],
    chipVariant: VARIANTS,
    alertVariant: VARIANTS,
    selectionColor: SELECTION_COLORS,
    listDensity: DENSITIES,
    tableDensity: DENSITIES,
    tableStripes: TABLE_STRIPES,
    radius: [0, 1, 2, 3, 4],
    elevation: [0, 1, 2, 3, 4],
    density: DENSITIES,
    fontSize: FONT_SIZES,
    headingFont: HEADING_FONTS,
    spacing: SPACINGS
}

/**
 * Builds valid settings from whatever was stored. Anything unknown, outdated
 * or the wrong type falls back to its default, one setting at a time.
 */
export const sanitizeSettings = (stored: unknown): CustomizerSettings => {
    const settings = cloneDefaults()
    if (!stored || typeof stored !== 'object') return settings

    const source = stored as Record<string, unknown>
    const target = settings as Record<string, unknown>
    for (const key of Object.keys(
        DEFAULT_SETTINGS
    ) as (keyof CustomizerSettings)[]) {
        const value = source[key]
        if (key === 'colors') continue
        const choices = CHOICES[key]
        const valid = choices
            ? choices.includes(value)
            : typeof value === typeof DEFAULT_SETTINGS[key]
        if (valid) target[key] = value
    }

    const colors = source.colors as Record<string, unknown> | undefined
    settings.colors = {
        light: sanitizeColors(colors?.light),
        dark: sanitizeColors(colors?.dark)
    }
    return settings
}

const channel = (value: number) => {
    const scaled = value / 255
    return scaled <= 0.03928
        ? scaled / 12.92
        : ((scaled + 0.055) / 1.055) ** 2.4
}

const luminance = (hex: string) => {
    const number = parseInt(hex.slice(1), 16)
    return (
        0.2126 * channel((number >> 16) & 255) +
        0.7152 * channel((number >> 8) & 255) +
        0.0722 * channel(number & 255)
    )
}

/** The readable text color to put on a background color. */
export const foregroundFor = (background: string) => {
    const dark = '#101512'
    const light = luminance(background)
    const onLight = (light + 0.05) / (luminance(dark) + 0.05)
    const onDark = 1.05 / (light + 0.05)
    return onLight >= onDark ? dark : '#FFFFFF'
}

const BUTTON_RADIUS = [0, 'sm', 'md', 'lg', 'pill']
const CARD_RADIUS = [0, 'sm', 'md', 'lg', 'xl']
const FIELD_RADIUS = [0, 'sm', 'md', 'md', 'lg']

/**
 * Vuetify component defaults for the given settings, applied through
 * <v-defaults-provider>. A prop set directly on a component still wins, so
 * individual components can keep their own look.
 */
export const buildComponentDefaults = (
    settings: CustomizerSettings
): NonNullable<VuetifyOptions['defaults']> => {
    const compact = settings.density === 'compact'
    const fieldBase = {
        variant: settings.fieldVariant,
        density: compact ? 'compact' : 'comfortable',
        rounded: FIELD_RADIUS[settings.radius]
    }
    const selectBase = {
        ...fieldBase,
        variant:
            settings.selectVariant === 'inherit'
                ? settings.fieldVariant
                : settings.selectVariant
    }
    const selection = { color: settings.selectionColor }

    return {
        VBtn: {
            variant: settings.buttonVariant,
            // Without elevation, "elevated" would look the same as "flat".
            elevation: settings.buttonVariant === 'elevated' ? 2 : 0,
            density: compact ? 'comfortable' : 'default',
            rounded: BUTTON_RADIUS[settings.radius]
        },
        VCard: {
            variant: settings.cardVariant,
            elevation:
                settings.cardVariant === 'elevated' ? settings.elevation : 0,
            border: settings.cardBorder,
            rounded: CARD_RADIUS[settings.radius]
        },
        VTextField: fieldBase,
        VTextarea: fieldBase,
        VFileInput: fieldBase,
        VSelect: selectBase,
        VAutocomplete: selectBase,
        VCombobox: selectBase,
        VChip: {
            variant: settings.chipVariant,
            density: compact ? 'comfortable' : 'default'
        },
        VAlert: {
            variant: settings.alertVariant,
            density: compact ? 'compact' : 'default',
            rounded: CARD_RADIUS[settings.radius]
        },
        VCheckbox: selection,
        VRadio: selection,
        VSwitch: { ...selection, inset: settings.switchInset },
        VBadge: { bordered: settings.badgeBordered },
        VList: { density: settings.listDensity },
        VListItem: { rounded: FIELD_RADIUS[settings.radius] },
        VTable: { density: settings.tableDensity },
        VDataTable: {
            density: settings.tableDensity,
            hover: settings.tableHover
        },
        VDataTableServer: {
            density: settings.tableDensity,
            hover: settings.tableHover,
            striped:
                settings.tableStripes === 'none'
                    ? undefined
                    : settings.tableStripes
        },
        VMenu: settings.menuAnimated ? {} : { transition: false },
        VDialog: { scrim: settings.dialogScrim },
        VRow: {
            density: settings.spacing === 'compact' ? 'compact' : 'default'
        }
    }
}
