import type { ElementComponent } from '@aracna/react'
import { AracnaIconProps, createBaseElementComponent } from '@aracna/react-components'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherXCircleElement } from '@aracna/icons-feather-web/elements/x-circle-element'

export const IconFeatherXCircle: ElementComponent<IconFeatherXCircleElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherXCircleElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-x-circle', IconFeatherXCircleElement)
