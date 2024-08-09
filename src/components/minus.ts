import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherMinusElement } from '@aracna/icons-feather-web/elements/minus-element'

export const IconFeatherMinus: ElementComponent<IconFeatherMinusElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherMinusElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-minus', IconFeatherMinusElement)
