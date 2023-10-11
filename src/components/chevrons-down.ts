import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherChevronsDownElement } from '@aracna/icons-feather-web/elements/chevrons-down-element'

export const IconFeatherChevronsDown: ElementComponent<IconFeatherChevronsDownElement, IconProps> = createBaseElementComponent<
  IconFeatherChevronsDownElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-chevrons-down', IconFeatherChevronsDownElement)
