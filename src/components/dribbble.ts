import type { ElementComponent } from '@aracna/react'
import { AracnaIconProps, createBaseElementComponent } from '@aracna/react-components'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherDribbbleElement } from '@aracna/icons-feather-web/elements/dribbble-element'

export const IconFeatherDribbble: ElementComponent<IconFeatherDribbbleElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherDribbbleElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-dribbble', IconFeatherDribbbleElement)
