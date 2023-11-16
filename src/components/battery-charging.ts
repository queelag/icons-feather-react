import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherBatteryChargingElement } from '@aracna/icons-feather-web/elements/battery-charging-element'

export const IconFeatherBatteryCharging: ElementComponent<IconFeatherBatteryChargingElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherBatteryChargingElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-battery-charging', IconFeatherBatteryChargingElement)
