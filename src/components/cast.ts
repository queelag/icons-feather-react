import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherCastElement } from '@aracna/icons-feather-web/elements/cast-element'

export const IconFeatherCast: ElementComponent<IconFeatherCastElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherCastElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-cast', IconFeatherCastElement)
