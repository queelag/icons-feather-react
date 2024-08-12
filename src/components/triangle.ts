import type { ElementComponent } from '@aracna/react'
import { AracnaIconProps, createBaseElementComponent } from '@aracna/react-components'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherTriangleElement } from '@aracna/icons-feather-web/elements/triangle-element'

export const IconFeatherTriangle: ElementComponent<IconFeatherTriangleElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherTriangleElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-triangle', IconFeatherTriangleElement)
