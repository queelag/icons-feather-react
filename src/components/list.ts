import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherListElement } from '@aracna/icons-feather-web/elements/list-element'

export const IconFeatherList: ElementComponent<IconFeatherListElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherListElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-list', IconFeatherListElement)
