import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherBookOpenElement } from '@aracna/icons-feather-web/elements/book-open-element'

export const IconFeatherBookOpen: ElementComponent<IconFeatherBookOpenElement, IconProps> = createBaseElementComponent<
  IconFeatherBookOpenElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-book-open', IconFeatherBookOpenElement)
