import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherSettingsElement } from '@aracna/icons-feather-web/elements/settings-element.js'

export const IconFeatherSettings: ElementComponent<IconFeatherSettingsElement, IconProps> = createBaseElementComponent<
  IconFeatherSettingsElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-settings', IconFeatherSettingsElement)
