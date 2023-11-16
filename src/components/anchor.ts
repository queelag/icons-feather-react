import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherAnchorElement } from '@aracna/icons-feather-web/elements/anchor-element'

export const IconFeatherAnchor: ElementComponent<IconFeatherAnchorElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherAnchorElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-anchor', IconFeatherAnchorElement)
