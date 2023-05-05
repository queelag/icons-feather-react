import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherDollarSignElement } from '@aracna/icons-feather-web/elements/dollar-sign-element.js'

export const IconFeatherDollarSign: ElementComponent<IconFeatherDollarSignElement, IconProps> = createBaseElementComponent<
  IconFeatherDollarSignElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-dollar-sign', IconFeatherDollarSignElement)
