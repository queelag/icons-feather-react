import type { ElementComponent } from '@aracna/react'
import { AracnaIconProps, createBaseElementComponent } from '@aracna/react-components'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherCircleElement } from '@aracna/icons-feather-web/elements/circle-element'

export const IconFeatherCircle: ElementComponent<IconFeatherCircleElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherCircleElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-circle', IconFeatherCircleElement)
