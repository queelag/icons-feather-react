import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherLifeBuoyElement } from '@aracna/icons-feather-web/elements/life-buoy-element'

export const IconFeatherLifeBuoy: ElementComponent<IconFeatherLifeBuoyElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherLifeBuoyElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-life-buoy', IconFeatherLifeBuoyElement)
