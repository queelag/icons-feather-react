import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherAlertOctagonElement } from '@aracna/icons-feather-web/elements/alert-octagon-element'

export const IconFeatherAlertOctagon: ElementComponent<IconFeatherAlertOctagonElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherAlertOctagonElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-alert-octagon', IconFeatherAlertOctagonElement)
