import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherTruckElement } from '@aracna/icons-feather-web/elements/truck-element'

export const IconFeatherTruck: ElementComponent<IconFeatherTruckElement, IconProps> = createBaseElementComponent<
  IconFeatherTruckElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-truck', IconFeatherTruckElement)
