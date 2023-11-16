import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherMinusCircleElement } from '@aracna/icons-feather-web/elements/minus-circle-element'

export const IconFeatherMinusCircle: ElementComponent<IconFeatherMinusCircleElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherMinusCircleElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-minus-circle', IconFeatherMinusCircleElement)
