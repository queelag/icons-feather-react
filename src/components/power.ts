import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherPowerElement } from '@aracna/icons-feather-web/elements/power-element.js'

export const IconFeatherPower: ElementComponent<IconFeatherPowerElement, IconProps> = createBaseElementComponent<
  IconFeatherPowerElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-power', IconFeatherPowerElement)
