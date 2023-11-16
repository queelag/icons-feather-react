import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherZoomInElement } from '@aracna/icons-feather-web/elements/zoom-in-element'

export const IconFeatherZoomIn: ElementComponent<IconFeatherZoomInElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherZoomInElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-zoom-in', IconFeatherZoomInElement)
