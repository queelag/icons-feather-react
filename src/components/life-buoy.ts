import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherLifeBuoyElement } from '@aracna/icons-feather-web/elements/life-buoy-element'

export const IconFeatherLifeBuoy: ElementComponent<IconFeatherLifeBuoyElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherLifeBuoyElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-life-buoy', IconFeatherLifeBuoyElement)
