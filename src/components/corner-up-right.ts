import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherCornerUpRightElement } from '@aracna/icons-feather-web/elements/corner-up-right-element'

export const IconFeatherCornerUpRight: ElementComponent<IconFeatherCornerUpRightElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherCornerUpRightElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-corner-up-right', IconFeatherCornerUpRightElement)
