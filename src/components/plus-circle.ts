import type { ElementComponent } from '@aracna/react'
import { AracnaIconProps, createBaseElementComponent } from '@aracna/react-components'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherPlusCircleElement } from '@aracna/icons-feather-web/elements/plus-circle-element'

export const IconFeatherPlusCircle: ElementComponent<IconFeatherPlusCircleElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherPlusCircleElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-plus-circle', IconFeatherPlusCircleElement)
