import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherDribbbleElement } from '@aracna/icons-feather-web/elements/dribbble-element.js'

export const IconFeatherDribbble: ElementComponent<IconFeatherDribbbleElement, IconProps> = createBaseElementComponent<
  IconFeatherDribbbleElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-dribbble', IconFeatherDribbbleElement)
