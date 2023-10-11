import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherPlusElement } from '@aracna/icons-feather-web/elements/plus-element'

export const IconFeatherPlus: ElementComponent<IconFeatherPlusElement, IconProps> = createBaseElementComponent<
  IconFeatherPlusElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-plus', IconFeatherPlusElement)
