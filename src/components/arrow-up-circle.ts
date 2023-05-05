import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherArrowUpCircleElement } from '@aracna/icons-feather-web/elements/arrow-up-circle-element.js'

export const IconFeatherArrowUpCircle: ElementComponent<IconFeatherArrowUpCircleElement, IconProps> = createBaseElementComponent<
  IconFeatherArrowUpCircleElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-arrow-up-circle', IconFeatherArrowUpCircleElement)
