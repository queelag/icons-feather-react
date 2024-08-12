import type { ElementComponent } from '@aracna/react'
import { AracnaIconProps, createBaseElementComponent } from '@aracna/react-components'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherCornerRightUpElement } from '@aracna/icons-feather-web/elements/corner-right-up-element'

export const IconFeatherCornerRightUp: ElementComponent<IconFeatherCornerRightUpElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherCornerRightUpElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-corner-right-up', IconFeatherCornerRightUpElement)
