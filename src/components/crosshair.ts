import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherCrosshairElement } from '@aracna/icons-feather-web/elements/crosshair-element'

export const IconFeatherCrosshair: ElementComponent<IconFeatherCrosshairElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherCrosshairElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-crosshair', IconFeatherCrosshairElement)
