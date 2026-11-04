<template>
  <v-navigation-drawer
    v-model="store.panelOpen"
    location="right"
    temporary
    :scrim="false"
    :width="mobile ? 320 : 360"
    :inert="!store.panelOpen"
    aria-label="Customize appearance"
  >
    <template v-if="store.panelOpen">
      <div class="d-flex align-center justify-space-between pa-4">
        <div>
          <h2 class="text-title-medium font-weight-bold">Customize</h2>
          <p class="text-body-small text-medium-emphasis">
            Changes apply instantly and are saved in this browser.
          </p>
        </div>
        <v-btn
          :icon="mdiClose"
          variant="text"
          size="small"
          aria-label="Close customizer"
          @click="store.panelOpen = false"
        />
      </div>
      <v-divider />

      <div class="pa-4 pb-2">
        <p class="text-body-small font-weight-medium mb-2">Live preview</p>
        <LivePreview />
      </div>

      <v-expansion-panels
        v-model="openPanels"
        multiple
        flat
        variant="accordion"
        bg-color="rgba(0, 0, 0, 0)"
      >
        <v-expansion-panel value="theme" title="Theme">
          <v-expansion-panel-text>
            <OptionChips
              label="Mode"
              :model-value="settings.mode"
              :options="modes"
              @update:model-value="set('mode', $event)"
            />
            <p class="text-body-small font-weight-medium mb-2">Color theme</p>
            <div class="d-flex flex-wrap ga-1">
              <v-btn
                v-for="preset in presets"
                :key="preset.id"
                variant="text"
                rounded="lg"
                height="auto"
                min-width="0"
                class="pa-2"
                :aria-pressed="settings.preset === preset.id"
                :aria-label="`${preset.name} color theme`"
                @click="store.applyPreset(preset.id)"
              >
                <div class="d-flex flex-column align-center ga-1">
                  <v-avatar :color="preset[store.resolvedTheme].primary" size="36">
                    <v-icon
                      v-if="settings.preset === preset.id"
                      :icon="mdiCheck"
                      size="20"
                    />
                  </v-avatar>
                  <span class="text-body-small">{{ preset.name }}</span>
                </div>
              </v-btn>
            </div>
          </v-expansion-panel-text>
        </v-expansion-panel>

        <v-expansion-panel value="colors" title="Colors">
          <v-expansion-panel-text>
            <p class="text-body-small text-medium-emphasis mb-2">
              Custom colors apply to the {{ store.resolvedTheme }} theme.
            </p>
            <v-list class="pa-0" density="compact" bg-color="rgba(0, 0, 0, 0)">
              <ColorSwatch
              v-for="name in colorNames"
              :key="name"
              :label="capitalize(name)"
              :color="currentColor(name)"
              @change="store.setColor(name, $event)"
            />
            </v-list>
          </v-expansion-panel-text>
        </v-expansion-panel>

        <v-expansion-panel value="layout" title="Layout">
          <v-expansion-panel-text>
            <OptionChips
              v-for="group in layoutGroups"
              :key="group.key"
              :label="group.label"
              :model-value="settings[group.key]"
              :options="group.options"
              @update:model-value="set(group.key, $event)"
            />
            <v-switch
              :model-value="settings.sidebarFloating"
              label="Floating sidebar (no edge line)"
              color="primary"
              density="compact"
              hide-details
              @update:model-value="set('sidebarFloating', !!$event)"
            />
          </v-expansion-panel-text>
        </v-expansion-panel>

        <v-expansion-panel value="variants" title="Variants">
          <v-expansion-panel-text>
            <OptionChips
              v-for="group in variantGroups"
              :key="group.key"
              :label="group.label"
              :model-value="settings[group.key]"
              :options="group.options"
              @update:model-value="set(group.key, $event)"
            />
          </v-expansion-panel-text>
        </v-expansion-panel>

        <v-expansion-panel value="components" title="Components">
          <v-expansion-panel-text>
            <OptionChips
              v-for="group in componentGroups"
              :key="group.key"
              :label="group.label"
              :model-value="settings[group.key]"
              :options="group.options"
              @update:model-value="set(group.key, $event)"
            />
            <v-switch
              v-for="toggle in componentToggles"
              :key="toggle.key"
              :model-value="settings[toggle.key]"
              :label="toggle.label"
              color="primary"
              density="compact"
              hide-details
              @update:model-value="set(toggle.key, !!$event)"
            />
          </v-expansion-panel-text>
        </v-expansion-panel>

        <v-expansion-panel value="appearance" title="Appearance">
          <v-expansion-panel-text>
            <p class="text-body-small font-weight-medium">Corner radius</p>
            <v-slider
              :model-value="settings.radius"
              :min="0"
              :max="RADIUS_LEVELS - 1"
              :step="1"
              show-ticks="always"
              color="primary"
              aria-label="Corner radius"
              hide-details
              class="mb-3"
              @update:model-value="set('radius', $event)"
            />
            <p class="text-body-small font-weight-medium">Card shadow</p>
            <v-slider
              :model-value="settings.elevation"
              :min="0"
              :max="4"
              :step="1"
              show-ticks="always"
              color="primary"
              aria-label="Card shadow"
              hide-details
              class="mb-3"
              @update:model-value="set('elevation', $event)"
            />
            <p class="text-body-small font-weight-medium">
              Font size ({{ settings.fontSize }}px)
            </p>
            <v-slider
              :model-value="settings.fontSize"
              :min="FONT_SIZES[0]"
              :max="FONT_SIZES[FONT_SIZES.length - 1]"
              :step="1"
              show-ticks="always"
              color="primary"
              aria-label="Font size"
              hide-details
              class="mb-3"
              @update:model-value="set('fontSize', $event as CustomizerSettings['fontSize'])"
            />
            <OptionChips
              v-for="group in appearanceGroups"
              :key="group.key"
              :label="group.label"
              :model-value="settings[group.key]"
              :options="group.options"
              @update:model-value="set(group.key, $event)"
            />
            <v-switch
              :model-value="settings.cardBorder"
              label="Card borders"
              color="primary"
              density="compact"
              hide-details
              @update:model-value="set('cardBorder', !!$event)"
            />
          </v-expansion-panel-text>
        </v-expansion-panel>
      </v-expansion-panels>
    </template>

    <template #append>
      <v-divider />
      <div class="pa-4">
        <v-btn
          block
          variant="tonal"
          color="primary"
          :prepend-icon="mdiRestore"
          @click="store.reset()"
        >
          Reset to defaults
        </v-btn>
      </div>
    </template>
  </v-navigation-drawer>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'
import { useDisplay, useTheme } from 'vuetify'
import { capitalize } from 'lodash'
import { mdiCheck, mdiClose, mdiRestore } from '@mdi/js'
import {
  COLOR_PRESETS as presets,
  CONTENT_WIDTHS,
  DENSITIES,
  FIELD_VARIANTS,
  FONT_SIZES,
  HEADER_MODES,
  HEADING_FONTS,
  NAV_LAYOUTS,
  RADIUS_LEVELS,
  SELECTION_COLORS,
  SIDEBAR_MODES,
  SIDEBAR_POSITIONS,
  SIDEBAR_STYLES,
  SPACINGS,
  TABLE_STRIPES,
  THEME_COLORS as colorNames,
  THEME_MODES,
  VARIANTS,
  type CustomizerSettings,
  type ThemeColor
} from '@/config/customizer'
import { useCustomizerStore } from '@/store/reactivity/customizer'
import ColorSwatch from './ColorSwatch.vue'
import LivePreview from './LivePreview.vue'
import OptionChips from './OptionChips.vue'

const store = useCustomizerStore()
const theme = useTheme()
const { mobile } = useDisplay()

const settings = computed(() => store.settings)
const openPanels = ref(['theme'])

const set = <K extends keyof CustomizerSettings>(
  key: K,
  value: CustomizerSettings[K]
) => store.update(key, value)

const currentColor = (name: ThemeColor) =>
  String(theme.themes.value[store.resolvedTheme].colors[name])

const toOptions = (values: readonly string[]) =>
  values.map((value) => ({
    value,
    title: capitalize(value).replace('-', ' ')
  }))

const modes = toOptions(THEME_MODES)
const variants = toOptions(VARIANTS)
const densities = toOptions(DENSITIES)

// The string keys below hold a fixed list of choices, so their templates can
// loop over them. `as const` keeps each key tied to its setting.
const layoutGroups = [
  { key: 'navLayout', label: 'Navigation', options: toOptions(NAV_LAYOUTS) },
  { key: 'sidebarMode', label: 'Sidebar', options: toOptions(SIDEBAR_MODES) },
  { key: 'sidebarPosition', label: 'Sidebar position', options: toOptions(SIDEBAR_POSITIONS) },
  { key: 'sidebarStyle', label: 'Sidebar style', options: toOptions(SIDEBAR_STYLES) },
  { key: 'header', label: 'Header', options: toOptions(HEADER_MODES) },
  { key: 'contentWidth', label: 'Content width', options: toOptions(CONTENT_WIDTHS) }
] as const

const variantGroups = [
  { key: 'buttonVariant', label: 'Buttons', options: variants },
  { key: 'cardVariant', label: 'Cards', options: variants },
  { key: 'fieldVariant', label: 'Text fields', options: toOptions(FIELD_VARIANTS) },
  {
    key: 'selectVariant',
    label: 'Select and autocomplete',
    options: toOptions(['inherit', ...FIELD_VARIANTS]).map((option) =>
      option.value === 'inherit' ? { ...option, title: 'Same as text fields' } : option
    )
  },
  { key: 'chipVariant', label: 'Chips', options: variants },
  { key: 'alertVariant', label: 'Alerts', options: variants }
] as const

const componentGroups = [
  {
    key: 'selectionColor',
    label: 'Checkbox, radio and switch color',
    options: toOptions(SELECTION_COLORS)
  },
  { key: 'listDensity', label: 'List density', options: densities },
  { key: 'tableDensity', label: 'Table density', options: densities },
  { key: 'tableStripes', label: 'Table stripes', options: toOptions(TABLE_STRIPES) }
] as const

const componentToggles = [
  { key: 'tableHover', label: 'Highlight table rows on hover' },
  { key: 'switchInset', label: 'Inset switches' },
  { key: 'badgeBordered', label: 'Bordered badges' },
  { key: 'menuAnimated', label: 'Animate menus' },
  { key: 'dialogScrim', label: 'Dim page behind dialogs' }
] as const

const appearanceGroups = [
  { key: 'density', label: 'Density', options: densities },
  { key: 'spacing', label: 'Page spacing', options: toOptions(SPACINGS) },
  {
    key: 'headingFont',
    label: 'Heading font',
    options: HEADING_FONTS.map((font) => ({ title: font, value: font }))
  }
] as const
</script>
