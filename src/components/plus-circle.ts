import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherPlusCircleElement } from '@aracna/icons-feather-web/elements/plus-circle-element'

export const IconFeatherPlusCircle: ElementComponent<IconFeatherPlusCircleElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherPlusCircleElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-plus-circle', IconFeatherPlusCircleElement)
