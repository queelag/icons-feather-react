import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherArrowDownElement } from '@aracna/icons-feather-web/elements/arrow-down-element.js'

export const IconFeatherArrowDown: ElementComponent<IconFeatherArrowDownElement, IconProps> = createBaseElementComponent<
  IconFeatherArrowDownElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-arrow-down', IconFeatherArrowDownElement)
