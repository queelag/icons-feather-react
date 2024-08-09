import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherMoveElement } from '@aracna/icons-feather-web/elements/move-element'

export const IconFeatherMove: ElementComponent<IconFeatherMoveElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherMoveElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-move', IconFeatherMoveElement)
