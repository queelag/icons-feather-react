import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherBookElement } from '@aracna/icons-feather-web/elements/book-element'

export const IconFeatherBook: ElementComponent<IconFeatherBookElement, IconProps> = createBaseElementComponent<
  IconFeatherBookElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-book', IconFeatherBookElement)
