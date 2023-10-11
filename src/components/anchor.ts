import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherAnchorElement } from '@aracna/icons-feather-web/elements/anchor-element'

export const IconFeatherAnchor: ElementComponent<IconFeatherAnchorElement, IconProps> = createBaseElementComponent<
  IconFeatherAnchorElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-anchor', IconFeatherAnchorElement)
