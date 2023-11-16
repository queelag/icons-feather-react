import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherRotateCwElement } from '@aracna/icons-feather-web/elements/rotate-cw-element'

export const IconFeatherRotateCw: ElementComponent<IconFeatherRotateCwElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherRotateCwElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-rotate-cw', IconFeatherRotateCwElement)
