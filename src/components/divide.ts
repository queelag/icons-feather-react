import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherDivideElement } from '@aracna/icons-feather-web/elements/divide-element'

export const IconFeatherDivide: ElementComponent<IconFeatherDivideElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherDivideElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-divide', IconFeatherDivideElement)
