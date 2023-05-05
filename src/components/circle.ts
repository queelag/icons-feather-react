import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherCircleElement } from '@aracna/icons-feather-web/elements/circle-element.js'

export const IconFeatherCircle: ElementComponent<IconFeatherCircleElement, IconProps> = createBaseElementComponent<
  IconFeatherCircleElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-circle', IconFeatherCircleElement)
