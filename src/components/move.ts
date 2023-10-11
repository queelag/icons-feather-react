import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherMoveElement } from '@aracna/icons-feather-web/elements/move-element'

export const IconFeatherMove: ElementComponent<IconFeatherMoveElement, IconProps> = createBaseElementComponent<
  IconFeatherMoveElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-move', IconFeatherMoveElement)
