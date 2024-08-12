import type { ElementComponent } from '@aracna/react'
import { AracnaIconProps, createBaseElementComponent } from '@aracna/react-components'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherMousePointerElement } from '@aracna/icons-feather-web/elements/mouse-pointer-element'

export const IconFeatherMousePointer: ElementComponent<IconFeatherMousePointerElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherMousePointerElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-mouse-pointer', IconFeatherMousePointerElement)
