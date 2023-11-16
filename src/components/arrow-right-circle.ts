import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherArrowRightCircleElement } from '@aracna/icons-feather-web/elements/arrow-right-circle-element'

export const IconFeatherArrowRightCircle: ElementComponent<IconFeatherArrowRightCircleElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherArrowRightCircleElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-arrow-right-circle', IconFeatherArrowRightCircleElement)
