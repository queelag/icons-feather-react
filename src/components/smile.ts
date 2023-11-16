import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherSmileElement } from '@aracna/icons-feather-web/elements/smile-element'

export const IconFeatherSmile: ElementComponent<IconFeatherSmileElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherSmileElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-smile', IconFeatherSmileElement)
