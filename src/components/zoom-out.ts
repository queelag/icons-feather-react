import type { ElementComponent } from '@aracna/react'
import { AracnaIconProps, createBaseElementComponent } from '@aracna/react-components'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherZoomOutElement } from '@aracna/icons-feather-web/elements/zoom-out-element'

export const IconFeatherZoomOut: ElementComponent<IconFeatherZoomOutElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherZoomOutElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-zoom-out', IconFeatherZoomOutElement)
