import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherSettingsElement } from '@aracna/icons-feather-web/elements/settings-element'

export const IconFeatherSettings: ElementComponent<IconFeatherSettingsElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherSettingsElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-settings', IconFeatherSettingsElement)
