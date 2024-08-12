import type { ElementComponent } from '@aracna/react'
import { AracnaIconProps, createBaseElementComponent } from '@aracna/react-components'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherDivideElement } from '@aracna/icons-feather-web/elements/divide-element'

export const IconFeatherDivide: ElementComponent<IconFeatherDivideElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherDivideElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-divide', IconFeatherDivideElement)
