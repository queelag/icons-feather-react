import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherPowerElement } from '@aracna/icons-feather-web/elements/power-element'

export const IconFeatherPower: ElementComponent<IconFeatherPowerElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherPowerElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-power', IconFeatherPowerElement)
