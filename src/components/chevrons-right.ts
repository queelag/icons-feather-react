import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherChevronsRightElement } from '@aracna/icons-feather-web/elements/chevrons-right-element'

export const IconFeatherChevronsRight: ElementComponent<IconFeatherChevronsRightElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherChevronsRightElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-chevrons-right', IconFeatherChevronsRightElement)
