import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherCornerUpLeftElement } from '@aracna/icons-feather-web/elements/corner-up-left-element'

export const IconFeatherCornerUpLeft: ElementComponent<IconFeatherCornerUpLeftElement, IconProps> = createBaseElementComponent<
  IconFeatherCornerUpLeftElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-corner-up-left', IconFeatherCornerUpLeftElement)
