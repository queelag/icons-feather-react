import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherArrowDownCircleElement } from '@aracna/icons-feather-web/elements/arrow-down-circle-element'

export const IconFeatherArrowDownCircle: ElementComponent<IconFeatherArrowDownCircleElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherArrowDownCircleElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-arrow-down-circle', IconFeatherArrowDownCircleElement)
