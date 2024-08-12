import type { ElementComponent } from '@aracna/react'
import { AracnaIconProps, createBaseElementComponent } from '@aracna/react-components'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherCastElement } from '@aracna/icons-feather-web/elements/cast-element'

export const IconFeatherCast: ElementComponent<IconFeatherCastElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherCastElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-cast', IconFeatherCastElement)
