import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherBatteryElement } from '@aracna/icons-feather-web/elements/battery-element'

export const IconFeatherBattery: ElementComponent<IconFeatherBatteryElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherBatteryElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-battery', IconFeatherBatteryElement)
