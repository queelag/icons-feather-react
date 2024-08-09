import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherArrowLeftCircleElement } from '@aracna/icons-feather-web/elements/arrow-left-circle-element'

export const IconFeatherArrowLeftCircle: ElementComponent<IconFeatherArrowLeftCircleElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherArrowLeftCircleElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-arrow-left-circle', IconFeatherArrowLeftCircleElement)
