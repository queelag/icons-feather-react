import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherArrowRightCircleElement } from '@aracna/icons-feather-web/elements/arrow-right-circle-element'

export const IconFeatherArrowRightCircle: ElementComponent<IconFeatherArrowRightCircleElement, IconProps> = createBaseElementComponent<
  IconFeatherArrowRightCircleElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-arrow-right-circle', IconFeatherArrowRightCircleElement)
