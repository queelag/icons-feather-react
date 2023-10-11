import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherLifeBuoyElement } from '@aracna/icons-feather-web/elements/life-buoy-element'

export const IconFeatherLifeBuoy: ElementComponent<IconFeatherLifeBuoyElement, IconProps> = createBaseElementComponent<
  IconFeatherLifeBuoyElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-life-buoy', IconFeatherLifeBuoyElement)
