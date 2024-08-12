import type { ElementComponent } from '@aracna/react'
import { AracnaIconProps, createBaseElementComponent } from '@aracna/react-components'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherBookElement } from '@aracna/icons-feather-web/elements/book-element'

export const IconFeatherBook: ElementComponent<IconFeatherBookElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherBookElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-book', IconFeatherBookElement)
