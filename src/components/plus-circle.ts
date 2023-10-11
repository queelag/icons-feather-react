import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherPlusCircleElement } from '@aracna/icons-feather-web/elements/plus-circle-element'

export const IconFeatherPlusCircle: ElementComponent<IconFeatherPlusCircleElement, IconProps> = createBaseElementComponent<
  IconFeatherPlusCircleElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-plus-circle', IconFeatherPlusCircleElement)
