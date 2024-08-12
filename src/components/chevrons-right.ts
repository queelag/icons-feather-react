import type { ElementComponent } from '@aracna/react'
import { AracnaIconProps, createBaseElementComponent } from '@aracna/react-components'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherChevronsRightElement } from '@aracna/icons-feather-web/elements/chevrons-right-element'

export const IconFeatherChevronsRight: ElementComponent<IconFeatherChevronsRightElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherChevronsRightElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-chevrons-right', IconFeatherChevronsRightElement)
