import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherCornerUpRightElement } from '@aracna/icons-feather-web/elements/corner-up-right-element'

export const IconFeatherCornerUpRight: ElementComponent<IconFeatherCornerUpRightElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherCornerUpRightElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-corner-up-right', IconFeatherCornerUpRightElement)
