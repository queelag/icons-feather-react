import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherAlignRightElement } from '@aracna/icons-feather-web/elements/align-right-element'

export const IconFeatherAlignRight: ElementComponent<IconFeatherAlignRightElement, IconProps> = createBaseElementComponent<
  IconFeatherAlignRightElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-align-right', IconFeatherAlignRightElement)
