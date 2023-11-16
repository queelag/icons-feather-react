import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherBookOpenElement } from '@aracna/icons-feather-web/elements/book-open-element'

export const IconFeatherBookOpen: ElementComponent<IconFeatherBookOpenElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherBookOpenElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-book-open', IconFeatherBookOpenElement)
