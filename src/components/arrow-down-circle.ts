import type { ElementComponent } from '@aracna/react'
import { AracnaIconProps, createBaseElementComponent } from '@aracna/react-components'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherArrowDownCircleElement } from '@aracna/icons-feather-web/elements/arrow-down-circle-element'

export const IconFeatherArrowDownCircle: ElementComponent<IconFeatherArrowDownCircleElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherArrowDownCircleElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-arrow-down-circle', IconFeatherArrowDownCircleElement)
