import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherPocketElement } from '@aracna/icons-feather-web/elements/pocket-element'

export const IconFeatherPocket: ElementComponent<IconFeatherPocketElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherPocketElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-pocket', IconFeatherPocketElement)
