import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherCrosshairElement } from '@aracna/icons-feather-web/elements/crosshair-element'

export const IconFeatherCrosshair: ElementComponent<IconFeatherCrosshairElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherCrosshairElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-crosshair', IconFeatherCrosshairElement)
