import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherAlertCircleElement } from '@aracna/icons-feather-web/elements/alert-circle-element'

export const IconFeatherAlertCircle: ElementComponent<IconFeatherAlertCircleElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherAlertCircleElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-alert-circle', IconFeatherAlertCircleElement)
