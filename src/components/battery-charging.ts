import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherBatteryChargingElement } from '@aracna/icons-feather-web/elements/battery-charging-element.js'

export const IconFeatherBatteryCharging: ElementComponent<IconFeatherBatteryChargingElement, IconProps> = createBaseElementComponent<
  IconFeatherBatteryChargingElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-battery-charging', IconFeatherBatteryChargingElement)
