import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherCornerUpLeftElement } from '@aracna/icons-feather-web/elements/corner-up-left-element'

export const IconFeatherCornerUpLeft: ElementComponent<IconFeatherCornerUpLeftElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherCornerUpLeftElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-corner-up-left', IconFeatherCornerUpLeftElement)
