import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherArrowDownCircleElement } from '@aracna/icons-feather-web/elements/arrow-down-circle-element'

export const IconFeatherArrowDownCircle: ElementComponent<IconFeatherArrowDownCircleElement, IconProps> = createBaseElementComponent<
  IconFeatherArrowDownCircleElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-arrow-down-circle', IconFeatherArrowDownCircleElement)
