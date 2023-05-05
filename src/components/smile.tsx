import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherSmileElement } from '@aracna/icons-feather-web/elements/smile-element.js'

export const IconFeatherSmile: ElementComponent<IconFeatherSmileElement, IconProps> = createBaseElementComponent<
  IconFeatherSmileElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-smile', IconFeatherSmileElement)
