import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherTriangleElement } from '@aracna/icons-feather-web/elements/triangle-element'

export const IconFeatherTriangle: ElementComponent<IconFeatherTriangleElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherTriangleElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-triangle', IconFeatherTriangleElement)
