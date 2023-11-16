import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherMousePointerElement } from '@aracna/icons-feather-web/elements/mouse-pointer-element'

export const IconFeatherMousePointer: ElementComponent<IconFeatherMousePointerElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherMousePointerElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-mouse-pointer', IconFeatherMousePointerElement)
