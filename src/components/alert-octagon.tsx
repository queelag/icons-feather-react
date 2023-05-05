import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherAlertOctagonElement } from '@aracna/icons-feather-web/elements/alert-octagon-element.js'

export const IconFeatherAlertOctagon: ElementComponent<IconFeatherAlertOctagonElement, IconProps> = createBaseElementComponent<
  IconFeatherAlertOctagonElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-alert-octagon', IconFeatherAlertOctagonElement)
