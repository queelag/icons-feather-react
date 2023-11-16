import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherMenuElement } from '@aracna/icons-feather-web/elements/menu-element'

export const IconFeatherMenu: ElementComponent<IconFeatherMenuElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherMenuElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-menu', IconFeatherMenuElement)
