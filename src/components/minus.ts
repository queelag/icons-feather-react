import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherMinusElement } from '@aracna/icons-feather-web/elements/minus-element'

export const IconFeatherMinus: ElementComponent<IconFeatherMinusElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherMinusElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-minus', IconFeatherMinusElement)
