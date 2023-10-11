import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherPocketElement } from '@aracna/icons-feather-web/elements/pocket-element'

export const IconFeatherPocket: ElementComponent<IconFeatherPocketElement, IconProps> = createBaseElementComponent<
  IconFeatherPocketElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-pocket', IconFeatherPocketElement)
