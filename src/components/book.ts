import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherBookElement } from '@aracna/icons-feather-web/elements/book-element'

export const IconFeatherBook: ElementComponent<IconFeatherBookElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherBookElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-book', IconFeatherBookElement)
