import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherRotateCcwElement } from '@aracna/icons-feather-web/elements/rotate-ccw-element'

export const IconFeatherRotateCcw: ElementComponent<IconFeatherRotateCcwElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherRotateCcwElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-rotate-ccw', IconFeatherRotateCcwElement)
