import type { ElementComponent } from '@aracna/react'
import { AracnaIconProps, createBaseElementComponent } from '@aracna/react-components'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherAlertTriangleElement } from '@aracna/icons-feather-web/elements/alert-triangle-element'

export const IconFeatherAlertTriangle: ElementComponent<IconFeatherAlertTriangleElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherAlertTriangleElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-alert-triangle', IconFeatherAlertTriangleElement)
