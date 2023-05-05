import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherMinusElement } from '@aracna/icons-feather-web/elements/minus-element.js'

export const IconFeatherMinus: ElementComponent<IconFeatherMinusElement, IconProps> = createBaseElementComponent<
  IconFeatherMinusElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-minus', IconFeatherMinusElement)
