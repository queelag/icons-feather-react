import type { ElementComponent } from '@aracna/react'
import { AracnaIconProps, createBaseElementComponent } from '@aracna/react-components'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherAlertOctagonElement } from '@aracna/icons-feather-web/elements/alert-octagon-element'

export const IconFeatherAlertOctagon: ElementComponent<IconFeatherAlertOctagonElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherAlertOctagonElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-alert-octagon', IconFeatherAlertOctagonElement)
