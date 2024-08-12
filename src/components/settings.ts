import type { ElementComponent } from '@aracna/react'
import { AracnaIconProps, createBaseElementComponent } from '@aracna/react-components'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherSettingsElement } from '@aracna/icons-feather-web/elements/settings-element'

export const IconFeatherSettings: ElementComponent<IconFeatherSettingsElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherSettingsElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-settings', IconFeatherSettingsElement)
