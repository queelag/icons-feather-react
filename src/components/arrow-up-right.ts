import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherArrowUpRightElement } from '@aracna/icons-feather-web/elements/arrow-up-right-element.js'

export const IconFeatherArrowUpRight: ElementComponent<IconFeatherArrowUpRightElement, IconProps> = createBaseElementComponent<
  IconFeatherArrowUpRightElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-arrow-up-right', IconFeatherArrowUpRightElement)
