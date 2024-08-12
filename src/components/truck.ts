import type { ElementComponent } from '@aracna/react'
import { AracnaIconProps, createBaseElementComponent } from '@aracna/react-components'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherTruckElement } from '@aracna/icons-feather-web/elements/truck-element'

export const IconFeatherTruck: ElementComponent<IconFeatherTruckElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherTruckElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-truck', IconFeatherTruckElement)
