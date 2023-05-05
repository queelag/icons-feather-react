import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherDivideElement } from '@aracna/icons-feather-web/elements/divide-element.js'

export const IconFeatherDivide: ElementComponent<IconFeatherDivideElement, IconProps> = createBaseElementComponent<
  IconFeatherDivideElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-divide', IconFeatherDivideElement)
