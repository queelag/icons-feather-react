import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherTriangleElement } from '@aracna/icons-feather-web/elements/triangle-element.js'

export const IconFeatherTriangle: ElementComponent<IconFeatherTriangleElement, IconProps> = createBaseElementComponent<
  IconFeatherTriangleElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-triangle', IconFeatherTriangleElement)
