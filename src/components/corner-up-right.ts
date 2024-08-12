import type { ElementComponent } from '@aracna/react'
import { AracnaIconProps, createBaseElementComponent } from '@aracna/react-components'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherCornerUpRightElement } from '@aracna/icons-feather-web/elements/corner-up-right-element'

export const IconFeatherCornerUpRight: ElementComponent<IconFeatherCornerUpRightElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherCornerUpRightElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-corner-up-right', IconFeatherCornerUpRightElement)
