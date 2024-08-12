import type { ElementComponent } from '@aracna/react'
import { AracnaIconProps, createBaseElementComponent } from '@aracna/react-components'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherBookOpenElement } from '@aracna/icons-feather-web/elements/book-open-element'

export const IconFeatherBookOpen: ElementComponent<IconFeatherBookOpenElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherBookOpenElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-book-open', IconFeatherBookOpenElement)
