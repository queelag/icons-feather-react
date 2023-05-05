import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherCastElement } from '@aracna/icons-feather-web/elements/cast-element.js'

export const IconFeatherCast: ElementComponent<IconFeatherCastElement, IconProps> = createBaseElementComponent<
  IconFeatherCastElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-cast', IconFeatherCastElement)
