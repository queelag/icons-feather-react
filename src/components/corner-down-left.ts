import type { ElementComponent } from '@aracna/react'
import { AracnaIconProps, createBaseElementComponent } from '@aracna/react-components'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherCornerDownLeftElement } from '@aracna/icons-feather-web/elements/corner-down-left-element'

export const IconFeatherCornerDownLeft: ElementComponent<IconFeatherCornerDownLeftElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherCornerDownLeftElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-corner-down-left', IconFeatherCornerDownLeftElement)
