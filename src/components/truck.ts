import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherTruckElement } from '@aracna/icons-feather-web/elements/truck-element'

export const IconFeatherTruck: ElementComponent<IconFeatherTruckElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherTruckElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-truck', IconFeatherTruckElement)
