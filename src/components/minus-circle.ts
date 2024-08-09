import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherMinusCircleElement } from '@aracna/icons-feather-web/elements/minus-circle-element'

export const IconFeatherMinusCircle: ElementComponent<IconFeatherMinusCircleElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherMinusCircleElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-minus-circle', IconFeatherMinusCircleElement)
