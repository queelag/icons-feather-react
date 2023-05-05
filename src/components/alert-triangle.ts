import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherAlertTriangleElement } from '@aracna/icons-feather-web/elements/alert-triangle-element.js'

export const IconFeatherAlertTriangle: ElementComponent<IconFeatherAlertTriangleElement, IconProps> = createBaseElementComponent<
  IconFeatherAlertTriangleElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-alert-triangle', IconFeatherAlertTriangleElement)
