import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherRotateCcwElement } from '@aracna/icons-feather-web/elements/rotate-ccw-element.js'

export const IconFeatherRotateCcw: ElementComponent<IconFeatherRotateCcwElement, IconProps> = createBaseElementComponent<
  IconFeatherRotateCcwElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-rotate-ccw', IconFeatherRotateCcwElement)
