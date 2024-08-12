import type { ElementComponent } from '@aracna/react'
import { AracnaIconProps, createBaseElementComponent } from '@aracna/react-components'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherCrosshairElement } from '@aracna/icons-feather-web/elements/crosshair-element'

export const IconFeatherCrosshair: ElementComponent<IconFeatherCrosshairElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherCrosshairElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-crosshair', IconFeatherCrosshairElement)
