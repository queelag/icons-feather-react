import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherAlertCircleElement } from '@aracna/icons-feather-web/elements/alert-circle-element'

export const IconFeatherAlertCircle: ElementComponent<IconFeatherAlertCircleElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherAlertCircleElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-alert-circle', IconFeatherAlertCircleElement)
