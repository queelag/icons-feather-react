import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherChevronsRightElement } from '@aracna/icons-feather-web/elements/chevrons-right-element'

export const IconFeatherChevronsRight: ElementComponent<IconFeatherChevronsRightElement, IconProps> = createBaseElementComponent<
  IconFeatherChevronsRightElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-chevrons-right', IconFeatherChevronsRightElement)
