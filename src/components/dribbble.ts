import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherDribbbleElement } from '@aracna/icons-feather-web/elements/dribbble-element'

export const IconFeatherDribbble: ElementComponent<IconFeatherDribbbleElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherDribbbleElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-dribbble', IconFeatherDribbbleElement)
