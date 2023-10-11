import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherArrowLeftCircleElement } from '@aracna/icons-feather-web/elements/arrow-left-circle-element'

export const IconFeatherArrowLeftCircle: ElementComponent<IconFeatherArrowLeftCircleElement, IconProps> = createBaseElementComponent<
  IconFeatherArrowLeftCircleElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-arrow-left-circle', IconFeatherArrowLeftCircleElement)
