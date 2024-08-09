import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherBookOpenElement } from '@aracna/icons-feather-web/elements/book-open-element'

export const IconFeatherBookOpen: ElementComponent<IconFeatherBookOpenElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherBookOpenElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-book-open', IconFeatherBookOpenElement)
