import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherArrowDownCircleElement } from '@aracna/icons-feather-web/elements/arrow-down-circle-element'

export const IconFeatherArrowDownCircle: ElementComponent<IconFeatherArrowDownCircleElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherArrowDownCircleElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-arrow-down-circle', IconFeatherArrowDownCircleElement)
