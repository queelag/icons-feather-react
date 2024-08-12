import type { ElementComponent } from '@aracna/react'
import { AracnaIconProps, createBaseElementComponent } from '@aracna/react-components'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherRotateCcwElement } from '@aracna/icons-feather-web/elements/rotate-ccw-element'

export const IconFeatherRotateCcw: ElementComponent<IconFeatherRotateCcwElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherRotateCcwElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-rotate-ccw', IconFeatherRotateCcwElement)
