import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherCornerRightUpElement } from '@aracna/icons-feather-web/elements/corner-right-up-element'

export const IconFeatherCornerRightUp: ElementComponent<IconFeatherCornerRightUpElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherCornerRightUpElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-corner-right-up', IconFeatherCornerRightUpElement)
