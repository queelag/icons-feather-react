import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherAlertTriangleElement } from '@aracna/icons-feather-web/elements/alert-triangle-element'

export const IconFeatherAlertTriangle: ElementComponent<IconFeatherAlertTriangleElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherAlertTriangleElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-alert-triangle', IconFeatherAlertTriangleElement)
