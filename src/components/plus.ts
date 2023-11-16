import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherPlusElement } from '@aracna/icons-feather-web/elements/plus-element'

export const IconFeatherPlus: ElementComponent<IconFeatherPlusElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherPlusElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-plus', IconFeatherPlusElement)
