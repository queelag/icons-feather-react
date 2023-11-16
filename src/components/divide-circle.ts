import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherDivideCircleElement } from '@aracna/icons-feather-web/elements/divide-circle-element'

export const IconFeatherDivideCircle: ElementComponent<IconFeatherDivideCircleElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherDivideCircleElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-divide-circle', IconFeatherDivideCircleElement)
