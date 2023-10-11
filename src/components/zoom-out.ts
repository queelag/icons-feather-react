import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherZoomOutElement } from '@aracna/icons-feather-web/elements/zoom-out-element'

export const IconFeatherZoomOut: ElementComponent<IconFeatherZoomOutElement, IconProps> = createBaseElementComponent<
  IconFeatherZoomOutElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-zoom-out', IconFeatherZoomOutElement)
