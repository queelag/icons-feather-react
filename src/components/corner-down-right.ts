import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherCornerDownRightElement } from '@aracna/icons-feather-web/elements/corner-down-right-element'

export const IconFeatherCornerDownRight: ElementComponent<IconFeatherCornerDownRightElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherCornerDownRightElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-corner-down-right', IconFeatherCornerDownRightElement)
