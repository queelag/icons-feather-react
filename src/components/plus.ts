import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherPlusElement } from '@aracna/icons-feather-web/elements/plus-element'

export const IconFeatherPlus: ElementComponent<IconFeatherPlusElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherPlusElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-plus', IconFeatherPlusElement)
