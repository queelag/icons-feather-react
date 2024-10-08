import type { ElementComponent } from '@aracna/react'
import { AracnaIconProps, createBaseElementComponent } from '@aracna/react-components'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherRotateCwElement } from '@aracna/icons-feather-web/elements/rotate-cw-element'

export const IconFeatherRotateCw: ElementComponent<IconFeatherRotateCwElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherRotateCwElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-rotate-cw', IconFeatherRotateCwElement)
