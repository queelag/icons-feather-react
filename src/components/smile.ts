import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherSmileElement } from '@aracna/icons-feather-web/elements/smile-element'

export const IconFeatherSmile: ElementComponent<IconFeatherSmileElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherSmileElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-smile', IconFeatherSmileElement)
