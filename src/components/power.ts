import type { ElementComponent } from '@aracna/react'
import { AracnaIconProps, createBaseElementComponent } from '@aracna/react-components'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherPowerElement } from '@aracna/icons-feather-web/elements/power-element'

export const IconFeatherPower: ElementComponent<IconFeatherPowerElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherPowerElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-power', IconFeatherPowerElement)
