import type { ElementComponent } from '@aracna/react'
import { AracnaIconProps, createBaseElementComponent } from '@aracna/react-components'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherZoomInElement } from '@aracna/icons-feather-web/elements/zoom-in-element'

export const IconFeatherZoomIn: ElementComponent<IconFeatherZoomInElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherZoomInElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-zoom-in', IconFeatherZoomInElement)
