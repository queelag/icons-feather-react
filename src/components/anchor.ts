import type { ElementComponent } from '@aracna/react'
import { AracnaIconProps, createBaseElementComponent } from '@aracna/react-components'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherAnchorElement } from '@aracna/icons-feather-web/elements/anchor-element'

export const IconFeatherAnchor: ElementComponent<IconFeatherAnchorElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherAnchorElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-anchor', IconFeatherAnchorElement)
