import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherAlertTriangleElement } from '@aracna/icons-feather-web/elements/alert-triangle-element'

export const IconFeatherAlertTriangle: ElementComponent<IconFeatherAlertTriangleElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherAlertTriangleElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-alert-triangle', IconFeatherAlertTriangleElement)
