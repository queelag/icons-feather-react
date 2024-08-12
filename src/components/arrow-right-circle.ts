import type { ElementComponent } from '@aracna/react'
import { AracnaIconProps, createBaseElementComponent } from '@aracna/react-components'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherArrowRightCircleElement } from '@aracna/icons-feather-web/elements/arrow-right-circle-element'

export const IconFeatherArrowRightCircle: ElementComponent<IconFeatherArrowRightCircleElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherArrowRightCircleElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-arrow-right-circle', IconFeatherArrowRightCircleElement)
