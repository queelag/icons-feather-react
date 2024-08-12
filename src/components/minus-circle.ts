import type { ElementComponent } from '@aracna/react'
import { AracnaIconProps, createBaseElementComponent } from '@aracna/react-components'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherMinusCircleElement } from '@aracna/icons-feather-web/elements/minus-circle-element'

export const IconFeatherMinusCircle: ElementComponent<IconFeatherMinusCircleElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherMinusCircleElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-minus-circle', IconFeatherMinusCircleElement)
