import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherDollarSignElement } from '@aracna/icons-feather-web/elements/dollar-sign-element'

export const IconFeatherDollarSign: ElementComponent<IconFeatherDollarSignElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherDollarSignElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-dollar-sign', IconFeatherDollarSignElement)
