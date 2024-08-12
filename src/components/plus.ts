import type { ElementComponent } from '@aracna/react'
import { AracnaIconProps, createBaseElementComponent } from '@aracna/react-components'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherPlusElement } from '@aracna/icons-feather-web/elements/plus-element'

export const IconFeatherPlus: ElementComponent<IconFeatherPlusElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherPlusElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-plus', IconFeatherPlusElement)
