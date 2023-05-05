import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherZoomInElement } from '@aracna/icons-feather-web/elements/zoom-in-element.js'

export const IconFeatherZoomIn: ElementComponent<IconFeatherZoomInElement, IconProps> = createBaseElementComponent<
  IconFeatherZoomInElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-zoom-in', IconFeatherZoomInElement)
