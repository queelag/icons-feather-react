import type { ElementComponent } from '@aracna/react'
import { AracnaIconProps, createBaseElementComponent } from '@aracna/react-components'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherCornerRightDownElement } from '@aracna/icons-feather-web/elements/corner-right-down-element'

export const IconFeatherCornerRightDown: ElementComponent<IconFeatherCornerRightDownElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherCornerRightDownElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-corner-right-down', IconFeatherCornerRightDownElement)
