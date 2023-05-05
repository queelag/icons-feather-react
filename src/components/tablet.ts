import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherTabletElement } from '@aracna/icons-feather-web/elements/tablet-element.js'

export const IconFeatherTablet: ElementComponent<IconFeatherTabletElement, IconProps> = createBaseElementComponent<
  IconFeatherTabletElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-tablet', IconFeatherTabletElement)
