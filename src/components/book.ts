import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherBookElement } from '@aracna/icons-feather-web/elements/book-element'

export const IconFeatherBook: ElementComponent<IconFeatherBookElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherBookElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-book', IconFeatherBookElement)
