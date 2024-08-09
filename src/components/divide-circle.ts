import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherDivideCircleElement } from '@aracna/icons-feather-web/elements/divide-circle-element'

export const IconFeatherDivideCircle: ElementComponent<IconFeatherDivideCircleElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherDivideCircleElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-divide-circle', IconFeatherDivideCircleElement)
