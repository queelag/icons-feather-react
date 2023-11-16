import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherBatteryElement } from '@aracna/icons-feather-web/elements/battery-element'

export const IconFeatherBattery: ElementComponent<IconFeatherBatteryElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherBatteryElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-battery', IconFeatherBatteryElement)
