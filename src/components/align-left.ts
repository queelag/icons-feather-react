import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherAlignLeftElement } from '@aracna/icons-feather-web/elements/align-left-element.js'

export const IconFeatherAlignLeft: ElementComponent<IconFeatherAlignLeftElement, IconProps> = createBaseElementComponent<
  IconFeatherAlignLeftElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-align-left', IconFeatherAlignLeftElement)
