import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherArrowDownLeftElement } from '@aracna/icons-feather-web/elements/arrow-down-left-element.js'

export const IconFeatherArrowDownLeft: ElementComponent<IconFeatherArrowDownLeftElement, IconProps> = createBaseElementComponent<
  IconFeatherArrowDownLeftElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-arrow-down-left', IconFeatherArrowDownLeftElement)
