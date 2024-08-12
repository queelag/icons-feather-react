import type { ElementComponent } from '@aracna/react'
import { AracnaIconProps, createBaseElementComponent } from '@aracna/react-components'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherBatteryChargingElement } from '@aracna/icons-feather-web/elements/battery-charging-element'

export const IconFeatherBatteryCharging: ElementComponent<IconFeatherBatteryChargingElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherBatteryChargingElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-battery-charging', IconFeatherBatteryChargingElement)
