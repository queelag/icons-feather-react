import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherPowerElement } from '@aracna/icons-feather-web/elements/power-element'

export const IconFeatherPower: ElementComponent<IconFeatherPowerElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherPowerElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-power', IconFeatherPowerElement)
