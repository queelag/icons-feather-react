import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherCornerDownRightElement } from '@aracna/icons-feather-web/elements/corner-down-right-element'

export const IconFeatherCornerDownRight: ElementComponent<IconFeatherCornerDownRightElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherCornerDownRightElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-corner-down-right', IconFeatherCornerDownRightElement)
