import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherArrowUpElement } from '@aracna/icons-feather-web/elements/arrow-up-element'

export const IconFeatherArrowUp: ElementComponent<IconFeatherArrowUpElement, IconProps> = createBaseElementComponent<
  IconFeatherArrowUpElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-arrow-up', IconFeatherArrowUpElement)
