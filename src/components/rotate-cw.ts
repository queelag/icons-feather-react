import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherRotateCwElement } from '@aracna/icons-feather-web/elements/rotate-cw-element.js'

export const IconFeatherRotateCw: ElementComponent<IconFeatherRotateCwElement, IconProps> = createBaseElementComponent<
  IconFeatherRotateCwElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-rotate-cw', IconFeatherRotateCwElement)
