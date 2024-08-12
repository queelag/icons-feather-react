import type { ElementComponent } from '@aracna/react'
import { AracnaIconProps, createBaseElementComponent } from '@aracna/react-components'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherListElement } from '@aracna/icons-feather-web/elements/list-element'

export const IconFeatherList: ElementComponent<IconFeatherListElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherListElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-list', IconFeatherListElement)
