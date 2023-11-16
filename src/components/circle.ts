import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherCircleElement } from '@aracna/icons-feather-web/elements/circle-element'

export const IconFeatherCircle: ElementComponent<IconFeatherCircleElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherCircleElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-circle', IconFeatherCircleElement)
