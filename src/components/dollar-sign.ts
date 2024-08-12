import type { ElementComponent } from '@aracna/react'
import { AracnaIconProps, createBaseElementComponent } from '@aracna/react-components'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherDollarSignElement } from '@aracna/icons-feather-web/elements/dollar-sign-element'

export const IconFeatherDollarSign: ElementComponent<IconFeatherDollarSignElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherDollarSignElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-dollar-sign', IconFeatherDollarSignElement)
